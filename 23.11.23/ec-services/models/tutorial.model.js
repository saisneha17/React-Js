const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const tutorialModel = mongoose.model('tutorial', tutorialSchema);

module.exports = tutorialModel;