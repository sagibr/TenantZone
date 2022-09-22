const express = require("express")
const Apartments = require("../models/apartment")
const router = express.Router()

router.get("/apartments/", (req, res, next) => {
  const adressRegex = new RegExp(req.query.adress)
  const query = {}
  for (property in req.query) {
    if (Apartments.schema.obj.hasOwnProperty(property)) {
      query[property] = req.query[property]
    }
  }
  if (query.adress) {
    query.adress = { $regex: adressRegex, $options: "i" }
  }

  Apartments.find(query)
    .then((data) => res.json(data))
    .catch(next)
})
router.get("/apartments/:id", (req, res, next) => {
  Apartments.find({ _id: req.params["id"] })
    .then((data) => res.json(data))
    .catch(next)
})
// router.get("/apartments/:id", (req, res, next) => {

// Apartments.find({ _id: req.params["id?"] })
//     .then((data) => res.json(data))
//     .catch(next)
// }

router.post("/apartments", (req, res, next) => {
  req.body
    ? Apartments.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ eror: "this input is empty" })
})
router.delete("/apartments/:id", (req, res, next) => {
  Apartments.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next)
})

module.exports = router
