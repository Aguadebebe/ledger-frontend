import "../styles/ExpenseForm.css";
import { useEffect } from "react";
import FormInput from "../atoms/FormInput";
import Description from "../atoms/Description";
import InputDate from "../atoms/InputDate";
import DropdownSelect from "../atoms/DropdownSelect";
import AddExpenseBtn from "../atoms/AddExpenseBtn";
const ExpenseForm = (props) => {
  useEffect(() => {
    console.log("Expense Category updated:", props.expenseCategory);
  }, [props.expenseCategory]); // Logs whenever `expenseCategory` is updated

  return (
    <section className="form-border">
      <form className="d-flex flex-column" onSubmit={props.handleFormSubmit}>
        <fieldset>
          <legend>Expense Form -</legend>
          <FormInput
            className="input-title form-control mb-3"
            placeholder="Enter Title"
            value={props.expenseTitle}
            onChange={(event) => {
              props.updateExpenseTitle(event.target.value);

              if (props.errors.title) {
                props.setErrors((prevErrors) => ({ ...prevErrors, title: "" }));
              }
            }}
          />
          {props.errors.title && <p className="errors">{props.errors.title}</p>}

          <Description
            value={props.expenseDescription}
            onChange={(event) => {
              props.updateExpenseDescription(event.target.value);
              if (props.errors.description) {
                props.setErrors((prevErrors) => ({ ...prevErrors, description: "" }));
              }
            }}
          />
          {props.errors.description && <p className="errors">{props.errors.description}</p>}

          <FormInput
            className="enter-amount form-control mb-3"
            placeholder="Enter Amount $"
            value={props.expenseAmount}
            onChange={(event) => {
              props.updateExpenseAmount(event.target.value);
              if (props.errors.amount) {
                props.setErrors((prevErrors) => ({ ...prevErrors, amount: "" }));
              }
            }}
          />
          {props.errors.amount && <p className="errors">{props.errors.amount}</p>}

          <InputDate
            value={props.expenseDate}
            onChange={(event) => {
              props.updateExpenseDate(event.target.value);
              if (props.errors.date) {
                props.setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
              }
            }}
          />
          {props.errors.date && <p className="errors">{props.errors.date}</p>}

          <DropdownSelect
            value={props.expenseCategory}
            onChange={(event) => {
              props.updateExpenseCategory(event.target.value);
              // Clear error if valid category selected
              if (props.errors.category) {
                props.setErrors((prevErrors) => ({ ...prevErrors, category: null })); //This is set to null so that the error message will clear
              }
            }}
          />

          {props.errors.category && <p className="errors">{props.errors.category}</p>}
          <AddExpenseBtn />
        </fieldset>
      </form>
    </section>
  );
};

export default ExpenseForm;

// this displays the form, all the input fields, error messages, in the middle section of the page.
