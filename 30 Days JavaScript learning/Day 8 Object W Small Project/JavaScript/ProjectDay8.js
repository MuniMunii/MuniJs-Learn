const usersShop = [
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
    password: '1234',
    createdAt:'08/01/2020 10:00 AM',
    isLoggedIn: false
},
];
const products = [
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
// Masalah dan Solusi di Function ini
function signInWeb() {
let Username=document.getElementById('Username').value;
let Password=document.getElementById('password').value;
let Result=document.getElementById('resultSignIn');
let existUser=usersShop.find(usersShop=>usersShop.username===Username);
// Ini di masalah debug untuk ngecek tadi masalah awal variable Password object nya unidentified
// ternyata ada kesalahan typo pada memasukan Id nya
// console.log(`existUser.password: "${existUser.password}"`);
// console.log(`Password: "${Password}"`);
if(existUser){
    if (existUser.password===Password) {
        existUser.isLoggedIn=true
        Result.innerHTML='Successfully Login'
        console.log(Array.from(usersShop.values()));
    }
    else{
        Result.innerHTML='Password is Wrong'
    }
}
else{
    Result.innerHTML='User Not Found'
}
}

// No 14 Bonus
function LogoutWeb(){
let Username=document.getElementById('Username-Logout').value;
let Result=document.getElementById('ResultLogout');
let existUser=usersShop.find(user=>user.username===Username);
if(existUser){
    Result.innerHTML="Succesfully Log Out"
    existUser.isLoggedIn=false
    console.log(Array.from(usersShop.values()));
}
else{
    Result.innerHTML='User not found'
}
}

// No 14 Bonus
// Masalah dan Solusi Di Nomor Ini
function rateWeb(productName){
    // Pertama kita buat ini rating di web agar seperti di iklan@
let initialRating=3.5
// fungsi text content ini untuk mengubah konten yang ada di html
document.getElementById('numID').textContent=initialRating
let Username=document.getElementById('Userrate').value;
let Rate=parseInt(document.getElementById('Rateweb').value);
let Result=document.getElementById('resultRateWeb');
let resultAverage=document.getElementById('resultAverageWeb');
let existUser=usersShop.find(user=>user.username===Username);
// Kita pakai parameter buat menemukan product nya
let findProduct=products.find(product=>product.description===productName);
if (existUser) {
    // Ini jika user.login nya false maka akan di suruh login dulu
    if(!existUser.isLoggedIn){
        Result.innerHTML="You must login first"
    }
    else{
        //Ini kondisi dimana findproduct.rating.some(product.userId dan user dari usershop._id jika sama maka)
        //akan di jalankan kondisi nya , kita pakai ! jadi Jika yang blon ada id yang ada di rating akan di jalankan jika sudah ada maka tidak akan di jalankan
        if(!findProduct.ratings.some(product=>product.userId===existUser._id)){
            if(Rate >= 1||Rate <= 5){
            findProduct.ratings.push(
            {userId:existUser._id,rate:Rate}
            )
            console.log(Array.from(products.values()));
            Result.innerHTML='thank you for the rating'
        }
        Result.innerHTML='pls Rate Between 1-5'
    }
    Result.innerHTML="You can only rate once"
}
}
else{
Result.innerHTML='User Not Found'
}

if (!findProduct.ratings||findProduct.ratings.length===0) {
    resultAverage.innerHTML='Rating Is Not available'
}
else{
    let sumRating=findProduct.ratings.reduce((total,value)=>{
    console.log('Value'+value.rate);
    return total+value.rate},0);
    console.log('sumRating=',sumRating);
    const average=sumRating/findProduct.ratings.length
    // fungsi Tofixed(2) ini maksud nya jika angka nya 3,26726 maka akan jadi 3,26 jadi hanya 2 angka desimal saja yang di tampilkan
    document.getElementById('numID').textContent='Average Rating: ' + average.toFixed(2)+'/5';
}
}