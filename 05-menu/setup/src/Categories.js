import React from 'react';

const Categories = ({ categories, selectCategory }) => {
  return (
    <div className='btn-container'>
      {/* <button className='filter-btn' onClick={() => selectAll()}>
        all
      </button> */}
      {categories.map((category) => {
        return (
          <button
            key={category}
            className='filter-btn'
            onClick={() => selectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
