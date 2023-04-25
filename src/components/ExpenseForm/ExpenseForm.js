import { useState } from "react";
import "./ExpenseForm.css";

let ExpenseForm=() =>{

    const [enteredDate,setDate]= useState("");
    const [enteredTitle,setTitle]= useState("");
    const [enteredAmount,setAmount]= useState("");

    let addExpense=(e) =>{
        e.preventDefault();
        console.log("Expense added !!!");
    }

    let addDate= (e1) =>{
        setDate(e1.target.value);
    }

    let addTitle= (e2) =>{
        setTitle(e2.target.value);
    }

    let addAmount= (e3) =>{
        setAmount(e3.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date-</label>
                    <input type="date" onChange={addDate}/>
                </div>
                <div className="new-expense__control">
                    <label>Title-</label>
                    <input type="text" onChange={addTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount-</label>
                    <input type="number" onChange={addAmount}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={addExpense}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;