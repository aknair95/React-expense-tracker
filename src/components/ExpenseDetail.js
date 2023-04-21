
function ExpenseDetail(props)
{
    return(
       <div>
         <div>{"TITLE- "+props.title}</div> 
         <div>{"LOCATION- "+props.location}</div> 
         <div className='expense-item__price'>{props.amount}</div>
       </div>     
    )
}

export default ExpenseDetail;