const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get("/users", (req, res, next) => {
  User.find()
    .then((data) => res.json(data))
    .catch(next)
})
router.get("/users/:email/:password", (req, res, next) => {
  User.find({ email: req.params.email, password: req.params.password })
    .then((data) => res.json(data))
    .catch(next)
})

router.post("/users", (req, res, next) => {
  req.body
    ? User.create(req.body)
        .then((data) => res.json(data))
        .catch(next)
    : res.json({ eror: "this input is empty" })
})
router.delete("/users", (req, res, next) => {
  Apartments.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next)
})

module.exports = router
