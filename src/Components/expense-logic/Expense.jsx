import { useContext } from "react";
import { ExpensesContext } from "../ContextProvider";
import ExpenseFormHandler from "../form/molecules/ExpenseFormHandler";
import ExpenseList from "../list/molecules/ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { SortedExpenseCategories } from "./SortedExpenseCategories";
import { StoredExpenses } from "./StoredExpenses";

const Expense = () => {
  const { expenses, setExpenses, fetchedExpenses, setFetchedExpenses } = useContext(ExpensesContext);
  const selectedCategory = "";
  // Event Handlers
  const clearFetchedExpense = () => {
    localStorage.removeItem("fetchedJsonData");
  };
  const onDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setFetchedExpenses(fetchedExpenses.filter((fetchedExpense) => fetchedExpense.id !== id));
    clearFetchedExpense();
    console.log("Updated fetchedJsonData state in localStorage:", fetchedExpenses);
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
