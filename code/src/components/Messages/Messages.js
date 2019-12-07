import React, { useState } from 'react';
import { postLike } from '../../api/Api';
import { Card } from '../Card/Card';
import styles from './Messages.module.css';

export const Messages = ({ data, updateLikes }) => {
  const [isLiking, setIsLiking] = useState([]);

  const handleClick = id => {
    setIsLiking(prevState => [...prevState, id]);
    postLike(id)
      .then(data => {
        updateLikes(data);
        return data;
      })
      .then(message => {
        // console.log(message);
        // console.log(message._id);
        // Removing message ID from state array when like count is updated
        const tempLiking = isLiking.map(item => {
          return item !== message._id;
        });
        setIsLiking([...tempLiking]);
        // console.log('Like updated:', id);
      });
  };

  return (
    <ul>
      {data.map(item => (
        <Card
          key={item._id}
          data={item}
          handleClick={handleClick}
          isLiking={isLiking}
        />
      ))}
    </ul>
  );
};
