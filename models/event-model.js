const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    coordinator: {
        type: String,
        required: true
    },
    coordinatorphno: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: false
    }

}, {
    timestamps: true
})
module.exports = mongoose.model("Event", eventSchema)