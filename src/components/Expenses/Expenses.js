
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredyear;
  });
  // let expensesContent=<p>No expenses found</p>
  // if(filteredExpenses.length>0) {
  //   expensesContent=filteredExpenses.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         date={expense.date}
  //         amount={expense.amount}
  //       />
  //     );
  //   })
  // }
  return (
    <div>
    <Card className='expenses'>
      <h3>Filter by year</h3>
      <ExpensesFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses} />
    </Card>
    </div>
  );
};
export default Expenses;
