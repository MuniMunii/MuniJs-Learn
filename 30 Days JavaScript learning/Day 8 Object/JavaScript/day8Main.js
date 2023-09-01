// No 1 Dan 3
let Cat={
    Name:'Nyochio',
    Legs:4,
    Color:'White, Black And Orange',
    Bark:function(){
        return 'Wwowowoowow'
    }
}

// No 2 Print object nomor 1
console.log(Cat);

//No 3
console.log(Cat.Bark());

//No 4
console.log(Cat);

//No 5 add object
Cat.Breed=('Scottish Fold');
Cat.getCatInfo=function() {
    return this.Name+' '+this.Color+' '+this.Legs+' '+this.Breed
}
console.log(Cat.getCatInfo());

const users = {
    Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
    },
    Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
    },
    Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
    },
    Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
    },
    John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
    },
    Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
    },
    Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
    },
    // No 6 Blon ketemu solusi
    // findMaxSkills:function(){
    //     let maxSkills=0
    //     let NameUser=null
    //     for (const userName in this) {
    //         if (this.hasOwnProperty(userName)&&userName !=='findMaxSkills') {
    //             const User=this[NameUser];
    //             if (User.skills&&User.skills.length>NameUser) {
    //                 maxSkills=User.skills.length;
    //                 NameUser=userName
    //             }
    //         }
    //         if (NameUser) {
    //             return this[NameUser]
    //         }
    //         else{
    //             return 'There is No skill'
    //         }
    //     }
    // }

    // No 7 Count Point
    // Masalah nya sama seperti yang di bawah cuma yang di bedakan kondisi nya saja
    countPoint:function(){
        let emptyArray=[]
        for (const userName in this) {
            if (this.hasOwnProperty(userName)&&userName!=='countpoint') {
                if(this[userName].points >= 50)
                emptyArray.push(userName)
            }
        }
        return emptyArray
    },
    // No 7 
    // Masalah dan Solusi
    countOnline:function(){
        let emptyArray=[]
        // untuk loop sebuah object harus Memakai for in
        for (const userName in this) {
            // Akan ku jelaskan maksud dari expresi kondisi ini
            // pertama this.hasOwnProperty(username) jika property ada username dan
            // username!=='countonlinePoint' ini maksud nya agar fungsi di dalam object tidak perlu di baca
            if (this.hasOwnProperty(userName)&&userName!=='countOnline') {
                if(this[userName].isLoggedIn===true)
                emptyArray.push(userName)
            }
        }
        return `There is ${emptyArray.length} people online`
    }
}

//No 7 Count Point
console.log(users.countPoint());

//No 7
console.log(users.countOnline());
