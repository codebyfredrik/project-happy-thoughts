import React from 'react';
import { Timestamp } from './Timestamp';
import { Like } from './Like';
import { Message } from './Message';
import styles from './Card.module.scss';

export const Card = ({ data, handleClick, isLiking }) => {
  const { _id: id } = data;
  const spinnerActive = isLiking.includes(id);

  return (
    <li>
      <Message message={data.message} />
      <div className={styles.cardInfo}>
        <Like
          spinnerActive={spinnerActive}
          hearts={data.hearts}
          id={id}
          handleClick={handleClick}
        />
        <Timestamp timestamp={data.createdAt} />
      </div>
    </li>
  );
};
