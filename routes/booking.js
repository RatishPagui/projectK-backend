// routes/booking.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking'); // Make sure to define this model
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require('twilio');
const client = twilio(accountSid, authToken);

if (!accountSid || !authToken) {
    throw new Error('Twilio credentials are missing! Check your environment variables.');
}

router.post('/bookings', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();

        const combinedMessage = `Booking Details:\nName: ${req.body.name}\nPhone: ${req.body.phone}\Date: ${req.body.date}\nTime: ${req.body.time}\nMessage: ${req.body.message}`;
        
        const message = await client.messages.create({
            body: combinedMessage,
            from: process.env.TWILIO_WHATSAPP_NUMBER, // Your Twilio WhatsApp number from .env
            to: process.env.RECIPIENT_WHATSAPP_NUMBER 
        });

        console.log('Message sent:', message.sid);
        return res.status(200).json({ success: true, msg: 'Message sent successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(400).json({ success: false, msg: error.message });
    }
});

module.exports = router;
