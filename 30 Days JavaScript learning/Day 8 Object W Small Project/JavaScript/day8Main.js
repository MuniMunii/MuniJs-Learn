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
    },
    // Masalah No 8
    mernStackChecker:function(){
        const mernStack = ['MongoDB', 'Express', 'React', 'Node']
        let emptyArray=[]
        for (const userName in this) {
            if (this.hasOwnProperty(userName)&&userName!=='mernStackChecker') {
                const skillUser=this[userName].skills
                // Memeriksa apakah pengguna memiliki properti skills yang merupakan array.
                if (skillUser&&Array.isArray(skillUser)) {
                    // jadi variable ini menyimpan apakah skill users sama dengan mernstack
                    const hasMernSkill=mernStack.every(skills=>skillUser.includes(skills))
                    if(hasMernSkill){
                        emptyArray.push(userName)
                    }
                }
            }
        }
        return emptyArray
    }
}

//No 7 Count Point
console.log(users.countPoint());

//No 7
console.log(users.countOnline());

//No 8 
console.log(users.mernStackChecker());

//No 9 menggunakan assign jika ingin mengcopy dan mengubah object
const usersRamjiCopy=Object.assign({
    ramji:{
        email: 'RamjiMull.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 18,
        isLoggedIn: false,
        points: 40
    }
},users)
console.log(usersRamjiCopy);

//No 10
const usersKey=Object.keys(users)
const userKeyAlex=Object.keys(users.Alex)
console.log(userKeyAlex);
console.log(usersKey);

//NO 11
const valueUser=Object.values(usersRamjiCopy)
console.log(valueUser);

//No 12
// countries.forEach(country => {
//     console.log(`Country: ${country.name}`);
//     console.log(`Capital: ${country.capital}`);
//     console.log(`Population: ${country.population}`);
//     console.log(`Languages: ${country.languages.join(', ')}`);
//     console.log(`Flag: ${country.flag}`);
//     console.log(`Currency: ${country.currency}`);
//     console.log('---------------------');
// });

//No 13
let personAccount={
    firstName:'Ramzi',
    lastName:'Akbar',
    incomes:3000000,
    expenseProperties:1000000,
    totalIncomes:4000000,
    totalExpenses:1000000,
    getAccountInfo:function(){
        return `Account Info \n${this.firstName+' '+this.lastName}\n`
    },
    addIncomes:function(addNum){
        this.totalIncomes+=addNum
        return `You Succesfully added ${addNum} To Your totalIncomes`
    },
    addExpenses:function(addNum){
        this.totalExpenses+=addNum
        return`You Succesfully added ${addNum} To Your totalExpenses`
    },
    getAccountBallance:function(){
        return `Monthly Expenses=${this.expenseProperties.toLocaleString()}\nMonthly Incomes=${this.incomes.toLocaleString()}\nTotalExpenses=${this.totalExpenses.toLocaleString()}\nTotalIncomes=${this.totalIncomes.toLocaleString()}`
    },
    payExpenses:function(addNums) {
        if(this.totalIncomes>=addNums){
        this.totalIncomes-=addNums
        this.totalExpenses-=addNums
        return`You succesfully pay ${addNums} expenses from your total incomes`
        }
        else{
            if (addNums===0||addNums===isNaN||addNums===''||addNums===undefined) {
                return `Input The correct Number`
            }
            else{
                return `Insufficient Incomes`
            }
        }
    }
}
console.log(personAccount.getAccountInfo());
console.log(personAccount.payExpenses(30000));
console.log(personAccount.addIncomes(300000));
console.log(personAccount.addExpenses(800000));
console.log(personAccount.getAccountBallance());

