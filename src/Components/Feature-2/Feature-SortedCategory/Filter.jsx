import "./Filter.css";
const Filter = (props) => {
  return (
    <div>
      <h2>Filter by Category -</h2>
      <div className="filter-category-border">
        <ul>
          {Object.keys(props.groupedExpenses)

            .filter((category) => {
              // Filter categories based on selectedCategory and validCategories
              if (props.selectedCategory) {
                return category === props.selectedCategory && props.validCategories.includes(category);
              } else {
                // If no category is selected, filter only those that exist in validCategories
                return props.validCategories.includes(category);
              }
            })

            .map((category) => {
              // Calculate the category for this totals
              const categoryTotal = props.groupedExpenses[category].reduce((sum, expense) => {
                const amount = parseFloat(expense.amount); // Convert to number
                return sum + (isNaN(amount) ? 0 : amount); // Handle invalid values, conditional statement to make sure if the value is not a number that sum doesn't return NaN but a 0 or the added to the amount.
              }, 0);

              return (
                <div key={category}>
                  <h3>{category}</h3>
                  <ul>
                    {props.groupedExpenses[category].map((expense) => {
                      const amount = parseFloat(expense.amount); // Convert to number for each expense
                      return (
                        <li key={expense.id}>
                          - <span className="expense-li-title">{expense.title}</span> -
                          <span className="expense-li-amount">${isNaN(amount) ? "0.00" : amount.toFixed(2)}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {/* Display the total for this category below the list of expenses */}
                  <p>
                    <strong className="strong-category">Total for {category}:</strong>
                    <strong className="strong-cat-total">${categoryTotal.toFixed(2)}</strong>
                  </p>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;

// this separates and groups expenses together. As well as displaying the amount for each expense and total for that category.
