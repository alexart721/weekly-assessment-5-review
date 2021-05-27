import React, { useContext } from 'react';
import topicContext from '../../services/topicContext';
import TopicItem from '../TopicItem/TopicItem';
import './TopicList.css';

const TopicList = () => {
  const { topics } = useContext(topicContext);

  return (
    <div className="list__container">
      {topics.map(topic => (
        <TopicItem key={topic._id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
