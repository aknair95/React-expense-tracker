
import './ExpenseItem.css';

const ExpenseDetail=(props) => {
    return(
       <div>
         <div className="expense-details">{"TITLE- "+props.title}</div> 
         <div className="expense-details">{"LOCATION- "+props.location}</div> 
         <div className='expense-item__price'>{props.amount}</div>
       </div>     
    )
}

export default ExpenseDetail;