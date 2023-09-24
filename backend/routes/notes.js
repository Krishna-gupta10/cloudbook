const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Fetch All Notes from the user by GET: localhost:5000/api/notes/fetchnotes
router.get('/fetchnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id });
        if (notes.length == 0) {
            res.status(404).send("No Notes To display");
        }

        else {
            res.json(notes);
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }

});

// ROUTE 2: Add note by POST: localhost:5000/api/notes/addnote

router.post('/addnote', fetchuser, [
    body('title', 'Enter a Valid Title').isLength({ min: 3 }),
    body('description', 'Note Description must be atleast 8 characters').isLength({ min: 8 }),
], async (req, res) => {

    const { title, description, category } = req.body;

    // If there is any error, return bad request and array of errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {
        const note = new Notes({
            title, description, category, user: req.user.id
        })

        const newNote = await note.save();
        res.json(newNote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;