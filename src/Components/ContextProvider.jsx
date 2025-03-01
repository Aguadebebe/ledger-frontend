import { useState, createContext } from "react";
import Axios from "axios";
export const ExpensesContext = createContext();
const ContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const clearDisplayedExpenses = () => {
    setExpenses([]);
  };

  const handleJsonSubmit = async (event) => {
    if (hasSubmitted) return; // equates to truthy which returns false, it's initial value if it is the first render and hasSubmitted is false
    console.log("handleJsonSubmit triggered!");
    const newStoredExpenses = JSON.parse(localStorage.getItem("storedExpensesData")) || [];

    try {
      for (const newStoredExpense of newStoredExpenses) {
        console.log("Sending data to server from localStorage:", newStoredExpense);

        const response = await Axios.post("http://localhost:8080/register", {
          title: newStoredExpense.title,
          description: newStoredExpense.description,
          amount: newStoredExpense.amount,
          date: newStoredExpense.date,
          category: newStoredExpense.category
        });

        console.log("Data saved successfully:", response.data);
      }

      localStorage.removeItem("storedExpensesData");
      setHasSubmitted(true);

      console.log("Local storage cleared, hasSubmitted set to true!");
      clearDisplayedExpenses();
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  return (
    <ExpensesContext.Provider
      value={{ expenses, setExpenses, clearDisplayedExpenses, handleJsonSubmit, hasSubmitted, setHasSubmitted }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ContextProvider;
