import React, { useState } from 'react';
import './Form.modules.css';

export const Form = ({ handleSubmit }) => {
  const [thought, setThought] = useState('');

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <label>What's making you happy right now?</label>
        <input name="thought" type="textarea" />
        <button type="submit">
          <i className="fas fa-heart"></i>
          <span>Send Happy Thought</span>
          <i className="fas fa-heart"></i>
        </button>
      </form>
    </div>
  );
};
