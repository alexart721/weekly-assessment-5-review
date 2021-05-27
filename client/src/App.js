import { useState, useEffect } from 'react';
import { getTopics, updateTopic, deleteTopic } from './services/apiService';
import TopicList from './components/TopicList/TopicList';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { postTopic } from './services/apiService';
import TopicContext from './services/topicContext';

function App() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(topicList => {
      topicList.sort((a, b) => b.score - a.score);
      setTopics(topicList);
    });
  }, []);

  const voteTopic = (id, direction) => {
    updateTopic(id, direction).then(newTopic => {
      const newTopics = topics
        .map(topic => (topic._id === id ? newTopic : topic))
        .sort((a, b) => b.score - a.score);
      setTopics(newTopics);
    });
  };

  const createTopic = title => {
    postTopic(title).then(topic => {
      setTopics(oldTopics => [...oldTopics, topic]);
    });
  };

  const deleteHandler = id => {
    deleteTopic(id).then(res => {
      if (res?.ok) setTopics(oldTopics => oldTopics.filter(topic => topic._id !== id));
    });
  };

  return (
    <TopicContext.Provider value={{ createTopic, topics, voteTopic, deleteHandler }}>
      <div className="app">
        {/* input field */}
        <Navbar />
        {/* topic list */}
        <TopicList />
      </div>
    </TopicContext.Provider>
  );
}

export default App;
