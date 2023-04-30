import "./ExpenseFilter.css";

const ExpenseFilter=(props) =>{
    
    const dropDownChangeHandler=(e) =>{
      props.onExpenseFilterChange(e.target.value);
    }
    return(
        <div className="filter-control">
            <label>Filter by year-</label>
            <select value={props.selectedYear} onChange={dropDownChangeHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>  
    )
}

export default ExpenseFilter;