import React, { useState } from 'react';
import styles from './Form.module.scss';
import heart from '../../assets/heart.png';

let classNames = require('classnames');

export const Form = ({ onSubmit }) => {
  const [thought, setThought] = useState('');
  const [count, setCount] = useState(0);
  const [error, setError] = useState(true);

  const MAX_INPUT = 140;
  const MIN_INPUT = 5;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(thought.trim());
    setThought('');
    setCount(0);
    setError(true);
  };

  const handleInputChange = e => {
    const target = e.currentTarget;
    console.log(target.type, target.value, target.value.length);

    if (target.value.length > MAX_INPUT) {
      return false;
    } else {
      if (target.type === 'textarea' && target.value.length < MIN_INPUT) {
        // Error message logged to the console when changing state
        setError(true);
      } else {
        setError(false);
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
            name="thought"
            value={thought}
            onChange={handleInputChange}
          />
          <div className={styles.inputSubDetails}>
            {error ? (
              <p className={styles.counterError}>{count}/140</p>
            ) : (
              <p className={styles.counter}>{count}/140</p>
            )}
          </div>
        </div>
        <div>
          <button type="submit" disabled={error}>
            {/* <i className="fas fa-heart"></i> */}
            <img className={styles.heart} src={heart} />
            <span>Send Happy Thought</span>
            {/* <i className="fas fa-heart"></i> */}
            <img className={styles.heart} src={heart} />
          </button>
        </div>
      </form>
    </div>
  );
};
