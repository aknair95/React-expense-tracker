
import './ExpenseItem.css';

function ExpenseItem(props){
    return (
        <div className="expense-item">
            <div className="expense-item__description">    
                <div>{props.title}</div><div className='expense-item__price'>{props.amount}</div> <div>{props.location}</div> 
            </div>     
        </div>
    )
}

export default ExpenseItem;