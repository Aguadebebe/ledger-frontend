import "./ExpenseItem.css";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
    <li className="expense-item">
      <span className="expense-title"> {expense.title + " = "} </span>
      {expense.description}
      <span className="expense-amount">{"$" + expense.amount}</span>
      {expense.date}

      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;

// this returns the actual expense item as a object list element when a user submits the filled out form.
