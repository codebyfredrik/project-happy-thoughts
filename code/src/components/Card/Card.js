import React from 'react';
import styles from './Card.module.scss';
import heart from '../../assets/heart.png';

const moment = require('moment');

export const Card = ({ data, handleClick }) => {
  const { _id: id } = data;
  return (
    <li>
      <p className={styles.cardMessage}>{data.message}</p>
      <div className={styles.cardInfo}>
        <div className={styles.hearts}>
          <span className={styles.heartCircle} onClick={() => handleClick(id)}>
            {/* <i className="fas fa-heart"></i> */}
            <img className={styles.heart} src={heart} alt="heart" />
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
