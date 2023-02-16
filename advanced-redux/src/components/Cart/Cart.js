import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { productsActions } from '../../store/products-slice';

const Cart = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const products = useSelector((state) => state.cart.products);

  const removeItemHandler = (product) => {
    if (product.quantity !== 1) {
      dispatch(cartActions.updateQuantityRemove(product.id));
    } else {
      dispatch(cartActions.removeProduct(product.id));
      dispatch(productsActions.addItem(product));
    }
  };

  const addItemHandler = (product) => {
    dispatch(cartActions.updateQuantityAdd(product.id));
  };

  return (
    <>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {products.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                  onRemoveItem={removeItemHandler}
                  onAddItem={addItemHandler}
                />
              );
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