// Untuk Nomor 14,15,16
const usersShop = [
        // No 14 Part A 
        // Akan ku jelaskan Masalah dan solusi di codingan ini
        // kita buat parameter function nya dulu kaya username,pw,isLoggedIn bisa di isi/gak bebas karna cuma hiasan online/gk nya
        {signUP:function(username,email,password){
            //method some ini agar ngecek apakah salah satu array nya ada yang cocok dengan kondisi yang diberikan
            //bedanya sama includes kalo includes return nya akan boolean
            let existUser=usersShop.some(usersShop=>usersShop.email===email);
            // Ini jika di object userShop ada email Yang sama/buat 2 akun maka akan return tanpa nilai/gak masuk ke array
            if (existUser) {
                console.log('User Already Exist');
                return
            }
            // ini untuk random id nya biar kaya contoh array diatas karna ada _id
            let ranNum='1234567890asdfghjklqwertyuiopzxcvbnmQWERTYIOPASDFGHJKLZXCVBNM'
            let idSix=''
            for (let i = 0; i <= 6; i++) {
                let randomSixNum=Math.floor(Math.random()*ranNum.length)
                idSix+=ranNum[randomSixNum]
            }
            // Date Function
            let newDate=new Date();
            let newDays=newDate.getDay();
            let newMonth=newDate.getMonth();
            let newYear=newDate.getFullYear();
            let newHours=newDate.getHours();
            let newMinutre=newDate.getMinutes();
            // ini kita make ternary function biar simple, nentuin waktu zone nya 
            let Timezone=newHours >= 12 ?'AM':'PM'
            let Times=`${newDays}/${newMonth}/${newYear} ${newHours}:${newMinutre} ${Timezone}`
            // Assigning Objectnya
            // kita make unshift jadi array yang baru nya akan masuk dari awal index
            // kesalahan tadi make push nanti buat ambil index function signUP nya susah dan gak efektif
            usersShop.push(Object.assign({
                _id:idSix,
                username,
                email,
                password,
                createdAt:Times,
                isLoggedIn:false
            },this))
        }
        },
        //No 14 Part B
        // masalah yang ku alami disini
        {
            signIN:function(user,pw){
            // kita pake method find dulu untuk mencari username yang sama dengan parameter user
            let existUser=usersShop.find((usersShop)=>usersShop.username===user);
            // kita buat expresi kondisi jika existuser dan pw nya sama dengan object existuser.pw maka akan true
            if (existUser&&pw===existUser.password) {
                // jika berhasil maka object isloggedin akan menjadi True kan tadi pas signUp masi False
                existUser.isLoggedIn=true
                return 'You can Access Now'
            }
            else{
                return 'Wrong Password'
            }
        }
        },
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    },
    ];
    const products = [{
        rateProduct:function(user,product,rate){
            const findUser=usersShop.find(findUser=>findUser.username===user)
            if(!findUser || !findUser.isLoggedIn){
                return 'You Need To Log In first To rate the product'
            }
            if (rate < 1||rate > 5) {
                return 'please Rate in between 1-5'
            }
            const findProduct=products.find(findProduct=>findProduct.name===product)
            if (!product) {
                return 'Product Is Not Found'
            }
            findProduct.ratings.push({userId:findUser._id,rate})
            return 'Thanks For Rating'
        }
    },
    {likeProduct: function (user, product, likes) {
            const finduser = usersShop.find((usersShop) => usersShop.username === user);
            if (!finduser || !finduser.isLoggedIn) {
                return 'You need To log in First';
            }
            // ini sebenernya kita bisa ganti products.description ganti ke name agar lebih mudah karan cuma sedikit object nya
            // tapi biar realistis aja
            const findproduct = products.find(products => products.description === product);
            if (!findproduct) {
                return 'pls input the correct product';
            }
            if (likes.toLowerCase() === 'yes') {
                findproduct.likes.push(
                    { userId: finduser._id }
                );
                return 'Thanks for like';
            }
        },
},
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [{ userId: 'fg12cy', rate: 4 },
    { userId: 'zwf8md', rate: 3 }],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 3.5 },
    { userId: 'fg12cy', rate: 5 },
    { userId: 'fg12cy', rate: 3 }],
    likes: ['fg12cy']
}
]
// No 14 Part A in Web
function signUPWeb(){
    let Username=document.getElementById('User').value
    let Email=document.getElementById('Email').value
    let password=document.getElementById('Password').value
    let result=document.getElementById('result')
    let existUser=usersShop.some((usersShop)=>usersShop.email===Email)
    if (existUser) {
        result.innerHTML='User Already Exist'
        return
    }
    let randomNumber='123456790WERTYUIOPQASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    let id=''
    for (let i = 0; i <= 6; i++) {
        let generateNumber=Math.floor(Math.random()*randomNumber.length)
        id += randomNumber[generateNumber]
    }
    let newDate=new Date();
            let newDays=newDate.getDay();
            let newMonth=newDate.getMonth();
            let newYear=newDate.getFullYear();
            let newHours=newDate.getHours();
            let newMinutre=newDate.getMinutes();
            let Timezone=newHours >= 12 ?'AM':'PM'
            let Times=`${newDays}/${newMonth}/${newYear} ${newHours}:${newMinutre} ${Timezone}`
    usersShop.push({
        _id:id,
        Username,
        Email,
        password,
        Times,
        isLoggedIn:false
    })
    return console.log(Array.from(usersShop.values()));
}
// No 14 Part B in Web
function signInWeb() {
    let Username=document.getElementById('Username').value;
    let Password=document.getElementById('Password').value;
    let Result=document.getElementById('resultSignIn');
    let existUser=usersShop.find(usersShop=>usersShop.username===Username);
    let userPassword=usersShop.find(usersShop=>usersShop.password===Password)
    if (existUser&&userPassword.password===Password) {
        existUser.isLoggedIn=true
        Result.innerHTML='Successfully Login'
    }
    else{
        Result.innerHTML='Wrong Password/UserName'
    }
}
// No 14 Part A function di line 235
usersShop[0].signUP('Ramzi','Ramzi03311@gmail.com','sirRamjier')
// ini contoh agar kita gak bisa buat akun dengan email yang sama bisa di liat di code function nya
usersShop[0].signUP('Ramzi','Ramzi03311@gmail.com','sirRamjier')
console.log(Array.from(usersShop.values()));

//No 14 Part B di Line 277
usersShop[1].signIN('Ramzi','sirRamjier')
// isLoggedIn nya jadi True setelah signin
console.log(usersShop[1].signIN('Ramzi','sirRamjier'));

// No 15 Part A
console.log(products[0].rateProduct('Ramzi','TV',5));
console.log(Array.from(products.values()));
// No 15 Part B
function averageRating(productName){
    const product = products.find(product => product.name === productName);
    // Check if the product exists
    if (!product) {
        return 'Product not found';
    }
    // Check if the product has any ratings
    if (!product.ratings || product.ratings.length === 0) {
        return 'No ratings available for this product';
    }
    // Calculate the sum of ratings
    const sumRatings = product.ratings.reduce((total, rating) => total + rating.rate, 0);
    // Calculate the average rating
    const average = sumRatings / product.ratings.length;

    return average;
}
console.log(averageRating('TV'));
//No 16
console.log(products[1].likeProduct('Ramzi','Huawei Honor','yes'));
console.log(Array.from(products.values()));
