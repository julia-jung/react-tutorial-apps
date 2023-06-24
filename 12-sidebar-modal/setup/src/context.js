import React, { useState, useContext } from 'react';
import { createContext } from 'react';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <GlobalContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        showSidebar,
        openSidebar,
        closeSidebar,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
