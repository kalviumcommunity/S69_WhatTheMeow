const express = require('express');
const router = express.Router();
const Item = require('./model/items');

// Create an item
router.post('/items', async (req, res) => {
  try {
    const newItem = new Item({ name: req.body.name });
    const savedItem = await newItem.save();
    res.status(201).send(`Item created with ID: ${savedItem._id}`);
  } catch (err) {
    res.status(400).send('Error creating item');
  }
});

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(400).send('Error retrieving items');
  }
});

// Get a single item by ID
router.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.status(200).json(item);
  } catch (err) {
    res.status(404).send('Item not found');
  }
});

// Update an item by ID
router.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!updatedItem) return res.status(404).send('Item not found');
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).send('Error updating item');
  }
});

// Delete an item by ID
router.delete('/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).send('Item not found');
    res.status(200).send('Item deleted');
  } catch (err) {
    res.status(400).send('Error deleting item');
  }
});

module.exports = router;
