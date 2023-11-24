const tutorialModel = require('../models/tutorial.model');

class TutorialService {
    create(data) {
        return tutorialModel.create(data);
    }
    getAll() {
        return tutorialModel.find({});
    }
    getById(id) {
        return tutorialModel.findById(id);
    }
    update(data) {
        return tutorialModel.findByIdAndUpdate(data.id, {
            $set: data,
        }, {
            fields: {__v: 0},
            new: true
        });
    }
    delete(id) {
        return tutorialModel.findByIdAndDelete(id);
    }
}

module.exports = new TutorialService();