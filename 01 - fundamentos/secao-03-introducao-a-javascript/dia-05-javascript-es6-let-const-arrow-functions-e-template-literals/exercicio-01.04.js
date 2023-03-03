
const index = () => {
const numeroAleatorio = Math.random()
return numeroAleatorio
}

console.log(index());


(nome) => {
  return `Olá, ${nome}!`
}
let nome2 = 'Ivan';
console.log((nome2));


const nomeCompleto = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`
}
  let nome = 'Ivan';
  let sobrenome = 'Pires';
    console.log(nomeCompleto(nome, sobrenome));