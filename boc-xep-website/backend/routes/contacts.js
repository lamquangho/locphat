const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create contact (Contact form submission)
router.post('/', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    service: req.body.service,
    message: req.body.message
  });

  try {
    const newContact = await contact.save();
    res.status(201).json({ 
      message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.',
      contact: newContact 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE contact status
router.patch('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    if (req.body.status) {
      contact.status = req.body.status;
    }

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

