 const student=[
     {id:123, name:"Sakib khan"},
     {id:23,name:"Salsabil"},
     {id:13,name:"Mayuri"},
     {id:43,name:"Dipjol"}
]
//  let Name=[];
// for (let i = 0; i < student.length; i++) {
//     let name = student[i].name;
//     Name.push(name)  
// }
// console.log(Name)
const name=student.map(s=>s.id);
const bigger=name.filter(s=>s>30)
console.log(name)
console.log(bigger)