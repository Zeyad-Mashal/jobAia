const express = require("express");
const router = express.Router();
const { updateDetails, getProfile, Postdetails, getUserApplications, getUserApplicants } = require("../Profile/Controller/Profile.controller");
const requireAuth = require("../../middleware/JWT");

router.post("/profile", requireAuth, Postdetails); // ✅ عدّل هنا

router.get("/profile/:id/:idSkill", getProfile);

router.put("/profile/:id", updateDetails);

router.get("/applications/user/:id", getUserApplications);

router.get("/applications/JobPost/:jobPostId", getUserApplicants);

module.exports = router;
