import { FC, FormEvent, useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
