let saldo = 1000;

function addBalance(valor){
 return 'Seu saldo é: ' + (saldo + valor) +'R$'
}

function subtractBalance(valor) {
  return 'Seu saldo é: ' + (saldo - valor) +'R$'
}

function multiplyBalance(valor) {
  return'Seu saldo é: ' + (saldo + (saldo * valor)) +'R$'
}

function divideBalance(valor) {
  return'Seu saldo é: ' + (saldo / valor) +'R$'
}

console.log(addBalance(100));
console.log(subtractBalance(50));
console.log(multiplyBalance(0.01));
console.log(divideBalance(2));
