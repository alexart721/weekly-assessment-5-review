import { createContext } from 'react';

const topicContext = createContext({
  topics: [],
  createTopic: () => {},
  voteTopic: () => {},
  deleteHandler: () => {},
});

export default topicContext;
