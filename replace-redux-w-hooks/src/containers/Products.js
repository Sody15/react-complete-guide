import React, { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';
import './Products.css';
// import { ProductsContext } from '../context/products-context';

const Products = (props) => {
  const state = useStore()[0];

  // const productList = useContext(ProductsContext).products;

  return (
    <ul className='products-list'>
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
