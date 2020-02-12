import React, { useState, useEffect } from 'react';
import * as API from '../src/api/Api';
import { Messages } from './components/Messages/Messages';
import { Form } from './components/Form/Form';
import TopBarProgress from 'react-topbar-progress-indicator';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = `https://express-happy-thoughts-api.herokuapp.com/api`;

  useEffect(() => {
    setIsLoading(true);
    API.fetchData().then(data => {
      setThoughts(data);
      setIsLoading(false);
    });
  }, []);

  TopBarProgress.config({
    barColors: {
      '0': '#ff0000',
      '1.0': '#ff0000'
    },
    shadowBlur: 5,
    barThickness: 2
  });

  const onSubmit = input => {
    const postData = async () => {
      const request = await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify({ message: input }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await request.json();

      return data;
    };

    postData().then(newThought => {
      setThoughts(previousThoughts => [newThought, ...previousThoughts]);
    });
  };

  const updateLikes = thought => {
    const tempThoughts = thoughts.map(item => {
      if (item._id === thought._id) {
        return { ...thought };
      } else {
        return item;
      }
    });

    setThoughts([...tempThoughts]);
  };

  return (
    <div className="app-container">
      {isLoading ? (
        <div>
          <TopBarProgress />
        </div>
      ) : (
        <div>
          <Form onSubmit={onSubmit} />
          <Messages data={thoughts} updateLikes={updateLikes} />
        </div>
      )}
    </div>
  );
};
