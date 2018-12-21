
document.getElementById('loan-form').addEventListener('submit', function(e) {
  document.querySelector('.results').style.display = 'none';
  document.querySelector('.loading').style.display = 'block';
  setTimeout(caluclateResults, 1000);
  e.preventDefault();
});

function caluclateResults() {
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const caluclatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, caluclatedPayments);
  const monthly = (principal * x * calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * caluclatedPayments).toFixed(2);
    totalInterest.value = ((monthly * caluclatedPayments) - principal).toFixed(2);
    document.querySelector('.results').style.display = 'block';
    document.querySelector('.loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }
}

function showError(error) {
  document.querySelector('.results').style.display = 'none';
  document.querySelector('.loading').style.display = 'none';

  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}