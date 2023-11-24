const express = require('express');
const router = express.Router();
const tutorialCtrl = require('../controllers/tutorial.ctrl');

router.post('/', tutorialCtrl.insert);
router.get('/', tutorialCtrl.get);
router.get('/:id', tutorialCtrl.getById);
router.delete('/:id', tutorialCtrl.delete);
router.put('/', tutorialCtrl.update);

module.exports = router;