const tutorialService = require('../services/tutorial.svc');
const constants = require('../constants');

class TutorialController {
    async insert(req, res) {
        try {
            const tutorial = await tutorialService.create(req.body);
            res.status(constants.STATUS_CODES.CREATED);
            res.send({ status: 'Created successfully', tutorial });
        } catch (error) {
            console.log(error);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: error });
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id;
            const tutorial = await tutorialService.getById(id);
            if (tutorial) {
                res.status(constants.STATUS_CODES.SUCCESS);
                res.json({ data: tutorial });
            } else {
                res.status(constants.STATUS_CODES.NOT_FOUND);
                res.send({ error: 'not_found', errorDescription: 'Tutorials not found' });
            }
        } catch (err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
    async get(req, res) {
        try {
            const tutorials = await tutorialService.getAll();
            if (tutorials) {
                res.status(constants.STATUS_CODES.SUCCESS);
                res.json({ data: tutorials });
            } else {
                res.status(constants.STATUS_CODES.NOT_FOUND);
                res.send({ error: 'not_found', errorDescription: 'Tutorials not found' });
            }
        } catch (err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
    async update(req, res) {
        try {
            const updatedTutorial = await tutorialService.update({
                id: req.body._id,
                ...req.body
            });
            res.status(constants.STATUS_CODES.SUCCESS);
            res.send({ status: 'Updated successfully', data: updatedTutorial });
        } catch (error) {
            res.status(constants.STATUS_CODES.EXCEPTION);
            res.send({ error: 'server_error', errorDescription: error });
        }
    }
    async delete(req, res) {
        try {
            const tutorial = await tutorialService.delete(req.params.id);
            res.status(constants.STATUS_CODES.SUCCESS);
            res.send({ status: 'success', tutorial });
        } catch (error) {
            res.status(constants.STATUS_CODES.EXCEPTION);
            res.send({ error: 'server_error', errorDescription: error });
        }
    }
}

module.exports = new TutorialController();