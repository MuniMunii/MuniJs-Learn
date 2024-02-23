// No 1
console.log('=========================Object===========================');
let Dog={
    name:'Doggi',
    leg:'4',
    color:'Yellow',
    Age:'1',
    bark:function() {
        console.log('Bark Bark');
    },
    Breed:'Golden Retrivier',
    getDogInfo:function(){
        console.log(`Age: ${Dog.Age}, Leg: ${Dog.leg}, Color: ${Dog.color}, Name: ${Dog.name}, Breed: ${Dog.Breed}`);
    }
}
Dog.getDogInfo()
Dog.bark()

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
    }
  }
function SearchPersonWithTheMostSKills(users) {
    let maxSkills=0
    let nameWithTheMostSkills=null
    for (const Name in users) {
        if (Object.hasOwnProperty.call(users, Name)) {
            const userSkills = users[Name].skills
            if(userSkills&&userSkills.length>maxSkills){
                maxSkills=userSkills.length
                nameWithTheMostSkills=Name
            }
        }
    }
    if ((nameWithTheMostSkills!==null)) {
        console.log(`${nameWithTheMostSkills}`);
    }
    else{
        console.log('user not found');
    }
}
SearchPersonWithTheMostSKills(users)

function CountUserWithScore50Above(object) {
    let countUser=[]
    for (const Name in object) {
        if (Object.hasOwnProperty.call(object, Name)) {
            const UserPoint = object[Name].points;
            const UserStatus=object[Name].isLoggedIn;
            if (UserPoint >= 50 && UserStatus===true) {
                countUser.push(Name)
            }
        }
    }
    console.log(countUser);
}
CountUserWithScore50Above(users)

function PeopleWithMernstack(object){
    let UserWithMern=[]
    const MernPattern=['mongodb','express','react','node']
    for (const Name in object) {
        if (Object.hasOwnProperty.call(object, Name)) {
            const UserSkills = object[Name].skills.map(skills=>skills.toLowerCase());
            let MERN=MernPattern.every(skills=>UserSkills.includes(skills))
            if (MERN) {
                UserWithMern.push(Name)
            }
        }
    }
    console.log(UserWithMern);
}
PeopleWithMernstack(users)

let copyUser=Object.assign({ ramji:{
    email: 'RamjiMull.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 18,
    isLoggedIn: false,
    points: 40
}},users)
const keyCopyUser=Object.keys(copyUser)
const valuesCopyUser=Object.values(copyUser)
console.log(copyUser);
console.log(keyCopyUser);
console.log(valuesCopyUser);

let PersonAccount={
    FirstName:'Ramzi',
    LastName:' Muni',
    Incomes:1000,
    Expenses:300,
    TotalIncomes:23000,
    TotalExpenses:1000,
    getPersonInfo:function() {
        console.log(`Name:${this.FirstName+this.LastName}, TotalIncomes: ${this.TotalIncomes}, TotalExpenses: ${this.TotalExpenses}`);
    },
    addIncomes:function(Number) {
        this.TotalIncomes+=Number
    },
    addExpenses:function(Number) {
        this.TotalExpenses+=Number
    }
}
PersonAccount.addIncomes(12)
PersonAccount.getPersonInfo()

const usersCostumer = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]

const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]
  
function RateProduct(user,product,rateNum){
    let SearchPeople=usersCostumer.find(UserName=>UserName.username===user)
    let SearchProduct=products.find(productFilter=>productFilter.name===product)
    if (rateNum > 5||rateNum < 1||isNaN(rateNum)) {
        return 'Rate only in between 1 and 5'
    }
    else if(!SearchProduct){
        return 'Product Not Found'
    }
    else{
        SearchProduct.ratings.push({userId:SearchPeople._id,rate:rateNum})
    }
}

function LikeProduct(user,product){
    let SearchPeople=usersCostumer.find(UserName=>UserName.username===user)
    let SearchProduct=products.find(productFilter=>productFilter.name===product)
    if (!SearchPeople||!SearchProduct) {
        return 'Product or User Not Found'
    }
    else{
        SearchProduct.likes.push(SearchPeople._id)
    }
}
RateProduct('Thomas','TV',5)
LikeProduct('Thomas','TV')
console.log(products);
console.log('==========================================================');