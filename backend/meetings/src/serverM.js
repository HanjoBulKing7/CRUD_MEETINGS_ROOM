//Imprt useful dependencies 
const mongoose = require ("mongoose"); 
const express = require ("express");
const dotenv = require ("dotenv");

//Load the environment variables 
dotenv.config();

const app = express();//Create express app 

app.use(express.json());//Use JSON middleware 

mongoose.connect(process.env.MICROSERVICE1_DB_URL)
.then(()=>console.log("Connnected to the database"))
.catch((e)=>console.log("Connection error: "+e));

const meetingAppRoutes = require ("../src/routes/meetingRoutes.js"); 

app.use("/api/meetings", meetingAppRoutes)

const meetingsMicroservicePort = process.env.PORT;

app.listen(meetingsMicroservicePort, ()=>{
    console.log(`Server running on port: ${meetingsMicroservicePort}`);
})