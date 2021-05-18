const multicheckbox = document.querySelector('.multicheckbox');
const allSelected = document.querySelector('.all-selected');
const unset = document.querySelector('.all-unset');

allSelected.addEventListener('click', () => {
  // multicheckbox는 유사배열. 이걸 js배열로 바꿔줌.
  [...multicheckbox.children].forEach((el) => {
    const innerCheckbox = el.querySelector('input');
    innerCheckbox.checked = true;
  });
});

unset.addEventListener('click', () => {
  // multicheckbox는 유사배열. 이걸 js배열로 바꿔줌.
  [...multicheckbox.children].forEach((el) => {
    const innerCheckbox = el.querySelector('input');
    innerCheckbox.checked = false;
  });
});
