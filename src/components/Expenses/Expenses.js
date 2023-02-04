import Card from "../UI/Card";

import "./Expenses.css";
import FilterByYear from "./FilterByYear";

import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(
    (i) => i.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <FilterByYear onYearChanged={yearChangeHandler} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
