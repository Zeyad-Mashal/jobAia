const express = require("express");
const router = express.Router();
const { Postdetails, getProfile, updateDetails, getUserApplications, getUserApplicants } = require("./controller/profile.controller");


router.post("/profile/:id", Postdetails);

router.get("/profile/:id/:idSkill", getProfile);

router.put("/profile/:id", updateDetails);

router.get("/applications/user/:id", getUserApplications);

router.get("/applications/JobPost/:jobPostId", getUserApplicants)


module.exports = router;