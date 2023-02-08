import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy=[
  {
    date:new Date(2020,2,3),
    title:'car',
    amount:'$294'
  },
  {
    date:new Date(2019,1,2),
    title:'bike',
    amount:'$29400'
  },
  {
    date:new Date(2019,2,4),
    title:'ac',
    amount:'$2940'
  },
  {
    date:new Date(2021,2,5),
    title:'shoe',
    amount:'$295'
  }
]
function App() {
  const [expenses,setExpenses]=useState(dummy);
  
  const addExpenseHandler=(expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  }
  return (
    <div>
      <h1 style={{'color':'Blue','alignItems':'center','fontSize':'4rem'}}>Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

  </div>
  );
}

export default App;
 