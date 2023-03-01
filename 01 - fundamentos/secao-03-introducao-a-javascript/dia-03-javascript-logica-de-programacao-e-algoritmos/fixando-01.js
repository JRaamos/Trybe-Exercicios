let saldo = 1000
function moveAccount(saldo){
  return 'Seu saldo é: '+saldo +'R$' 
};

console.log(moveAccount(saldo));
let headds = 100
saldo = saldo + headds;

console.log(moveAccount(saldo));
 let payment = 50;
 saldo = saldo - payment;
console.log(moveAccount(saldo));

let rate = 0.01;
saldo = saldo + (saldo * rate);
console.log(moveAccount(saldo));
saldo = saldo /2;
console.log(moveAccount(saldo));

