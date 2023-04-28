
import { useState } from "react";
import ExpenseItem from "./components/Expense/ExpenseItem";
import './components/Expense/ExpenseItem.css';
import NewExpense from "./components/ExpenseForm/NewExpense";

const App=() => {
  const expenses=[
    { 
      date: new Date(2023,1,24),
      title: "Food",
      location: "Delhi",
      amount: "$10"
    },
    {
      date: new Date(2023,2,12),
      title: "Movie",
      location: "Mumbai",
      amount: "$100"
    },
    { 
      date: new Date(2023,3,5),
      title: "Petrol",
      location: "Agra",
      amount: "$1000"
    },
  ];

  const [expense,updateExpense]= useState(expenses);
  const onAddExpenseHandler=(newExpense) =>{
    const addedExpense=[...expense,{date:newExpense.date,title:newExpense.title,amount:newExpense.amount,location:newExpense.location}];
    updateExpense(addedExpense);
    console.log(addedExpense)
  }

  return (
    <div className="App">
      <header className="App-header">
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <h2 className='expense-item h2'>Expenses-</h2>
        <div>
         {
         expense.map((item,i) => (
          <ExpenseItem key={i} title={item.title} amount={item.amount} location={item.location} date={item.date}/>
         ))
         } 
        </div>
      </header>
    </div>
  )
}

export default App;
