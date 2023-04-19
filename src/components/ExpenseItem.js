
import './ExpenseItem.css';

function ExpenseItem(){
    const expenseItem1="Food";
    const expenseItem2="Petrol";
    const expenseItem3="Movies";
    const expensePrice1="Rs 10";
    const expensePrice2="Rs 100";
    const expensePrice3="Rs 200";
    const LocationOfExpenditure1="Delhi";
    const LocationOfExpenditure2="Bhopal";
    const LocationOfExpenditure3="Mumbai";

    return (
        <div className="expense-item">
            <h2 className='expense-item h2'>Expense Items-</h2>
            <div className="expense-item__description">    
                <div>{expenseItem1}</div><div className='expense-item__price'>{expensePrice1}</div> <div>{LocationOfExpenditure1}</div>
                <div>{expenseItem2}</div> <div className='expense-item__price'>{expensePrice2}</div> <div>{LocationOfExpenditure2}</div>
                <div>{expenseItem3}</div> <div className='expense-item__price'>{expensePrice3}</div> <div>{LocationOfExpenditure3}</div> 
            </div>     
        </div>
    )
}

export default ExpenseItem;