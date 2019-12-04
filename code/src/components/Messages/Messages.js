import React from 'react';
import { postLike } from '../../api/Api';
import { Card } from '../Card/Card';
import styles from './Messages.module.css';

export const Messages = ({ data }) => {
  const handleClick = id => {
    // console.log(id);
    postLike(id).then(data => {
      console.log(data);
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
