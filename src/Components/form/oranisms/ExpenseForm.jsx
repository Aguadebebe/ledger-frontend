import "../styles/ExpenseForm.css";
import { useEffect } from "react";
const ExpenseForm = (props) => {
  useEffect(() => {
    console.log("Expense Category updated:", props.expenseCategory);
  }, [props.expenseCategory]); // Logs whenever `expenseCategory` is updated

  return (
    <div className="form-border">
      <form className="d-flex flex-column" onSubmit={props.handleFormSubmit}>
        <fieldset>
          <legend>Expense Form -</legend>
          <input
            className="input-title form-control mb-3"
            value={props.expenseTitle}
            onChange={(event) => {
              props.updateExpenseTitle(event.target.value);
              if (props.errors.title) {
                props.setErrors((prevErrors) => ({ ...prevErrors, title: "" }));
              }
            }}
            placeholder="Enter Title"
          />
          {props.errors.title && <p className="errors">{props.errors.title}</p>}

          <textarea
            className="input-expense-description form-control mb-3"
            value={props.expenseDescription}
            onChange={(event) => {
              props.updateExpenseDescription(event.target.value);
              if (props.errors.description) {
                props.setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
              }
            }}
            placeholder="Enter Expense Description"
          />
          {props.errors.description && <p className="errors">{props.errors.description}</p>}

          <input
            className="enter-amount form-control mb-3"
            value={props.expenseAmount}
            onChange={(event) => {
              props.updateExpenseAmount(event.target.value);
              if (props.errors.amount) {
                props.setErrors((prevErrors) => ({ ...prevErrors, amount: "" }));
              }
            }}
            placeholder="Enter Amount $"
          />
          {props.errors.amount && <p className="errors">{props.errors.amount}</p>}

          <input
            className="input-date form-control mb-3"
            type="date"
            value={props.expenseDate}
            onChange={(event) => {
              props.updateExpenseDate(event.target.value);
              if (props.errors.date) {
                props.setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
              }
            }}
          />
          {props.errors.date && <p className="errors">{props.errors.date}</p>}

          <select
            className="select-category form-control mb-3"
            value={props.expenseCategory}
            onChange={(event) => {
              props.updateExpenseCategory(event.target.value);
              // Clear error if valid category selected
              if (props.errors.category) {
                props.setErrors((prevErrors) => ({ ...prevErrors, category: null })); //This is set to null so that the error message will clear
              }
            }}
          >
            <option>Select a Category</option>
            <option>Bills</option>
            <option>Auto Parts</option>
            <option>Groceries</option>
          </select>

          {props.errors.category && <p className="errors">{props.errors.category}</p>}

          <button className="add-expense-btn btn-primary" type="submit">
            Add Expense
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ExpenseForm;

// this displays the form, all the input fields, error messages, in the middle section of the page.
