import "./ExpenseForm.css";

let ExpenseForm=() =>{

    let addExpense=(e) =>{
        e.preventDefault();
        console.log("Expense Added!!!");
    }

    let print= (e) =>{
        console.log(e.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date-</label>
                    <input type="date" onChange={print}/>
                </div>
                <div className="new-expense__control">
                    <label>Title-</label>
                    <input type="text" onChange={print}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount-</label>
                    <input type="number" onChange={print}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={addExpense}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;