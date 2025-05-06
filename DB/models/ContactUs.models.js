const mongoose = require('mongoose')

const ContactUsSchema = new mongoose.Schema({
    FirtsName: {
        type: String,
        required: true,
    },

    LastName: {
        type: String,
        required: true,
    },

    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Invalid email format"],
    },
    Message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ContactUs = mongoose.model("ContactUs", ContactUsSchema);

module.exports = ContactUs;