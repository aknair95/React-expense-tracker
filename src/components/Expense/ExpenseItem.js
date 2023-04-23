
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/card';

const ExpenseItem=(props) => {
    const deleteExpense=() =>{
        console.log("Expense Deleted!!!");
    }

    const changeTitle=() =>{
        console.log("Title changed!!!");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"> 
                <ExpenseDetail title={props.title} location={props.location} amount={props.amount}/>
            </div>
            <button onClick={changeTitle}>Change Title</button>
            <button onClick={deleteExpense}>Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem;
