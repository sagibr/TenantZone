const mongoose = require("mongoose")

const ApartmentSchema = mongoose.Schema({
  image: [
    {
      url: {
        type: Array,
        required: true,
      },
    },
  ],
  adress: { type: String, required: true },
  price: { type: Number, required: true },
  floor: { type: Number, required: true },
  romms: { type: Number, required: true },
  size: { type: Number, required: true },
  properties: {
    elevator: { type: Boolean, required: true },
    parking: { type: Boolean, required: true },
    bars: { type: Boolean, required: true },
    storage: { type: Boolean, required: true },
    airConditioner: { type: Boolean, required: true },
    porch: { type: Boolean, required: true },
    renovated: { type: Boolean, required: true },
  },
  opinions: [
    {
      user: {
        name: { type: String, required: true },
        profileImage: { url: { type: String, required: true } },
      },
      payed: { type: Number, required: true },
      date: { type: Date, default: Date.now },
      opinion: { type: String, required: true },
    },
  ],
  ownerInfo: {
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
  },
})

const Apartment = mongoose.model("apartment", ApartmentSchema)

module.exports = Apartment
