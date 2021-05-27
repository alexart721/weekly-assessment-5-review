import React, { useContext } from 'react';
import moment from 'moment';
import './TopicItem.css';
import topicContext from '../../services/topicContext';

const TopicItem = ({ topic }) => {
  const { voteTopic, deleteHandler } = useContext(topicContext);

  return (
    <div className="item__container">
      <div className="votes">
        <button className="vote__up" onClick={() => voteTopic(topic._id, 'up')}>
          👆🏼
        </button>
        {topic.score}
        <button className="vote__up" onClick={() => voteTopic(topic._id, 'down')}>
          👇🏼
        </button>
      </div>
      <div className="topic__title">
        <h2>{topic.title}</h2>
        <p>CREATED ON {moment(topic.createdAt).format('Do MMM')}</p>
      </div>
      <div className="delete">
        <button onClick={() => deleteHandler(topic._id)}>🗑</button>
      </div>
    </div>
  );
};

export default TopicItem;
