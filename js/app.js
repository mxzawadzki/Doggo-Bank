document.getElementById('amount').addEventListener('change', fingorImpressed);
document.getElementById('treat').addEventListener('click', giveTreat);
document.getElementById('loan-form').addEventListener('submit', function(e) {
  document.querySelector('.results').style.display = 'none';
  document.getElementById('doggo-smile').src = 'img/Fingor-Smile-Closed.png';
  document.getElementById('doggo-chat').textContent = 'I\'m calculating...';
  setTimeout(caluclateResults, 1000);
  e.preventDefault();
});

function addErrorEvent() {
  formInputs = document.querySelectorAll('.form__input');
  Array.from(formInputs).forEach(input => {
    input.addEventListener('click', clearError);
  });
}

function removeErrorEvent() {
  Array.from(formInputs).forEach(input => {
    input.removeEventListener('click', clearError);
  });
}

function caluclateResults() {
  const amount = document.getElementById('amount');
        interest = document.getElementById('interest'),
        years = document.getElementById('years'),
        monthlyPayment = document.getElementById('monthly-payment'),
        totalPayment = document.getElementById('total-payment'),
        totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value),
        calculatedInterest = parseFloat(interest.value) / 100 / 12,
        caluclatedPayments = parseFloat(years.value) * 12,
        x = Math.pow(1 + calculatedInterest, caluclatedPayments),
        monthly = (principal * x * calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * caluclatedPayments).toFixed(2);
    totalInterest.value = ((monthly * caluclatedPayments) - principal).toFixed(2);
    document.querySelector('.results').style.display = 'block';
    document.getElementById('doggo-smile').src = 'img/Fingor-Smile.png';
    document.getElementById('doggo-chat').textContent = `Done! ${fingorCalculate(10)} + ${fingorCalculate(10)} = 🍪`;
    removeErrorEvent();
    setTimeout(happyFingor, 2000);
  } else {
    showError('💡 Please enter valid numbers!');
  }
}

function showError(error) {
  document.querySelector('.results').style.display = 'none';
  document.getElementById('doggo-chat').textContent = error;
  document.getElementById('doggo-smile').src = 'img/Fingor-Tongue.png';
  addErrorEvent();
}

function clearError() {
  document.getElementById('doggo-chat').textContent = 'Hello, I\'m Fingor! Welcome to my loan department! ❤️';
  document.getElementById('doggo-smile').src = 'img/Fingor-Smile-Open.png';
}

function fingorCalculate(num) {
  return Math.floor(Math.random() * num + 1);
}

function fingorImpressed() {
  const highAmount = document.getElementById('amount').value;
  if (highAmount >= 2000) {
    document.getElementById('doggo-chat').textContent = 'Wow, you must be rich!';
    document.getElementById('doggo-smile').src = 'img/Fingor-Smile.png';
  }
}

function happyFingor() {
  document.getElementById('doggo-chat').textContent = 'Am I a good boy? ❤️';
  document.getElementById('doggo-smile').src = 'img/Fingor-Smile-Open.png';
}

function giveTreat() {
  document.getElementById('doggo-chat').textContent = `${fingorThanks()}`;
  document.getElementById('doggo-smile').src = 'img/Fingor-Smile.png';
  addErrorEvent();
}

function fingorThanks() {
  function generateRandomQuote() {
    function getRandomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let randomQuote = getRandomNumber(8);
    let quote;
    switch (randomQuote) {
      case 0:
        quote = 'So generous!';
        break;
      case 1:
        quote = 'I love you! ❤️';
        break;
      case 2:
        quote = 'You are a wonderful person!';
        break;
      case 3:
        quote = 'I\'m happy!';
        break;
      case 4:
        quote = 'Very delicious!';
        break;
      case 5:
        quote = 'You\'re my best friend!';
        break;
      case 6:
        quote = 'So yummy!';
        break;
      case 7:
        quote = 'I am a good boy!';
        break;
    }
    return quote;
  }
  let fingorQuote = generateRandomQuote();
  return fingorQuote;
}