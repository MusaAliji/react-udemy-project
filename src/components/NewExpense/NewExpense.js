import React from "react";

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return <div className="new-expense">
    <ExpenseForm onSaveExpense={props.onAddExpense}/>
  </div>
}

export default NewExpense;