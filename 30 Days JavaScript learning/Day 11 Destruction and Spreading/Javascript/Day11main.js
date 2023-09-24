const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// No 1
let [e,PI,Gravity,HumanBodyTemp,WaterBoilingTemp]=constants
console.log(e,PI,Gravity,HumanBodyTemp,WaterBoilingTemp);
// No 2
let[fin,est,sw,den,nor]=countries;
console.log(fin,est,sw,den,nor);
// No 3
let{width:w,height:h,area:a,perimeter:p}=rectangle
console.log(w,h,a,p);

// No 4
for (const {name,scores,skills,age} of users) {
    console.log(name,scores,skills,age);
}

// No 5
let iterateUser=users.filter(user=>user.skills)
for (const {name,skills} of iterateUser) {
    if (skills.length < 2) {
        console.log(name,skills);
    }
}

// No 6 Ada di file Countries_day11.js karna agar rapih dan tidak ada error jika 
// di compile di VsCode,Tapi di browser akan baik2 saja dan gak ada masalah

// No 7
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [user, skills,[ , ,jsScore,reactScore]]=student
console.log(user,skills,jsScore,reactScore);

// No 8
const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
function arrayToObject(Student){
let studentObject=Student.map(student=>{
  let [name,skills,skillsscore]=student
  return {name,skills,skillsscore}
})
return studentObject
}
console.log(arrayToObject(students));