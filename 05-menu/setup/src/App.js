import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categories = ['all', ...new Set(items.map((item) => item.category))];

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      setMenuItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
      </section>
      <Categories categories={categories} selectCategory={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
