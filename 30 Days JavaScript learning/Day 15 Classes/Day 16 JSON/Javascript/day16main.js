const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// No 1
// Change skills Arrays into JSON usinf stringfy()
console.log(JSON.stringify(skills,undefined,4));
console.log(JSON.stringify(skills));
// No 2
// Stringify the age variable
// No 6
const parseUser=JSON.parse(txt);
let extractAge=Object.values(parseUser)
.map(age=>age.age)
console.log(JSON.stringify(extractAge));
console.log(JSON.stringify(student,['age'],2));

// No 3
console.log(JSON.stringify(student,['isMarried'],2));

// No 4
console.log(JSON.stringify(student,undefined,2));
// No 5
console.log(JSON.stringify(student,['firstName','lastName','skills'],2));

// No 6
console.log(parseUser);
// No 7
// masalah dan solusi Di nomor ini
// kita gunakan initiator nya dulu untuk perbandingan
let mostSkill=0
let userWithManySkills=null
// kita sebarkan gunakan Object.entries
Object.entries(parseUser)
// kita gunakan foreach untuk mengitung nya
.forEach(([username,user])=>{
    // skillscount=panjang skill user
    let skillsCount=user.skills.length;
    // expresi ini jika panjang skill user lebih besar dari mostSkills
    if(skillsCount>mostSkill){
        // maka most skill akan di update
        mostSkill=skillsCount;
        // dan user yang punya banyak skill akan di ganti sama initiator nya nya
        userWithManySkills=username
    }
});
// dan kita log userwithmanyskills nya kan sudah di update tadi
console.log(userWithManySkills);