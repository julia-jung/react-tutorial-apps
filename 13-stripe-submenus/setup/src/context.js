import { useState, useContext, createContext } from 'react';
import menus from './data';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  const openSubmenu = (text, coordinates) => {
    const page = menus.find((menu) => menu.page === text);
    setPage(page);
    setLocation(coordinates);
    setShowSubmenu(true);
  };
  const closeSubmenu = () => setShowSubmenu(false);
  return (
    <GlobalContext.Provider
      value={{
        showSidebar,
        openSidebar,
        closeSidebar,
        showSubmenu,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
