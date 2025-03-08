import Filter from "./Filter";
import { useContext } from "react";
import { ExpensesContext } from "../ContextProvider";

export const SortedExpenseCategories = ({ selectedCategory }) => {
  const { expenses } = useContext(ExpensesContext);
  const validCategories = ["Bills", "Auto Parts", "Groceries"];

  const groupedExpenses = expenses.reduce((acc, expense) => {
    const updatedAcc = {
      ...acc,
      [expense.category]: [...(acc[expense.category] || []), expense]
    };

    return updatedAcc;
  }, {});

  return (
    <div>
      <Filter selectedCategory={selectedCategory} validCategories={validCategories} groupedExpenses={groupedExpenses} />
    </div>
  );
};

// this holds the validCategories array to filter the groups of expenses and the reduce logic.
