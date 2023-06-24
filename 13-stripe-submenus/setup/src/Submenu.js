import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    showSubmenu,
    closeSubmenu,
    location,
    page: { page, links },
  } = useGlobalContext();

  const submenuContainer = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    const submenu = submenuContainer.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    setColumns(
      `col-${links.length === 3 ? '3' : links.length > 3 ? '4' : '2'}`
    );
  }, [location, links]);

  return (
    <aside
      ref={submenuContainer}
      className={`submenu ${showSubmenu && 'show'}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
