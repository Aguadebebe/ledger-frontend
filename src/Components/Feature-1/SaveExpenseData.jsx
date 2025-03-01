import { useContext } from "react";
import { ExpensesContext } from "../ContextProvider";
import { RiFolderAddLine } from "react-icons/ri";

export const SaveExpenseData = () => {
  const { handleJsonSubmit } = useContext(ExpensesContext);

  const handleButtonClick = async (event) => {
    await handleJsonSubmit(event); // Sends data to MongoDB
    console.log("JSON Data was sent!");
    console.log(JSON.parse(localStorage.getItem("storedExpensesData")) || "No Data!");
  };

  return (
    <button onClick={handleButtonClick} className="save-file-btn">
      <RiFolderAddLine className="header-icon" />
    </button>
  );
};
