import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    // setUserInput(prevState => ({...prevState, enteredTitle: event.target.value}))
  }

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // })
  }

  const submitHandler = event => {
    event.preventDefault()

    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpense(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                value={enteredTitle}
                onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
                type="number"
                min="0.01"
                step="0.01"
                id="amount"
                value={enteredAmount}
                onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                id="date"
                value={enteredDate}
                onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
      </form>
  )
}

export default ExpenseForm