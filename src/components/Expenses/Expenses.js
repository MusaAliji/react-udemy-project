import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
