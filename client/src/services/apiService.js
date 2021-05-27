const baseURL = process.env.REACT_APP_BE_URL;

export const getTopics = () => {
  return customFetch('/topics');
};

export const updateTopic = (id, direction) => {
  return customFetch(`/topics/${id}/${direction}`, {
    method: 'PATCH',
  });
};

export const deleteTopic = id => {
  return customFetch(`/topics/${id}`, { method: 'DELETE' });
};

export const postTopic = title => {
  return customFetch('/topics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
};

const customFetch = (path, options) => {
  return fetch(baseURL + path, options)
    .then(res => (res.status >= 400 ? Promise.reject(res) : res))
    .then(res => (res.status === 204 ? res : res.json()))
    .catch(err => {
      console.log(`Request error [${options ? options.method : 'GET'} ${path}]: `, err);
    });
};
