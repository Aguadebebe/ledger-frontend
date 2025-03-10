import ExpenseItem from "./ExpenseItem";
import { useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";

const ExpenseList = ({ onDelete }) => {
  const { allExpenses } = useContext(ExpensesContext);

  return (
    <>
      <h2>Expense Item List -</h2>
      <section className="expense-container border p-3 bg-light">
        <ul className="list-group overflow-auto">
          {allExpenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} className="list-group-item" />
          ))}
        </ul>
      </section>
    </>
  );
};

export default ExpenseList;

// This returns a list of expense items in a column below the form.
