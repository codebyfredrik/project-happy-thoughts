import React from 'react';
import styles from './Timestamp.module.scss';

const moment = require('moment');

export const Timestamp = ({ timestamp }) => {
  return (
    <div className={styles.timestamp}>
      <span>{moment(timestamp).fromNow()}</span>
    </div>
  );
};
