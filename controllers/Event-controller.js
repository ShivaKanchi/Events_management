const { EventModel } = require("../models");

exports.getAllEvents = async (req, res) => {
    const Events = await EventModel.find();
    if (Events.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No Events available yet"
        })
    }
    console.log(Events);
    return res.status(200).json(
        {
            success: true,
            message: Events
        }
    );
};
exports.getEventById = async (req, res) => {
    const { id } = req.params;
    const Event = await EventModel.findById(id);
    if (!Event) {
        return res.status(404).json({
            success: false,
            message: "Event by id " + id + " not found"
        });
    }
    return res.status(200).json({
        success: true,
        data: Event,
    });
};
exports.createEvent = async (req, res) => {
    const { data } = req.body;
    const eventCreate = await EventModel.create({
        ...data
    });
    return res.status(201).json({
        success: true,
        data: eventCreate
    });
};
exports.updateEventById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const updateEvent = await EventModel.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $set: {
                ...data
            }
        },
        {
            new: true
        });
    return res.status(200).json({
        success: true,
        message: "One Event updated",
        data: updateEvent
    });
}
exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    const event = await EventModel.deleteOne({
        _id: id
    });
    return res.status(202).json({
        success: true,
        message: "Deleted a event",
        data: event,
    });
}