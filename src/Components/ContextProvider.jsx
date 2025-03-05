//Import Dependencies
import { useState, createContext } from "react";
import Axios from "axios";
export const ExpensesContext = createContext();
//Define ContextProvider - The children prop enables passing variables defined in CP to anywhere in the app
const ContextProvider = ({ children }) => {
  //Define State
  const [expenses, setExpenses] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [mistake, setMistake] = useState("");
  const clearDisplayedExpenses = () => {
    setExpenses([]);
  };
  //Define handleJsonSubmit to post all the Expense data from local storage
  const handleJsonSubmit = async (event) => {
    if (hasSubmitted) return; // equates to truthy which returns false, it's initial value if it is the first render and hasSubmitted is false
    console.log("handleJsonSubmit triggered!");
    const newStoredExpenses = JSON.parse(localStorage.getItem("storedExpensesData")) || [];
    if (newStoredExpenses.length === 0) {
      setMistake("No Expenses found, Must have Expenses to Post!");
      console.error("no data!");
      return;
    }
    setMistake(""); //same as error lol

    try {
      console.log("Sending all the data to server from localStorage:", newStoredExpenses);

      const response = await Axios.post("http://localhost:8080/register", {
        expenses: newStoredExpenses // Sends the entire newStoredExpenses array of all items to the db!
        //expenses: [{ title: "Test Expense", description: "test", amount: 100, category: "Food" }]
      });
      console.log("Data saved successfully:", response.data);

      localStorage.removeItem("storedExpensesData"); //clears localstorage
      setHasSubmitted(true); // sets hasSubmitted to true making it return if there is no data to submit

      console.log("Local storage cleared, hasSubmitted set to true!");
      clearDisplayedExpenses(); // clears anything displayed on the screen after post
      //localStorage.clear();
    } catch (error) {
      console.error("There was an error:", error);
    }
  };
  // Return statement for the CP component for jsx
  return (
    <ExpensesContext.Provider
      value={{
        // this prop halds the variables being carried by useContext
        expenses,
        setExpenses,
        clearDisplayedExpenses,
        handleJsonSubmit,
        hasSubmitted,
        setHasSubmitted,
        mistake
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ContextProvider;

/** //For of loop - loops through expense objects in local storage and sets their props fo axios post
      for (const newStoredExpense of newStoredExpenses) {
        console.log("Sending data to server from localStorage:", newStoredExpense);

        const response = await Axios.post("http://localhost:8080/register", {
          title: newStoredExpense.title,
          description: newStoredExpense.description,
          amount: newStoredExpense.amount,
          date: newStoredExpense.date,
          category: newStoredExpense.category
        });*/
