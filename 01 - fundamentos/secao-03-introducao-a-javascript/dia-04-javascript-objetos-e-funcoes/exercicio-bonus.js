let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
function addturn (){
  lesson2.turno = 'noite'
}
addturn()

function key(){
  Object.keys(lesson1)
};
function quantity(){
  Object.keys(lesson1).length
};
function value (){
Object.values(lesson1)
};

let allLessons = Object.assign({}, {
  lesson1:lesson1,
  lesson2:lesson2,
  lesson3: lesson3,
});

console.log(allLessons);