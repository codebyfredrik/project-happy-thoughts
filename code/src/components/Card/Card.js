import React from 'react';
import styles from './Card.module.scss';
import heart from '../../assets/heart.png';
import spinner from '../../assets/spinner2.svg';

const moment = require('moment');

export const Card = ({ data, handleClick, isLiking }) => {
  const { _id: id } = data;
  const spinnerActive = isLiking.includes(id);
  console.log('Spinner status: ', spinnerActive, id);
  return (
    <li>
      <p className={styles.cardMessage}>{data.message}</p>
      <div className={styles.cardInfo}>
        <div className={styles.hearts}>
          <span className={styles.heartCircle} onClick={() => handleClick(id)}>
            <i className="fas fa-heart"></i>
            {/* <img className={styles.heart} src={heart} alt="heart" /> */}
          </span>
          <span className={styles.heartSeparator}>x</span>
          <span className={styles.heartCount}>
            {spinnerActive ? (
              <img className={styles.spinner} src={spinner} />
            ) : (
              data.hearts
            )}
          </span>
        </div>
        <div className={styles.timeStamp}>
          <span>{moment(data.createdAt).fromNow()}</span>
        </div>
      </div>
    </li>
  );
};
