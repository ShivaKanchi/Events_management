const express = require('express');
const { getAllEvents, getEventById, createEvent, updateEventById, deleteEvent, getEventByCity, getEventByCoordinator, getEventByCertificate } = require("../controllers/Event-controller")
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
//get by city
router.get("/city/:city", getEventByCity);
//get by coordinator
router.get("/coordinator/:coordinator", getEventByCoordinator);
//get by certificate
router.get("/certificate/:certificate", getEventByCertificate);
module.exports = router;