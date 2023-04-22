
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/card';

const ExpenseItem=(props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description"> 
                <ExpenseDetail title={props.title} location={props.location} amount={props.amount}/>
            </div>
        </Card>
    )
}
export default ExpenseItem;
