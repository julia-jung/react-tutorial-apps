import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // firts, last element control
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, people]);

  // auto slider
  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [currentIndex]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;
          // let className = 'nextSlide';
          // if (index === currentIndex) {
          //   className = 'activeSlide';
          // }
          // if (
          //   index === currentIndex - 1 ||
          //   (currentIndex === 0 && index === people.length - 1)
          // ) {
          //   className = 'lastSlide';
          // }
          const className =
            index === currentIndex
              ? 'activeSlide'
              : index === currentIndex - 1 ||
                (currentIndex === 0 && index === people.length - 1)
              ? 'lastSlide'
              : 'nextSlide';
          return (
            <article key={id} className={className}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button
          className='prev'
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
