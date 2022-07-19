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