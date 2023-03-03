let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let highestValue = numbers[0]

for (let bigger = 1; bigger < numbers.length; bigger += 1){
  
  if (numbers[bigger] > highestValue){
  highestValue = numbers[bigger]
  }
}
console.log(highestValue);