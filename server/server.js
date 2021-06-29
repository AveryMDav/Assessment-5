const express = require("express");
const cors = require("cors");
const controllers = require("./controllers");
const app = express();
const { getCompliment, getFortune, addCompliment, getAllCompliments, deleteCompliment } = controllers;
app.use(cors());
app.use(express.json());



app.get("/api/compliment", getCompliment);
//this grabs a random compliment from the database
app.get("/api/compliment/all", getAllCompliments)
//this gets all compliments from the database
app.get("/api/fortune", getFortune);
//this gravs a random fortune from the database
app.post("/api/compliment", addCompliment)  
//this adds a compliment to the database
app.delete("/api/comliment/id", deleteCompliment)
//this deletes a compliment from the database

app.listen(4000, () => console.log("Server running on 4000"));
