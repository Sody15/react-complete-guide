import classes from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const Checkout = (props) => {
  const {
    enteredValue: nameVal,
    isValid: nameIsValid,
    hasError: nameHasError,
    onBlurHandler: onBlurName,
    onChangeHandler: onChangeName,
  } = useInput((val) => val !== '');

  const {
    enteredValue: streetVal,
    isValid: streetIsValid,
    hasError: streetHasError,
    onBlurHandler: onBlurStreet,
    onChangeHandler: onChangeStreet,
  } = useInput((val) => val !== '');

  const {
    enteredValue: postalVal,
    isValid: postalIsValid,
    hasError: postalHasError,
    onBlurHandler: onBlurPostal,
    onChangeHandler: onChangePostal,
  } = useInput((val) => +val && val.length === 5);

  const {
    enteredValue: cityVal,
    isValid: cityIsValid,
    hasError: cityHasError,
    onBlurHandler: onBlurCity,
    onChangeHandler: onChangeCity,
  } = useInput((val) => val !== '');

  const submitHandler = (event) => {
    event.preventDefault();
    props.saveMeals({
      name: nameVal,
      street: streetVal,
      postal: postalVal,
      city: cityVal,
    });
  };

  let formIsValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    formIsValid = true;
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={onChangeName}
          onBlur={onBlurName}
          value={nameVal}
        />
        {nameHasError && <p className={classes.error}>Enter your name.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          onChange={onChangeStreet}
          onBlur={onBlurStreet}
          value={streetVal}
        />
        {streetHasError && <p className={classes.error}>Enter your street.</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          onChange={onChangePostal}
          onBlur={onBlurPostal}
          value={postalVal}
        />
        {postalHasError && (
          <p className={classes.error}>Enter 5 digit postal code.</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onChange={onChangeCity}
          onBlur={onBlurCity}
          value={cityVal}
        />
        {cityHasError && <p className={classes.error}>Enter your city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
