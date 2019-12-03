import React from 'react';
import { Card } from '../Card/Card';
import styles from './Messages.module.css';

export const Messages = ({ data }) => {
  const handleClick = id => {
    console.log(id);
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  };

  return (
    <ul>
      {data.map(item => (
        <Card key={item._id} data={item} handleClick={handleClick} />
      ))}
    </ul>
  );
};
