// Modules/Profile/Profile.model.js

const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    personalInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    cv: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    minimumSalary: {
        type: String,
    },
    jobSearchStatus: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: [String],
        required: true,
    },
    jobCategory: {
        type: [String],
    },
    jobType: {
        type: [String],
        required: true,
    },
    workExperience: {
        type: [String],
    },
    education: {
        type: [String],
    },
    skills: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill",
        },
    ],
});

const profile = mongoose.model("Profile", profileSchema);

module.exports = profile;
