const Meeting = require ("../models/meetingModel.js");

// Create a new meeting POST
const createMeeting = async (req, res) => {
  const meetingParams = new Meeting(req.body);//Extract information from the request
  
  try {
    const newMeeting = await meetingParams.save();//Using the method to save on the DB 
    res.status(201).json(newMeeting);//Set the status to 201
  } catch (err) {
    res.status(400).json("Error while creating the room: "+{ message: err.message });
  }
};

// Get meetings from db GET
const getMeeting = async (req, res) => {
  //Using try-catch statemnent to handle exceptions
  try {
    const dataMeeting = await Meeting.find();//Search all the rooms
    res.json(dataMeeting);//Convert to JSON the response
  } catch (err) {//If failed this block will be executed
    //Set an error status and save the message error 
    res.status(500).json({ message: err.message });
  }
};

//Delete an existing meeting  DELETE
const deleteMeeting = async (req, res) => {
  const meetingId = req.params.id;
  try {
    await Meeting.findByIdAndDelete(meetingId);
    res.status(200).json({message: "Deleted succesfully"});
  } catch (err) {
    res.status(400).json("Error "+err);
  }
};

module.exports = { getMeeting, createMeeting, deleteMeeting};