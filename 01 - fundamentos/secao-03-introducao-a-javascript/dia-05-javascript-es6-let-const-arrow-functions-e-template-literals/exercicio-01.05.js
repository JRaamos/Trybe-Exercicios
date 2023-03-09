

let speed = 500;

const speedCar = (speed) => {
  const speedPermission = (speed >= 120) ? `Você ultrapassou o limite de velocidade`: `Você está na velocidade permitida`;
  return speedPermission;
}
console.log(speedCar(speed));