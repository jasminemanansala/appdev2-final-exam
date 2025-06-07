const Event = require('../models/Event');
const sendEmail = require('../config/nodemailer');

exports.getAllEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

exports.createEvent = async (req, res) => {
  const event = await Event.create({ ...req.body, userId: req.user.id });
  await sendEmail({
    to: req.user.email,
    subject: 'Event Created',
    template: 'eventCreated',
    context: {
      title: event.title,
      date: event.date,
      location: event.location,
    },
  });
  res.status(201).json(event);
};

exports.getMyEvents = async (req, res) => {
  const events = await Event.find({ userId: req.user.id });
  res.json(events);
};