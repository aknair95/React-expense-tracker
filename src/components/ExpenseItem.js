import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className="expense-item">
            <h2 className='expense-item h2'>Expense Items-</h2>
            <div className="expense-item__description">       
               <div>Food</div> <div className='expense-item__price'>Rs 10</div>
               <div>Petrol</div> <div className='expense-item__price'>Rs 100</div>
               <div>Movies</div> <div className='expense-item__price'>Rs 200</div>
            </div>
        </div>
    )
}

export default ExpenseItem;