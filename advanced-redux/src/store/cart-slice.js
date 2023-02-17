import { createSlice } from '@reduxjs/toolkit';

// Helper Function
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

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    notification: null,
    showCart: false,
    products: [],
    changed: false,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
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
      if (!state.products) {
        state.products = [];
      }
      state.products.push({
        ...product,
        quantity: 1,
        total: product.price,
      });
      state.changed = true;
    },
    removeProduct(state, action) {
      const id = action.payload;
      state.products = state.products.filter((p) => p.id !== id);
      state.changed = true;
    },
    updateQuantityAdd(state, action) {
      const id = action.payload;
      state.products = state.products.map((product) => {
        return updateQuantity(product, id, true);
      });
      state.changed = true;
    },
    updateQuantityRemove(state, action) {
      const id = action.payload;
      state.products = state.products.map((product) => {
        return updateQuantity(product, id, false);
      });
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
