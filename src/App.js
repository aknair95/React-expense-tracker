
import ExpenseItem from "./components/Expense/ExpenseItem";
import './components/Expense/ExpenseItem.css';

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
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
      <h2 className='expense-item h2'>Expense Items-</h2>
        <div>
          <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} location={expenses[0].location} date={expenses[0].date}/>
          <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} location={expenses[1].location} date={expenses[0].date}/>
          <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} location={expenses[2].location} date={expenses[0].date}/>
        </div>
      </header>
    </div>
  );
}

export default App;
