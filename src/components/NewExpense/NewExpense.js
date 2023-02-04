import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const handleAddNewExpense = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <div className="add-new-expense">
          <button onClick={handleAddNewExpense}>Add New Expense</button>
        </div>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
