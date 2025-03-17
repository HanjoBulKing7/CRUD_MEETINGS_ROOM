//Import dependencies 
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();//Load environment variables

const app = express();//Create express app 

app.use(express.json());//Middleware to use JSON()
//Connect to the database 
mongoose.connect(process.env.DB_URL)
.then(()=>{
  console.log("Database URL: "+process.env.DB_URL)
  console.log("Connected to the database")
})//If connected succesfully
.catch((err)=>console.log("Connection error: "+err));//If failed while connecting

//Import routes from the file roomRoutes.js
const roomRoutes = require('./routes/roomRoutes.js')

app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT //Use env var PORT
app.listen(PORT, () => {//Start the server on the assigned PORT
  console.log(`Server running on: http://localhost:${PORT}`);
});