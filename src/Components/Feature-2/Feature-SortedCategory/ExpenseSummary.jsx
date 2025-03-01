import "./ExpenseSummary.css";

const ExpenseSummary = ({ expenses = [] }) => {
  const expenseCount = expenses.length;
  // Using reduce to group expenses

  const groupExpenses = expenses.reduce((acc, expense, index) => {
    const amount = parseFloat(expense.amount) || 0; // Convert to number and handle invalid values

    return acc + amount;
  }, 0);

  const roundedTotalExpenseAmount = groupExpenses.toFixed(2);

  return (
    <>
      <h2>Expense Summary -</h2>
      <div className="expense-summary-border">
        {expenseCount > 0 && (
          <div>
            <p>Total Expense Count: {expenseCount}</p>
            <p>Total Expense Amount: ${roundedTotalExpenseAmount}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ExpenseSummary;

// This adds and displays the total for how many list items and the total amount they add up to. Also does some string to number conversion.
