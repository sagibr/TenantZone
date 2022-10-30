const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 3001

const userRoutes = require("./routes/userRoutes")

const apartmentRoutes = require("./routes/apartmentsRoutes")
const { default: mongoose } = require("mongoose")
const bodyParser = require("body-parser")

app.use(cors())
require("dotenv").config()
mongoose.Promise = global.Promise
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})
app.use(bodyParser.json())

app.use("/", apartmentRoutes)

app.use("/", userRoutes)

app.use((req, err, next) => {
  console.log(err)
  next()
})

app.listen(port, () => {
  console.log(`server is up and runing on port ${port}`)
})
