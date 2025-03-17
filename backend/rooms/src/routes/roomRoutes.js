const express = require("express");//Import dependence
//Import routes
const {getRoom, createRoom, deleteRoom } = require('../controllers/roomController.js');

const router = express.Router();

//Define routes
router.get('/', getRoom);
router.post('/', createRoom);
router.delete('/:id', deleteRoom);

module.exports = router;