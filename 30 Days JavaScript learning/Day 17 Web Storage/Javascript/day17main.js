// No 1
localStorage.setItem('firstname','Ramzi','lastname','Akbar');
localStorage.setItem('lastname','Akbar');
localStorage.setItem('Age','20');
localStorage.setItem('Country','Indonesia');
localStorage.setItem('City','Depok');
let Student=[
    {
        Name:'Ramzi',
        lastName:'Akbar',
        Age:20,
        Skills:['Css','HTML','Javascript'],
        Country:'Indonesia'
    }
];
// No 2
let stringfyStudents=JSON.stringify(Student,undefined,4)
localStorage.setItem('Student',stringfyStudents)
console.log(JSON.stringify(Student,undefined,4));

// No 3 Tidak di kerjakan karna tidak nyambung soalnya
