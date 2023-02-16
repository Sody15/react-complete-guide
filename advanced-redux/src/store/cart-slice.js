import { createSlice } from '@reduxjs/toolkit';

const updateQuantity = (product, id, isAdd) => {
  if (product.id === id) {
    const { quantity, price } = product;
    const updatedQuanity = isAdd ? quantity + 1 : quantity - 1;
    return {
      ...product,
      quantity: updatedQuanity,
      total: price * updatedQuanity,
    };
  }
  return product;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    notification: null,
    showCart: false,
    products: [],
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    toggle(state) {
      state.showCart = !state.showCart;
    },
    addProduct(state, action) {
      const product = action.payload;
      state.products.push({
        ...product,
        quantity: 1,
        total: product.price,
      });
    },
    removeProduct(state, action) {
      const id = action.payload;
      state.products = state.products.filter((p) => p.id !== id);
    },
    updateQuantityAdd(state, action) {
      const id = action.payload;
      state.products = state.products.map((product) => {
        return updateQuantity(product, id, true);
      });
    },
    updateQuantityRemove(state, action) {
      const id = action.payload;
      state.products = state.products.map((product) => {
        return updateQuantity(product, id, false);
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
