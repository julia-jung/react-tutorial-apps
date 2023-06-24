const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'DISPLAY_ITEMS':
      return { ...state, cart: action.payload, isLoading: false };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload),
      };
    case 'INCREASE':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    case 'DECREASE':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: Math.max(item.amount - 1, 1) }
            : item
        ),
      };
    case 'UPDATE_TOTAL_AMOUNT':
      return {
        ...state,
        total: parseFloat(
          state.cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0)
        ).toFixed(2),
        amount: state.cart.length,
      };
    default:
      return state;
  }
};

export default reducer;
