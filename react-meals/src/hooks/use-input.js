import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { initialInputState };
  }
};

const useInput = (validationFn) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const isValid = validationFn(inputState.value);
  const hasError = inputState.isTouched && !isValid;

  const onBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };

  const onChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    enteredValue: inputState.value,
    isValid,
    hasError,
    onBlurHandler,
    onChangeHandler,
    reset,
  };
};

export default useInput;
