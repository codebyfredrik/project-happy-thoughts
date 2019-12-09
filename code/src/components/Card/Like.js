import React from 'react';
import styles from './Like.module.scss';
import spinner from '../../assets/spinner.svg';

export const Like = ({ spinnerActive, hearts, id, handleClick }) => {
  return (
    <div className={styles.hearts}>
      <button className={styles.heartCircle} onClick={() => handleClick(id)}>
        <i className="fas fa-heart"></i>
      </button>
      <span className={styles.heartSeparator}>x</span>
      <span className={styles.heartCount}>
        {spinnerActive ? (
          <img className={styles.spinner} src={spinner} alt="spinner" />
        ) : (
          hearts
        )}
      </span>
    </div>
  );
};
