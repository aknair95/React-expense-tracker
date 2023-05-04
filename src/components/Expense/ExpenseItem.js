
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/card';
import { useState } from 'react';

const ExpenseItem=(props) => {
    const deleteExpense=() =>{
        console.log("Expense Deleted!!!");
    }

    const [title,setTitle]= useState(props.title);
    const changeTitle=() =>{
        setTitle("New Title");
        console.log(title);
    }

    const [amount,changeAmount]= useState(props.amount);
    const changeExpense=() =>{
        changeAmount("100");
        console.log("$100");
    }

    return (
        <li className='expense-item'>
            <Card>
                <ExpenseDate date={props.date}/>
                <ExpenseDetail title={title} location={props.location} amount={amount}/>
                <button onClick={changeTitle}>Change Title</button>
                <button onClick={deleteExpense}>Delete Expense</button>
                <button onClick={changeExpense}>Change Expense</button>
            </Card>   
        </li>      
    )
}
export default ExpenseItem;
