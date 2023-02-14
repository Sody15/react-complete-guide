import useInput2 from '../hooks/use-input2';

const BasicForm = (props) => {
  const {
    hasError: firstNameHasError,
    enteredValue: firstNameVal,
    valueIsValid: firstNameIsValid,
    onBlurHandler: firstNameOnBlur,
    onChangeHandler: firstNameChangeHandler,
    reset: resetFirstName,
  } = useInput2((val) => val.trim() !== '');

  const {
    hasError: lastNameHasError,
    enteredValue: lastNameVal,
    valueIsValid: lastNameIsValid,
    onBlurHandler: lastNameOnBlur,
    onChangeHandler: lastNameChangeHandler,
    reset: resetLastName,
  } = useInput2((val) => val.trim() !== '');

  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    'gm'
  );
  const {
    hasError: emailHasError,
    enteredValue: emailVal,
    valueIsValid: emailIsValid,
    onBlurHandler: emailOnBlur,
    onChangeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput2((val) => emailRegex.test(val));

  const firstNameCssClass = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameCssClass = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailCssClass = emailHasError ? 'form-control invalid' : 'form-control';

  let formIsValid = false;
  if ((firstNameIsValid, lastNameIsValid, emailIsValid)) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log({ firstNameVal, lastNameVal, emailVal });
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameCssClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameVal}
            onBlur={firstNameOnBlur}
            onChange={firstNameChangeHandler}
          />
          {firstNameHasError && (
            <p className='error-text'>First name can't be blank.</p>
          )}
        </div>
        <div className={lastNameCssClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameVal}
            onBlur={lastNameOnBlur}
            onChange={lastNameChangeHandler}
          />
          {lastNameHasError && (
            <p className='error-text'>Last name can't be blank.</p>
          )}
        </div>
      </div>
      <div className={emailCssClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailVal}
          onBlur={emailOnBlur}
          onChange={emailChangeHandler}
        />
        {emailHasError && (
          <p className='error-text'>Must be a valid email address.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
