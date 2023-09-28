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

// No 8 Masalah dan solusi di Nomor Ini
const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
function arrayToObject(Student){
  // kita gunakan map agar mengubah semua array menjadi object saat di return nya
let studentObject=Student.map(student=>{
  let [name,skills,skillsscore]=student
  return {name,skills,skillsscore}
})
// abis itu di function nya kita return variable Map nya
return studentObject
}
console.log(arrayToObject(students));

// No 9 masalah dan solusi di nomor ini
const students1 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}
// Gak tau gimana yang di haruskan di soal nya tetapi ku gunakan push saja biar gampang
students1.skills.frontEnd.push({skill:'BootStrap',level:9})
students1.skills.backEnd.push({skill:'Express',level:8})
students1.skills.dataBase.push({skill:'SQL',level:8})
students1.skills.dataScience.push('SQL')
// setelah sudah selesai mengePUsh kita re construksikan
// jangan lupa saat kontruksi Object pakai juga properti nya agar kebaca dan tidak undefined
let {name:nama,age:ages,skills:skillss}=students1
console.log(nama,ages,skillss);