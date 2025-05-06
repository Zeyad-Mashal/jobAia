const express = require("express");
const router = express.Router();
const { PostComment, GetComments, GetOneFeedback } = require("../Feedback/Controller/Feedback.controller");


router.post("/feedback/:userId/:JobId", PostComment);

router.get("/feedback", GetComments);

router.get("/feedback/:id", GetOneFeedback)



module.exports = router;