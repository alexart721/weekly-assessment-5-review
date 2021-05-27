const express = require('express');
const router = express.Router();
const { findTopics, createTopic, updateTopic, deleteTopic } = require('../controllers/topics');

router.get('/topics', findTopics);
router.post('/topics', createTopic);
router.patch('/topics/:id/:direction', updateTopic);
router.delete('/topics/:id', deleteTopic);

module.exports = router;
