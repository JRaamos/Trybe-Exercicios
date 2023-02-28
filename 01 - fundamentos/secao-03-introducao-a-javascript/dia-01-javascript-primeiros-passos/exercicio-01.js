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

let num1 = 7;
let num2 = 7;
let num3 = 7;

if (num1 > num2 && num1 > num3 ) {
  console.log( num1 + ' Higher number');
}
else if ( num2 > num1 && num2 > num3){
  console.log(num2 + ' Higher number');
}
else if ( num3 > num1 && num3 > num2){
  console.log(num3 + ' Higher number');
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

//if/else

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
