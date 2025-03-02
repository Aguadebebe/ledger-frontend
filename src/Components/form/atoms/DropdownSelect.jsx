import "../styles/ExpenseForm.css";
const DropdownSelect = ({ value, onChange }) => {
  return (
    <select className="select-category form-control mb-3" value={value} onChange={onChange}>
      <option>Select a Category</option>
      <option>Bills</option>
      <option>Auto Parts</option>
      <option>Groceries</option>
    </select>
  );
};

export default DropdownSelect;
