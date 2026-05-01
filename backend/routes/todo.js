const express = require('express');
const { Todo } = require('../models');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Apply auth middleware to all todo routes
router.use(authMiddleware);

// Get all todos for user
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error: error.message });
  }
});

// ✅ SEARCH ROUTE (MUST BE BEFORE :id)
router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const todos = await Todo.find({
      userId: req.userId,
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    }).sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error searching todos', error: error.message });
  }
});

// Get single todo
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo || todo.userId.toString() !== req.userId) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todo', error: error.message });
  }
});

// Create todo
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const todo = new Todo({
      title,
      description: description || '',
      userId: req.userId,
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo', error: error.message });
  }
});

// Update todo
router.put('/:id', async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const todo = await Todo.findById(req.params.id);

    if (!todo || todo.userId.toString() !== req.userId) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    if (title) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error updating todo', error: error.message });
  }
});

// Delete todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo || todo.userId.toString() !== req.userId) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting todo', error: error.message });
  }
});

module.exports = router;