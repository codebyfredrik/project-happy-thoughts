import React from 'react';
import styles from './Card.module.scss';

const moment = require('moment');

export const Card = ({ data, handleClick }) => {
  return (
    <li>
      <p className={styles.cardMessage}>{data.message}</p>
      <div className={styles.cardInfo}>
        <div className={styles.hearts}>
          <span
            className={styles.heartCircle}
            onClick={() => handleClick(data._id)}
          >
            <i className="fas fa-heart"></i>
          </span>
          <span className={styles.heartCount}>x {data.hearts}</span>
        </div>
        <div className={styles.timeStamp}>
          <span>{moment(data.createdAt).fromNow()}</span>
        </div>
      </div>
    </li>
  );
};
