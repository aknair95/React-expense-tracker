
import { useState } from "react";
import ExpenseItem from "./components/Expense/ExpenseItem";
import './components/Expense/ExpenseItem.css';
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpenseFilter from "./components/filter/ExpenseFilter";

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
    updateExpense((prevExpense) =>{
      return [{date:newExpense.date,title:newExpense.title,amount:newExpense.amount,location:newExpense.location},...prevExpense];
    });
  }

  const [filterYear,setFilterYear]= useState("2020");

  const filterChangeHandler=(selectedFilter) =>{
    setFilterYear(selectedFilter);
  }

  return (
    <div className="App">
      <header className="App-header">
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <ExpenseFilter selectedYear={filterYear} onExpenseFilterChange={filterChangeHandler}/>
      <h2 className='expense-item h2'>Expenses-</h2>
        <div>
         {
           expense.filter((element)=> element.date.getFullYear().toString().includes(filterYear)                                    //filterering expenses by year as per user input
           ).map((item) => (
          <ExpenseItem key={Math.random()} title={item.title} amount={item.amount} location={item.location} date={item.date}/>      //iterating expense array 
         ))
         } 
        </div>
      </header>
    </div>
  )
}

export default App;
