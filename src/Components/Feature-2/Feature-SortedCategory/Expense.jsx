import { SortedExpenseCategories } from "./SortedExpenseCategories";
import { StoredExpenses } from "./StoredExpenses";
import ExpenseList from "../Feature-List/ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseFormHandler from "../Feature-Form/ExpenseFormHandler";
import { useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";

const Expense = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const selectedCategory = "";
  // Event Handlers

  const onDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseFormHandler />
      <ExpenseList onDelete={onDelete} />
      <ExpenseSummary expenses={expenses} />
      <SortedExpenseCategories selectedCategory={selectedCategory} />
      <StoredExpenses />
    </div>
  );
};

export default Expense;
//
// this is composing all of the child components together with the expenses state, selectedCategory value, and onDelete function.
