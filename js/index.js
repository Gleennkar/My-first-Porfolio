// eslint-disable-next-line no-unused-vars
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

// eslint-disable-next-line no-unused-vars
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

document.querySelectorAll('.cardButton').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
  });
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'none';
});

// local storage
let userDetails = {
  name: '',
  email: '',
  message: '',
};

if (localStorage.getItem('savedDetails') !== null) {
  const finalDetails = localStorage.getItem('savedDetails');
  userDetails = JSON.parse(finalDetails);
}

const input = document.querySelectorAll('input,textarea');
input.forEach((item) => {
  item.value = userDetails[item.name];
  item.addEventListener('input', (e) => {
    userDetails[e.target.name] = e.target.value;

    const userData = JSON.stringify(userDetails);
    localStorage.setItem('savedDetails', userData);
  });
});

//  formValidation
const email = document.getElementById('email');
const form = document.getElementById('input');
const displayMsg = document.getElementById('form-message-error');
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-message');
    displayMsg.textContent = 'Your email address should be in lowercase';
  } else {
    displayMsg.style.visibility = 'hidden';
  }
});