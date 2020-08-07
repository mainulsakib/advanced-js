const numbers=[3,5,6,7,85,43,24];
// let output=[];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result=element*element;
//     output.push(result)
// } 
// console.log(output)
// const result=numbers.map(function(element){
//     return element*element;
// })

// const square=numbers.map(x=>x*x)
// console.log(square)
// const filterValue=numbers.filter(x=>x>10)
// console.log(filterValue);
const isThere=numbers.find(c=>c>3)
console.log(isThere)