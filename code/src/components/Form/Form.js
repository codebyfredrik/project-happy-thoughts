import React, { useState } from 'react';
import styles from './Form.module.scss';
import heart from '../../assets/heart.png';

// let classNames = require('classnames');

export const Form = ({ onSubmit }) => {
  const [thought, setThought] = useState('');
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const MAX_INPUT = 140;
  const MIN_INPUT = 5;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(thought.trim());
    setThought('');
    setCount(0);
    setError('');
    setEnableSubmit(false);
  };

  const handleInputChange = e => {
    const target = e.currentTarget;
    console.log(target.type, target.value, target.value.length);

    if (target.value.length > MAX_INPUT) {
      return false;
    } else {
      if (target.type === 'textarea' && target.value.length < MIN_INPUT) {
        // Error message logged to the console when changing state
        setError('error');
        setEnableSubmit(false);
      } else {
        setError('valid');
        setEnableSubmit(true);
      }

      // Updating state with character count
      setCount(target.value.length);

      // Updating state with input value
      setThought(target.value);
    }
  };

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>What's making you happy right now?</label>
          <textarea
            className={styles.message}
            name="thought"
            value={thought}
            onChange={handleInputChange}
          />
          <div className={styles.inputSubDetails}>
            {!error ? (
              <p className={styles.counter}>{count}/140</p>
            ) : (
              <p className={styles[error]}>{count}/140</p>
            )}
            {/* <p className={styles.counter}>{count}/140</p> */}
          </div>
        </div>
        <div>
          <button type="submit" disabled={!enableSubmit}>
            <i className="fas fa-heart"></i>
            <span>Send Happy Thought</span>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
