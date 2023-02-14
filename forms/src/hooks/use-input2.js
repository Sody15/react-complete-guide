import { useState } from 'react';

const useInput2 = (validateFn) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateFn(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const onBlurHandler = (event) => {
    setIsTouched(true);
  };

  const onChangeHandler = (event) => {
    setIsTouched(true);
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueIsValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset,
  };
};

export default useInput2;
