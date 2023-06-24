import React from 'react';
import { FaTimes } from 'react-icons/fa';
import menus from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${showSidebar && 'show'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {menus.map((menu, index) => {
            return (
              <article key={index}>
                <h4>{menu.page}</h4>
                <div className='sidebar-sublinks'>
                  {menu.links.map((link, index) => {
                    return (
                      <a key={index} href={link.url}>
                        {link.icon}
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
