import "../styles/ExpenseForm.css";
const InputDate = ({ value, onChange }) => {
  return <input className="input-date form-control mb-3" type="date" value={value} onChange={onChange} />;
};

export default InputDate;
