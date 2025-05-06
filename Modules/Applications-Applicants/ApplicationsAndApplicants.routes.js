const express = require("express");
const router = express.Router();
const path = require("path");

const { ViewApplication,
    CreateApplication,
    getUserApplicants,
    getUserApplications } = require("./Controller/App-Applicants.controller")


router.get('/application', ViewApplication);

router.post('/application/:userId/:JobId', CreateApplication);

router.get("/applications/user/:id", getUserApplications);

router.get("/applications/JobPost/:jobPostId", getUserApplicants)


module.exports = router;
