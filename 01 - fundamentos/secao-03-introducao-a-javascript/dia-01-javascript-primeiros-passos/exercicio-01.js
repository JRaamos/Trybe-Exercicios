// ======= OPERADORES ARITIMÉTICOS =======
let a = 8;
let b = 7;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// ============IF/ELSE ============
// if/else 01
let num1 = 70;
let num2 = 70;

if (num1 > num2) {
  console.log( num1 + ' Higher number');
}
else if ( num2 > num1){
  console.log(num2 + ' Higher number');
}
else {
  console.log('Invalid information');
}

//if/else 02

let number1 = 7;
let number2 = 7;
let number3 = 7;

if (number1 > number2 && number1 > number3 ) {
  console.log( number1 + ' Higher number');
}
else if ( number2 > number1 && number2 > number3){
  console.log(number2 + ' Higher number');
}
else if (number3 > number1 && number3 > number2){
  console.log(number3 + ' Higher number');
}
else {
  console.log('Invalid information');
}

//if/else 03

let num = 0


if (num > 0){
  console.log('Positivo');
}
else if (num < 0){
  console.log('Negativo');
}
else {
  console.log('Zero');
}

//if/else 04

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

let triangle = angle1 + angle2 + angle3;

if( triangle === 180){
  console.log(true);
}
else if (triangle != 180){
  console.log('false'); 
}

// ============= SWITH/CASE ==========

let peça = 'piao'

switch (peça) {
  case 'cavalo':
    console.log('O cavalo move-se por duas casas horizontalmente ou verticalmente ');
        break;
  case 'torre':
    console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça');
    break;
  case 'bispo':
      console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro.');
      break;
  case 'rainha':
    console.log(' Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente');
    break;
  case 'rei':
      console.log('O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção');
      break;
  default:
    console.log('informação invalida');
    break;
}

// if/else 05

let porcentagem = -1;

if ( porcentagem >= 90){
  console.log('A');
}
else if ( porcentagem >= 80){
  console.log('B');
}
else if ( porcentagem >= 70){
  console.log('C');
}
else if ( porcentagem >= 60){
  console.log('D');
}
else if ( porcentagem >= 50){
  console.log('E');
}
else if ( porcentagem > 0 && porcentagem < 50){
  console.log('F');
}
else if (porcentagem > 100 || porcentagem < 0){
  console.log('Informação invalida');
}