import React, { useState, useEffect } from 'react';
import { Messages } from './components/Messages/Messages';

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

  thoughts.forEach(item => {
    console.log(item);
  });

  return (
    <div className="app-container">
      {isLoading ? <div>Loading...</div> : <Messages data={thoughts} />}
    </div>
  );
};
