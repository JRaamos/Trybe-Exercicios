const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const dadosName = dados.filter((item) => typeof item === 'number');

//console.log(dadosName);

const valorItens = [1, 32, 44, 2, 3];

const resultado = valorItens.reduce((acc, curr) => acc + curr
, 0);
console.log(resultado);