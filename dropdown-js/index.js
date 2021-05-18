const label = document.querySelector('.label');
const dropdown = document.querySelector('.dropdown');

label.addEventListener('click', () => {
  dropdown.classList.toggle('disabled');
});
