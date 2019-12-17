import React, { useState } from 'react';
import * as API from '../../api/Api';
import { Card } from '../Card/Card';
import './Messages.module.scss';

export const Messages = ({ data, updateLikes }) => {
  const [isLiking, setIsLiking] = useState([]);
  //test
  const handleClick = id => {
    setIsLiking(prevState => [...prevState, id]);
    API.postLike(id)
      .then(data => {
        updateLikes(data);
        return data;
      })
      .then(message => {
        // Removing message ID from state array when like count is updated
        const tempLiking = isLiking.map(item => {
          return item !== message._id;
        });
        setIsLiking([...tempLiking]);
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
