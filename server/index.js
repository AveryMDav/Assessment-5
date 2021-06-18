const express = require("express");
const cors = require("cors");
const controllers = require("./controllers");
const app = express();
const { getCompliment, getFortune, addCompliment } = controllers;
app.use(cors());
app.use(express.json());



app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/compliment", addCompliment)

app.listen(4000, () => console.log("Server running on 4000"));
