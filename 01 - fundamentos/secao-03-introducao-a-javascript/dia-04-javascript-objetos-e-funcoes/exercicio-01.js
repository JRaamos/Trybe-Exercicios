let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

/*console.log('Bem-vinda, ' + info.personagem);*/

info['recorrente'] = 'sim'

for (let index in info){
 console.log( index);
}

for (let index in info){
  console.log( info[index]);
 }

 let infoTwo={
  personagem:'Tio Patinhas',
  origem:'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota:'O último MacPatinhas',
  recorrente:'sim'
 };

 for(let index in info){
  if ( index === 'recorrente' && info[index] === 'sim' && infoTwo[index] === 'sim' ){
   console.log('Ambos recorrentes');
  } else {
  console.log(info[index] + ' e ' + infoTwo[index]);
  }
 };
 
 
