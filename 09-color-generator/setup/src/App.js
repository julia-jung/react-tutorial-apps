import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(null);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className={error && 'error'}
            id='color'
            name='color'
            placeholder='#f5025'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((item, index) => {
          return (
            <SingleColor key={index} {...item} hex={item.hex} index={index} />
          );
        })}
      </section>
    </>
  );
}

export default App;
