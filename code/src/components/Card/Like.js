import React from 'react';
import styles from './Like.module.scss';
import spinner from '../../assets/spinner2.svg';

export const Like = ({ spinnerActive, hearts, id, handleClick }) => {
  return (
    <div className={styles.hearts}>
      <span
        className={styles.heartCircle}
        onClick={() => handleClick(id)}
        role="button"
      >
        <i className="fas fa-heart"></i>
      </span>
      <span className={styles.heartSeparator}>x</span>
      <span className={styles.heartCount}>
        {spinnerActive ? (
          <img className={styles.spinner} src={spinner} />
        ) : (
          hearts
        )}
      </span>
    </div>
  );
};
