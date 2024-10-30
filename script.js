const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalCost = document.getElementById('total-cost');
const remainingCost = document.getElementById('remaining-cost');
const toggleButton = document.getElementById('toggle-expense-list');
const categoryFilter = document.getElementById('category-filter');

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showLoginButton = document.getElementById('show-login');
const showSignupButton = document.getElementById('show-signup');
const trackerSection = document.getElementById('tracker-section');
const authSection = document.getElementById('auth-section');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let isListVisible = false;
let total = 0;

function renderExpenses(filterCategory = '') {
    expenseList.innerHTML = '';
    total = 0;

    expenses.forEach((expense, index) => {
        if (filterCategory && expense.category !== filterCategory) return; 

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${expense.category}</strong>: $${expense.amount} on ${expense.date} - ${expense.description} (Payment Method: ${expense.paymentMethod})
            <button class="edit-btn" onclick="editExpense(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(listItem);
        total += expense.amount;
    });

    totalCost.textContent = total.toFixed(2);
    remainingCost.textContent = (500 - total).toFixed(2); 
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const paymentMethod = document.getElementById('payment-method').value;

    const newExpense = { category, amount, date, description, paymentMethod };
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses)); 
    renderExpenses();
    form.reset();
});

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('category').value = expense.category;
    document.getElementById('amount').value = expense.amount;
    document.getElementById('date').value = expense.date;
    document.getElementById('description').value = expense.description;
    document.getElementById('payment-method').value = expense.paymentMethod;
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses)); 
    renderExpenses();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses)); 
    renderExpenses();
}

toggleButton.addEventListener('click', function () {
    isListVisible = !isListVisible;
    expenseList.style.display = isListVisible ? 'block' : 'none';
    toggleButton.textContent = isListVisible ? 'Hide Expenses' : 'Show Expenses';
});

categoryFilter.addEventListener('change', function () {
    renderExpenses(categoryFilter.value); 
});

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Signup successful! Redirecting to Expense Tracker...');
    authSection.style.display = 'none';
    trackerSection.style.display = 'block';
});

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login successful! Redirecting to Expense Tracker...');
    authSection.style.display = 'none';
    trackerSection.style.display = 'block';
});

renderExpenses();








