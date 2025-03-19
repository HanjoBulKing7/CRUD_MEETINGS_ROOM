const mongoose = require ("mongoose");//Import the object from MongoDB

//Define neces
const meetingSchema = new mongoose.Schema({ 
    "name" : { type:  String, required: true },//Name of the meeting
    "beginning_time": { type: Date, required: true},//Beginning time
    "ending_time": { type: Date, required: true}//Ending time 
});

//Export the Schema to use on the controller file 
module.exports =  mongoose.model('Meeting', meetingSchema);