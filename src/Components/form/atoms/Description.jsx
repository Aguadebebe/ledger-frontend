import "../styles/ExpenseForm.css";
const Description = ({ value, onChange }) => {
  return (
    <textarea
      className="input-expense-description form-control mb-3"
      placeholder="Enter Expense Description"
      value={value}
      onChange={onChange}
    />
  );
};

export default Description;
