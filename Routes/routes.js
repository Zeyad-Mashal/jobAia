const AuthRoutes = require("../Modules/Auth/Auth.routes");

const ApplicationRoutes = require("../Modules/Application/Application.routes");

const FeedbackRoutes = require("../Modules/Feedback/Feedback.routes");

const JobPostRoutes = require("../Modules/JobPost/JobPost.routes");

const searchRoute = require("../Modules/search/search.routes")

const filterRoute = require("../Modules/filter/filter.routes")

const ApplicationsAndApplicants = require("../Modules/Applications-Applicants/ApplicationsAndApplicants.routes")

const ContactRouts = require("../Modules/ContactUs/ContactUs.routes")


module.exports = {
    AuthRoutes,
    ApplicationRoutes,
    FeedbackRoutes,
    JobPostRoutes,
    searchRoute,
    filterRoute,
    ApplicationsAndApplicants,
    ContactRouts
} 