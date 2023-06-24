import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const defaultState = {
  isLoading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems);
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const removeCartItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const increaseItemCount = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decreaseItemCount = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  useEffect(() => {
    dispatch({ type: 'UPDATE_TOTAL_AMOUNT' });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeCartItem,
        increaseItemCount,
        decreaseItemCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
