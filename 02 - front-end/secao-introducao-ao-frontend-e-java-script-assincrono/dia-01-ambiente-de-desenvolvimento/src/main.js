import validator from 'validator';
import './style.css';

const input = document.getElementById('input');
const select = document.getElementById('option');
const button = document.getElementById('buton');
const paragrafo = document.querySelector('p');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const text = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
  };
  paragrafo.innerHTML = `A validação retornou ${text[select.value]}`;
});
