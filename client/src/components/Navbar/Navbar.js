import React, { useState, useContext } from 'react';
import topicContext from '../../services/topicContext';

const Navbar = () => {
  const { createTopic } = useContext(topicContext);
  const [title, setTitle] = useState('');
  // const [login, setLogin] = useState({name: '', email: '', pass: ''});
  const submitHandler = e => {
    e.preventDefault();
    createTopic(title);
    setTitle('');
  };

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  // const handleLogin = ({ target}) => {
  //   setLogin(oldLogin => ({...oldLogin, [target.name]: target.value}))
  // }

  return (
    <div>
      <form action="submit" onSubmit={submitHandler}>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Navbar;
