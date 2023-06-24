import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const changeCount = (e) => {
    e.preventDefault();

    setText(data.slice(0, parseInt(count)));
  };

  return (
    <section className='section-counter'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={changeCount}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='count'
          id='count'
          value={count}
          min={0}
          max={8}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
