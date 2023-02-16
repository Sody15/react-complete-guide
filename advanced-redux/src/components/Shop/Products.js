import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../store/products';
import { cartActions } from '../../store/cart';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import productsData from '../../dummy-products';
import { useEffect } from 'react';

const Products = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsActions.addItems(productsData));
  }, [dispatch]);

  const products = useSelector((state) => state.products.items);

  const addProductToCartHandler = (product) => {
    dispatch(productsActions.removeItem(product.id));
    dispatch(cartActions.addProduct(product));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              product={product}
              onAdd={addProductToCartHandler}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
