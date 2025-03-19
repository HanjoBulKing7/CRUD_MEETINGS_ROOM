const express = require ("express"); 

const { getMeeting, createMeeting, deleteMeeting} = require ("../controllers/meetingController.js");

const router = express.Router();

router.post("/", createMeeting);
router.get("/", getMeeting);
router.delete("/:id", deleteMeeting); 

module.exports = router; 