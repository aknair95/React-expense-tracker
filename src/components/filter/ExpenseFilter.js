//component for expense filtering by year

import "./ExpenseFilter.css";

const ExpenseFilter=(props) =>{
    
    const dropDownChangeHandler=(e) =>{
      props.onExpenseFilterChange(e.target.value);
    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>FILTER BY YEAR</label>
                <select value={props.selectedYear} onChange={dropDownChangeHandler}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
           
        </div>  
    )
}

export default ExpenseFilter;