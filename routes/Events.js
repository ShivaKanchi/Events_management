const express = require('express');
const { getAllEvents, getEventById, createEvent, updateEventById, deleteEvent } = require("../controllers/Event-controller")
const router = express.Router();
const { EventModel } = require("../models");
//get all
router.get("/Events", getAllEvents);
//get by id
router.get("/Events/:id", getEventById);
//create 
router.post("/Events", createEvent);
//update
router.put("/Events/:id", updateEventById);
//delete
router.delete("/Events:id", deleteEvent);
module.exports = router;