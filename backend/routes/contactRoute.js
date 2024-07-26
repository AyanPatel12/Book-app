import express from 'express';
import Contact from '../models/contactModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phone, message, query } = req.body;

    if (!name || !email || !message || !query) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newContact = new Contact({ name, email, phone, message, query });
        await newContact.save();
        return res.status(201).json({ success: 'Message saved successfully' });
    } catch (error) {
        console.error('Error saving contact message:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
