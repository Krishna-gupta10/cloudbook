const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
        
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        default: "General",
        lowercase: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('notes', NotesSchema);