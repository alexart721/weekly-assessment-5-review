const mongoose = require('./index');

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;
