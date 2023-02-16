import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numProducts = useSelector((state) => state.cart.products.length);

  const cartBtnClickHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={cartBtnClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numProducts}</span>
    </button>
  );
};

export default CartButton;
