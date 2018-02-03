export default (expenses) => {
  const reducer = (prev, curr) => prev + curr;

  const total =
    expenses
      .map(expense => expense.amount)
      .reduce(reducer, 0);
      
  return total;
}