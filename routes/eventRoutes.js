const express = require('express');
const router = express.Router();
const { getAllEvents, createEvent, getMyEvents } = require('../controllers/eventController');
const authenticate = require('../middleware/authMiddleware');

router.get('/events', getAllEvents);
router.post('/events', authenticate, createEvent);
router.get('/my-events', authenticate, getMyEvents);

module.exports = router;

