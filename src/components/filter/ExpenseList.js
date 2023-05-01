
import "./ExpenseList.css";
import ExpenseItem from "../Expense/ExpenseItem";

const ExpenseList=(props) =>{

    if(props.items.length === 0)
    {
        return <h2 className="expenses-list-message">!!! NO EXPENSE FOUND !!!</h2>;
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((item) => (
                    <ExpenseItem key={Math.random()} title={item.title} amount={item.amount} location={item.location} date={item.date}/>      //iterating expense array 
                   
            ))}
        </ul>
    )
}

export default ExpenseList;