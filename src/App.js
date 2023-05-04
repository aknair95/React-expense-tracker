
import { useState } from "react";
import './components/Expense/ExpenseItem.css';
import ExpenseFilter from "./components/filter/ExpenseFilter";
import ExpenseList from "./components/filter/ExpenseList";
import NewExpense from "./components/ExpenseForm/NewExpense";
import ExpensesChart from "./components/Expense/ExpensesChart";
import Card from "./components/UI/card";

const App=() => {
  const expenses=[              //static expenses data array
    { 
      date: new Date(2023,1,24),
      title: "Food",
      location: "Delhi",
      amount: "10"
    },
    {
      date: new Date(2023,2,12),
      title: "Movie",
      location: "Mumbai",
      amount: "100"
    },
    { 
      date: new Date(2023,3,5),
      title: "Petrol",
      location: "Agra",
      amount: "1000"
    },
    { 
      date: new Date(2021,3,5),
      title: "Petrol",
      location: "Agra",
      amount: "1000"
    }
  ];

  const [expense,updateExpense]= useState(expenses);

  const onAddExpenseHandler=(newExpense) =>{            //function to handle new added expense & update existing array
        updateExpense((prevExpense) =>{
          return [{date:newExpense.date,title:newExpense.title,amount:newExpense.amount,location:newExpense.location},...prevExpense];
        });
      }

  const [filterYear,setFilterYear]= useState("2020");

  const filteredExpenses=expense.filter((element)=> element.date.getFullYear().toString().includes(filterYear));   //filterering expenses by year as per user input
                                 
  const filterChangeHandler=(selectedFilter) =>{         //function to handle filter year change
    setFilterYear(selectedFilter);
    }

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}/>         {/*component handling form to add new expense*/}
      <div className="expenses">
        <Card>
          <ExpenseFilter selectedYear={filterYear} onExpenseFilterChange={filterChangeHandler}/>   {/*component handling year filter*/}
          <ExpensesChart expenses={filteredExpenses}/>              {/*component handling chart bar */}
          <h2 className='expense-item-h2'>EXPENSES</h2>
          <ExpenseList items={filteredExpenses}/>               {/*component handling expense listing by year */}
        </Card>
      </div>
    </div>
  )
}

export default App;

