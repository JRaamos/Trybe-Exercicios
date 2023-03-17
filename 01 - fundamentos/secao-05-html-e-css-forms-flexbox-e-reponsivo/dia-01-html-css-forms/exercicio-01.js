const button = document.getElementById('submit-btn');
const chek = document.getElementById('agreement');
document.getElementById('submit-btn').disabled = true;

const texte = (event) => {
  event.preventDefault();
};
button.addEventListener('click', texte);
chek.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
