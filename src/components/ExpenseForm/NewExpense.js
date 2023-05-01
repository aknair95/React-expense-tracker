// component for adding new expense

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

let NewExpense= (props) =>{
    const saveExpenseDataHandler=(enteredExpenseData) =>{
        const savedExpenseData={...enteredExpenseData};
        props.onAddExpense(savedExpenseData);
    }
    return(
        <div className="new-expense">
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
       ) 
}

export default NewExpense;

