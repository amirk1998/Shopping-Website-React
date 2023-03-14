const cartReducer = (state, action) => {
  //
  const addProductToCart = (state, payload) => {
    const updatedCart = [...state.cart];

    const index = updatedCart.findIndex((item) => item.id === payload.id);

    if (index < 0) {
      updatedCart.push({ ...payload, quantity: 1 });
    } else {
      const updatedItem = { ...updatedCart[index] };
      updatedItem.quantity++;
      updatedCart[index] = updatedItem;
    }

    return {
      ...state,
      cart: updatedCart,
      totalPrice: state.totalPrice + payload.price,
    };
  };

  const decrementProducts = (state, payload) => {
    const updatedCart = [...state.cart];

    const index = updatedCart.findIndex((item) => item.id === payload.id);
    const updatedItem = { ...updatedCart[index] };
    if (updatedItem.quantity === 1) {
      const filteredCart = updatedCart.filter((item) => item.id !== payload.id);
      return {
        ...state,
        cart: filteredCart,
        totalPrice: state.totalPrice - payload.price,
      };
    } else {
      updatedItem.quantity--;
      updatedCart[index] = updatedItem;
      return {
        ...state,
        cart: updatedCart,
        totalPrice: state.totalPrice - payload.price,
      };
    }
  };

  const removeProduct = (state, payload) => {
    const updatedCart = [...state.cart];
    const filteredCart = updatedCart.filter((item) => item.id !== payload.id);
    return {
      ...state,
      cart: filteredCart,
      totalPrice: state.totalPrice - payload.price * payload.quantity,
    };
  };

  switch (action.type) {
    case 'ADD_TO_CART':
      return addProductToCart(state, action.payload);

    case 'DECREMENT_PRODUCT':
      return decrementProducts(state, action.payload);

    case 'REMOVE_PRODUCT':
      return removeProduct(state, action.payload);

    default:
      return state;
  }
};

export default cartReducer;
