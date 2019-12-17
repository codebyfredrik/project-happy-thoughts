import React, { useState } from 'react';
import * as API from '../../api/Api';
import { Card } from '../Card/Card';
import './Messages.module.scss';

export const Messages = ({ data, updateLikes }) => {
  const [isLiking, setIsLiking] = useState({});

  const handleClick = id => {
    if (isLiking.hasOwnProperty(id)) {
      let newState = Object.fromEntries(
        Object.entries(isLiking).map(([key, value]) => {
          if (key === id) {
            return [key, value + 1];
          } else {
            return [key, value];
          }
        })
      );
      setIsLiking({ ...newState });
      // console.log('Key in object');
    } else {
      // console.log('Key not in object');
      setIsLiking({ ...isLiking, [id]: 1 });
    }

    API.postLike(id)
      .then(data => {
        updateLikes(data);
        return data;
      })
      .then(message => {
        console.log(message._id);
        if (isLiking.hasOwnProperty(message._id)) {
          let newStateTemp = Object.fromEntries(
            Object.entries(isLiking)
              .map(([key, value]) => {
                if (key === message._id && value > 0) {
                  console.log('remove 1 from value:', value);
                  return [key, value - 1];
                } else {
                  console.log('returning element');
                  return [key, value];
                }
              })
              .filter(([key, value]) => {
                return value > 0;
              })
          );
          setIsLiking({ ...newStateTemp });
        }
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
