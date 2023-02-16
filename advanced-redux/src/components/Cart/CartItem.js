import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { product } = props;

  return (
    <li className={classes.item}>
      <header>
        <h3>{product.title}</h3>
        <div className={classes.price}>
          ${product.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>
            (${product.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{product.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemoveItem.bind(null, product)}>-</button>
          <button onClick={props.onAddItem.bind(null, product)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
