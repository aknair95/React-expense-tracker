// component for adding new expense

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

let NewExpense= (props) =>{

    const saveExpenseDataHandler=(enteredExpenseData) =>{
        const savedExpenseData={...enteredExpenseData};
        props.onAddExpense(savedExpenseData);
    }

    const [btnStatus,setBtnStatus]=useState(false);
    const displayForm=() =>{
        setBtnStatus(true);
    }

    const cancelForm=() =>{
        setBtnStatus(false);
    }
    return(
        <div className="new-expense">
            {!btnStatus && <button type="button" onClick={displayForm}>ADD NEW EXPENSE</button>}
            {btnStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={cancelForm}/>}
        </div>
       ) 
}

export default NewExpense;

