import ExpenseItem from "./components/ExpenseItem";

import './components/ExpenseItem.css';

function App() {
  const expenses=[
    {
      title: "Food",
      amount: "Rs 10",
      location: "Delhi"
    },
    {
      title: "Movie",
      amount: "Rs 100",
      location: "Mumbai"
    },
    {
      title: "Petrol",
      amount: "Rs 1000",
      location: "Agra"
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
      <h2 className='expense-item h2'>Expense Items-</h2>
        <p>
          <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} location={expenses[0].location}></ExpenseItem>
          <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} location={expenses[1].location}></ExpenseItem>
          <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} location={expenses[2].location}></ExpenseItem>
        </p>
      </header>
    </div>
  );
}

export default App;
