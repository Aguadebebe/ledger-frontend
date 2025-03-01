import "../styles/Header.css";
import { useContext } from "react";
import { ExpensesContext } from "../../ContextProvider";
import TimeStamp from "../atoms/TimeStamp";
import { SaveExpenseData } from "../molecules/SaveExpenseData";
const Header = () => {
  const { clearDisplayedExpenses } = useContext(ExpensesContext);
  return (
    <>
      <header className="header-section header-bar bg-primary mb-4">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <section className="header-icon-container">
            <SaveExpenseData clearDisplayedExpenses={clearDisplayedExpenses} />
            <h1 className="header-title my-0 mr-md-auto font-weight-normal">Expense Ledger</h1>
            <TimeStamp />
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;

// Both of these should have the functionality of adding and deleting a file of
// a new expense list and have it show up in the right hand column sidebar.
// Then to delete it as well.

//This component displays the title and is the lengthwise section at the top.
