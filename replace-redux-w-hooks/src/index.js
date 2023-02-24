import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import configureProductsStore from './hooks-store/products-store';

// import ProductsProvider from './context/products-context';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <ProductsProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProductsProvider>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

configureProductsStore();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
