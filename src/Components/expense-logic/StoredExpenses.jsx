import { useEffect, useContext } from "react";
import { ExpensesContext } from "../ContextProvider";

export const StoredExpenses = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  // Only run once when this component is first rendered

  useEffect(() => {
    if (localStorage.getItem("storedExpensesData")) {
      setExpenses(JSON.parse(localStorage.getItem("storedExpensesData")));
    }
  }, [setExpenses]);

  // Run every time our expenses state changes
  useEffect(() => {
    const stringifiedExpenses = JSON.stringify(expenses);

    localStorage.setItem("storedExpensesData", stringifiedExpenses);
  }, [expenses]);

  useEffect(() => {
    console.log("Updated expenses state in localStorage:", expenses);
  }, [expenses]); // Runs every time expenses changes
};

// this stores expense items to the browsers local storage.
