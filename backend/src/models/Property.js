const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    location: { type: String, required: true },

    pricePerWeek: { type: Number, required: true },

    images: [{ type: String }],

    description: String,

    features: {
      type: [String], // ["WiFi", "Gym", "Study Room"]
      default: [],
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    isPopular: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


const Property = mongoose.model("Property", propertySchema);

module.exports = Property;