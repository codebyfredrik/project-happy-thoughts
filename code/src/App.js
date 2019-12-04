import React, { useState, useEffect } from 'react';
import { Messages } from './components/Messages/Messages';
import { Form } from './components/Form/Form';
import TopBarProgress from 'react-topbar-progress-indicator';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch('https://technigo-thoughts.herokuapp.com/');
      const data = await response.json();

      return data;
    };

    fetchData().then(data => {
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

  const handleSubmit = e => {
    console.log('Handle submit');
  };

  return (
    <div className="app-container">
      {isLoading ? (
        <div>
          <TopBarProgress />
        </div>
      ) : (
        <div>
          <Form handleSubmit={handleSubmit} />
          <Messages data={thoughts} />
        </div>
      )}
    </div>
  );
};
