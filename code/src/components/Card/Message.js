import React from 'react';
import styles from './Message.module.scss';

export const Message = ({ message }) => {
  return <p className={styles.cardMessage}>{message}</p>;
};
