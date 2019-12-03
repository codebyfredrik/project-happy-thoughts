import React from 'react';
import { Card } from '../Card/Card';
import styles from './Messages.module.css';

export const Messages = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <Card key={item._id} data={item} />
      ))}
    </ul>
  );
};
