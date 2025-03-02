import "../styles/ExpenseForm.css";

const FormInput = ({ value, onChange, placeholder, className }) => {
  return <input value={value} onChange={onChange} placeholder={placeholder} className={className} />;
};

export default FormInput;
// All of these values are destructured from the props object coming from ExpenseFormHandler.
// By asigning the value of the prop as itself, you are assigning the value of the parent component.
// the values that are in the components in the ExpenseForm.
