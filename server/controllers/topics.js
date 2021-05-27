const Topic = require('../models/topics');

exports.findTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200);
    res.send(topics);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};
exports.createTopic = async (req, res) => {
  try {
    const { title } = req.body;
    const newTopic = await Topic.create({ title });
    res.status(201);
    res.send(newTopic);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};
exports.updateTopic = async (req, res) => {
  try {
    const { id, direction } = req.params;
    if (direction !== 'up' && direction !== 'down') throw new Error('wrong direction');
    const dir = direction === 'up' ? 1 : -1;
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      {
        $inc: { score: dir },
      },
      { new: true }
    );

    res.status(200);
    res.send(updatedTopic);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};
exports.deleteTopic = async (req, res) => {
  try {
    const { id } = req.params;
    await Topic.findByIdAndDelete(id);
    res.status(204);
    res.send();
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
};
