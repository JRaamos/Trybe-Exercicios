const body =document.getElementsByTagName('body');
const sonBody =document.createElement('h1');
const main = document.createElement('main');
const sections = document.createElement('section');
const paragraph = document.createElement('p');
const sections2 = document.createElement('section');
const sections3 = document.createElement('section');
const picture = document.createElement ('img');
const list = document.createElement('ul');


sonBody.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(sonBody);
main.classList.add('main-content');
document.body.appendChild(main);
main.appendChild(sections)
sections.appendChild(paragraph)
paragraph.innerHTML = 'O pai chegou'
sections.classList.add('center-content');


sections2.classList.add('left-content');
main.appendChild(sections2);
console.log(sections2);

sections3.classList.add('right-content');
main.appendChild(sections3);

picture.classList.add('small-image');
sections2.appendChild(picture)
picture.src = 'https://picsum.photos/200';

sections3.appendChild(list);


  
let arrayNumber = ['um', 'dois','tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for (let index in arrayNumber){
  const listLi = document.createElement('li');
  listLi.innerHTML =arrayNumber[index]
  list.appendChild(listLi);
};


for (let index = 1; index <=3; index += 1){
  const subTopc = document.createElement('h3');
  main.appendChild(subTopc);
  subTopc.innerHTML = index
}