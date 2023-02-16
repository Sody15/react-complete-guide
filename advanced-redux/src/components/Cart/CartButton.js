import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const numProducts = useSelector((state) => state.cart.products.length);

  const cartBtnClickHandler = () => {
    if (showCart) {
      dispatch(cartActions.hideCart());
    } else {
      dispatch(cartActions.showCart());
    }
  };

  return (
    <button className={classes.button} onClick={cartBtnClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numProducts}</span>
    </button>
  );
};

export default CartButton;
