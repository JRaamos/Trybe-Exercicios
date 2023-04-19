const items = ['Camiseta', 'Carregador', 'Chinelo'];
const variavel = [...items];
//console.log(variavel);

const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
price: 23
}

const newProduct = { ...product, ...productPrice };

//console.log(newProduct);

const itemss = ['Camiseta', 'Carregador', 'Chinelo'];
const itemsss = ['Camiseta', 'Carregador', 'Chinelo'];

const itemssss = {...itemss, ...itemsss};
//console.log(itemssss);

const countParams = (...args) => {
  //console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

//console.log(countParams(0, 1, 2)); 
//console.log(countParams('string', null, [1, 2, 3], { }));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
//console.log(sum(4, 7, 8, 9, 60));

// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);