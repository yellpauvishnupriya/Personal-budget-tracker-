let totalExpenses = 0;
const remainingBudgetValue = 1000;

document.getElementById('expenseForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const description = document.getElementById('expenseDescription').value;
  const amount = parseFloat(document.getElementById('expenseAmount').value);

  if (description.trim() !== "" && amount > 0) {
    totalExpenses += amount;
    updateBudgetSummary();
    alert(Expense Added: ${description} - $${amount});
    this.reset();
  } else {
    alert('Please enter valid inputs');
  }
});

function updateBudgetSummary() {
  document.getElementById('totalExpenses').textContent = $${totalExpenses.toFixed(2)};
  document.getElementById('remainingBudget').textContent = $${(remainingBudgetValue - totalExpenses).toFixed(2)};
}

function resetBudget() {
  totalExpenses = 0;
  updateBudgetSummary();
}
