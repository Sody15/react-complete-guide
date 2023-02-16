import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    products: [],
  },
  reducers: {
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
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
        if (product.id === id) {
          const { quantity, price } = product;
          return {
            ...product,
            quantity: quantity + 1,
            total: price * (quantity + 1),
          };
        }
        return product;
      });
    },
    updateQuantityRemove(state, action) {
      const id = action.payload;
      state.products = state.products.map((product) => {
        if (product.id === id) {
          const { quantity, price } = product;
          return {
            ...product,
            quantity: quantity - 1,
            total: price * (quantity - 1),
          };
        }
        return product;
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
