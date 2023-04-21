
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

function ExpenseItem(props){
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"> 
                <ExpenseDetail title={props.title} location={props.location} amount={props.amount}/>
            </div>
        </div>
    )
}
export default ExpenseItem;