import { useState, useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";
import ExpenseForm from "../oranisms/ExpenseForm";

const ExpenseFormHandler = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  // Move the state to App component
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("Select a Category");

  // Error handling state (optional)
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    amount: "",
    date: "",
    category: ""
  });

  const onAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    setErrors(event.target.value);

    let newErrors = { title: "", description: "", amount: "", date: "", category: "" };

    if (expenseTitle.trim() === "") newErrors.title = "PLEASE ENTER A TITLE";
    if (expenseDescription.trim() === "") newErrors.description = "PLEASE ENTER A DESCRIPTION";
    if (expenseAmount.trim() === "" || isNaN(expenseAmount)) newErrors.amount = "PLEASE ENTER A NUMBER";
    if (expenseDate.trim() === "") newErrors.date = "PLEASE ENTER A DATE";
    if (expenseCategory === "Select a Category") newErrors.category = "PLEASE SELECT A CATEGORY";
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }

    // new Expense object created with the updated values a user adds to the ExpenseForm inputs/select/date.
    const newExpense = {
      title: expenseTitle,
      description: expenseDescription,
      amount: parseFloat(expenseAmount),
      date: expenseDate,
      id: Date.now(), //id: new Date().toLocaleString(),
      category: expenseCategory
    };

    onAddExpense(newExpense);
    //onAddFileJsonData(newExpense);

    // Reset form state
    setExpenseTitle("");
    setExpenseDescription("");
    setExpenseAmount("");
    setExpenseDate("");
    setExpenseCategory("Select a Category");
    setErrors({ title: "", description: "", amount: "", date: "", category: "" });
  };

  const expenseValues = {
    expenseTitle,
    expenseDescription,
    expenseAmount,
    expenseDate,
    expenseCategory
  };

  const updateFunctions = {
    updateExpenseTitle: setExpenseTitle,
    updateExpenseDescription: setExpenseDescription,
    updateExpenseAmount: setExpenseAmount,
    updateExpenseDate: setExpenseDate,
    updateExpenseCategory: setExpenseCategory
  };

  const formHandlers = { handleFormSubmit, errors, setErrors };

  return <ExpenseForm {...expenseValues} {...updateFunctions} {...formHandlers} />;
};

export default ExpenseFormHandler;

// This holds all the logic, state, update functions and general form logic.
