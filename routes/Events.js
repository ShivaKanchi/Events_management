const express = require('express');
const { getAllEvents, getEventById, createEvent, updateEventById, deleteEvent } = require("../controllers/Event-controller")
const router = express.Router();
//get all
router.get("/", getAllEvents);
//get by id
router.get("/:id", getEventById);
//create 
router.post("/", createEvent);
//update
router.put("/:id", updateEventById);
//delete
router.delete("/:id", deleteEvent);

module.exports = router;