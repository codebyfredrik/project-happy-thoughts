import React from 'react';
import { postLike } from '../../api/Api';
import { Card } from '../Card/Card';
import styles from './Messages.module.css';

export const Messages = ({ data, updateLikes }) => {
  const handleClick = id => {
    postLike(id).then(data => {
      updateLikes(data);
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
