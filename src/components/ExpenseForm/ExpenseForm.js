//component for fetching expense data from user by form

import { useState } from "react";
import "./ExpenseForm.css";

let ExpenseForm=(props) =>{

    const [enteredDate,setDate]= useState("");
    const [enteredTitle,setTitle]= useState("");
    const [enteredAmount,setAmount]= useState("");
    const [enteredLocation,setLocation]= useState("");

    let addExpense=(e) =>{
        e.preventDefault();
        const expenseData={                                                     //storing form fetched data into an object
            date: new Date(enteredDate),
            title: enteredTitle,
            amount: `$${enteredAmount}`,
            location: enteredLocation
        }
        props.onSaveExpenseData(expenseData);
        setDate("");                                                           // resetting form input fields after form is submitted
        setTitle("");
        setAmount("");
        setLocation("");
    }
                                                                                
    let addDate= (e1) =>{                                                       // fetching user inputted values
        setDate(e1.target.value);
    }

    let addTitle= (e2) =>{
        setTitle(e2.target.value);
    }

    let addAmount= (e3) =>{
        setAmount(e3.target.value);
    }

    let addLocation= (e4) =>{
        setLocation(e4.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date-</label>
                    <input type="date" value={enteredDate} onChange={addDate} min="2020-01-01" max="2023-04-30"/>
                </div>
                <div className="new-expense__control">
                    <label>Title-</label>
                    <input type="text" value={enteredTitle} onChange={addTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount-</label>
                    <input type="number" value={enteredAmount} onChange={addAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>Location-</label>
                    <input type="text" value={enteredLocation} onChange={addLocation}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={addExpense}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;