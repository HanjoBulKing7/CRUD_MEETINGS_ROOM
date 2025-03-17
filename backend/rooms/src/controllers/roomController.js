const Room = require('../models/roomModel.js');//Import schema 

// Get rooms from db
const getRoom = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new room 
const createRoom = async (req, res) => {
  const room = new Room(req.body);

  try {
    const newRoom = await room.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(400).json("Error while creating the room: "+{ message: err.message });
  }
};

// Erase an existing room  DELETE
const deleteRoom = async (req, res) => {
  const roomId = req.params.id;
  try {
    await Room.findByIdAndDelete(roomId);
    res.status(201).json({message: "Deleted succesfully"});
  } catch (err) {
    res.status(400).json("Error "+err);
  }
};

module.exports = { getRoom, createRoom, deleteRoom };