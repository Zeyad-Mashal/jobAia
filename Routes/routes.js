const express = require('express');
const router = express.Router();

const AuthRoutes = require("../Modules/Auth/Auth.routes");
const ApplicationRoutes = require("../Modules/Application/Application.routes");
const FeedbackRoutes = require("../Modules/Feedback/Feedback.routes");
const JobPostRoutes = require("../Modules/JobPost/JobPost.routes");
const searchRoute = require("../Modules/search/search.routes");
const filterRoute = require("../Modules/filter/filter.routes");
const ProfileRoutes = require("../Modules/Profile/Profile.routes");

router.use(AuthRoutes);
router.use(ApplicationRoutes);
router.use(FeedbackRoutes);
router.use(JobPostRoutes);
router.use(searchRoute);
router.use(filterRoute);
router.use(ProfileRoutes);

module.exports = router;
