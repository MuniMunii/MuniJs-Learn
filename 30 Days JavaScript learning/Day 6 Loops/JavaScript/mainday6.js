//No 1
for (let i = 0; i <= 10;i++) {
    console.log(i);
}
//No 1 While
console.log("While Looping");
// Variable i untuk while
let i=0;
while(i<=10){
    console.log(i);
    i++
}
//No 1 Do While
//variable it Untuk Do while
let it=0
console.log("Do While Looping");
do{
    console.log(it);
    it++
}while (it<=10) {
    
}

//No 2
console.log("Decrement Looping");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("While Decrement");
//No 2 While
while (i >= 0) {
    console.log(i);
    i--
}
//No 2 Do While
console.log("Do while Decrement");
do{
    console.log(it);
    --it
}while(it >= 0)

//No 3
console.log("No 3");
let n=10
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//No 4
function addButton(){
    const addNum=parseInt(document.getElementById('inputText').value);
    const result=document.getElementById('result');
    let output=' ';
// logika yang ada di For loop bersarang ini jadi pertama kita buat kondisi pertama dan buat variable pertama dulu yaitu i = 1 habis itu kita buat kondisi perbandingan nya i lebih kecil inputan angka yang ada di web dan tambahkan i++ increment setelah itu di dalam for pertama kita buat variable line= ' ' buat di jadikan simbol nanti,setelah itu kita buat loopan kedua dengan kondisi j = 1 jika j lebih kecil dari i; j++ akan di tambahkan /increment dan kita buat line dimasukan dengan simbol I setelah itu kita buat lagi yang variable atas output tadi kita samakan dengan line dan ditambahkan <br> agar menjadi kebawah.dan kita panggil variable output untuk melihat hasil nya
    for (let i = 1; i <= addNum; i++) {
        let line=''
        for(let j=1; j <= i ; j++){
            line += 'I'
        }
        output+=line + '<br>'
    }
    result.innerHTML=output;
}

//No 5
for (let  i = 1; i <= 10; i++) {
    console.log(`${i}*${i}=${i*i}`);
}

//No 6
console.log("Perkalian Kuadrat");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}=${i} , ${i}^2=${i*i} , ${i}^3=${i*i*i}`);
}

//No 7
// Loop Bilangan Bulat Solusi Ini Menggunakan operator percabangan
console.log("Bilangan Bulat dari 1 sampai 100");
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0){
        console.log(i);
    }
}

//No 8 
// Loop Bilangan ganjil
console.log("Bilangan Ganjil dari 1 sampai 100");
for (let i = 0; i <=100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

//No 9
// Loop Bilangan Prima
//Logika di Loop Ini
console.log("Bilangan Prima");
// Pertama kita buat for awalan
for (let num = 0; num <= 100; num++) {
    // operator percabangan awal jika num lebih kecil dari 1 akan di teruskan
    if(num<=1)continue;
    // kita buat variable isPrime ini dengan value True
    let isPrime=true;
    // kita buat loop ke dua dengan kondisi variabel i awal dengan nilai 2 dan jika i kurang sama dengan nilai kuadrat dari num dan kita tambahkan increment,abis itu kita buat operator percabangan dengan kondisi jika num apakah num akan habis jika di bagi oleh variable i jika habis berarti variable isPrime=salah dan akan break, dan loop ini akan di teruskan sampai nilai 100 nya abis
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i===0) {
            isPrime=false;
            break;
        }
    }
    // Dan percabangan ini akan mengeprint hasil jika Angka isPrime ini True
    if (isPrime) {
        console.log(num);
    }
}

//No 10
//Solusi untuk Nomor 10 ini pertama kita buat varriable array dengan elemen kosong
const arrayNum=[] 
// Kita buat looping dari 1 sampai 100 dan kita pakai function push agar value nya masuk ke dalam array
for (let i = 1; i <= 100; i++) {
    arrayNum.push(i)
}
// Untuk cek masuk/tidaknya
console.log(arrayNum);
// dan kita pakai function reduce untuk menambahkan satu persatu elemen nya dengan mengubah koma menjadi + dan di kasi nilai 0
var sum=arrayNum.reduce((a,b)=> a+b ,0 );
console.log(sum);

//No 11 
//Logika yang ada di nomor ini pertama kita buat 2 variable dengan value berisi 0 setelah itu kita buat perulangan dengan oeparator percabangan di dalamnya pertama percabangan if dengan kondisi i % 2==0 karna menghasilkan bilangan genap maka hasil perulangan yang mendapatkan nilai genap akan di tambahkan semua dan else seperti itu juga tapi dia dengan bilangan ganjil
// Note += Operasi ini adalah operasi penggabungan/penugasan
let evenNum=0;
let oddNum=0;
for (let i = 0; i <= 100; i++) {
    if (i % 2==0) {
        evenNum +=i
    }
    else{
        oddNum +=i
    }
    
}
console.log(evenNum);
console.log(oddNum);

//No 12 logika yang ada di nomor ini
//pertama kita buat variable array dengan elemen kosong
const randomNumber=[]
for (let i = 1; i <=5; i++) {
    //kita buat variable baru dengan function floor agar angka yang dihasilkan adalah integer dan kita masukan lagi function random*10 jadi hasil yang di hasilkan dari 0-10
    const randomNum=Math.floor(Math.random()*10)
    //abis itu kita gunakan function push agar dimasukan lagi ke dalam array
    randomNumber.push(randomNum)
}
// kita gunakan funtion join agar menjadi string
console.log(randomNumber.join(''));

const randomNumberWhile=[]
while (randomNumberWhile.length<5) {
    const randomNum=Math.floor(Math.random()*10)
    if(!randomNumberWhile.includes(randomNum)){
        randomNumberWhile.push(randomNum)
    }
}
console.log(randomNumberWhile.join(''));

//No 13
// Logika di nomor ini pertama kita buat variable dengan semua huruf alphabet dan angka dan buat variable kosong
const characters='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
let randomid=''
for (let i = 0; i < 6 ; i++) {
    // Jadi kita pakai function math random*variable characters.length jadi dia akan mengambil huruf/angka random yang ada di variable characters
    let randomNumChar=Math.floor(Math.random()*characters.length);
    // Abis itu kita gabungkan dengan variable kosong tadi dengan randomNumChar max 6 Characters
    randomid+=characters[randomNumChar]
}
console.log(randomid);

//No 14
let randomid2=''
for (let i = 0; i < 20; i++) {
    let randomNumChar2=Math.floor(Math.random()*characters.length);
    randomid2+=characters[randomNumChar2]
}
console.log(randomid2);

//No 15
let randomHexa='#'
const hexaNum='123456789ABCDEF'
for (let i = 1; i <= 6; i++) {
    let randomHexachar=Math.floor(Math.random()*hexaNum.length)
    randomHexa+=hexaNum[randomHexachar]
}
console.log(randomHexa);

//No 15 
// Logika yang akan kita bahas untuk random rgb number ini pertama kita buat per ulangan
let RGB=''
//kita Buat perulangan sampai 3 kali
for (let i = 0; i < 3; i++) {
    // dan buat random *256 karna angka rgb ada sampai range 256
    let randomRGB=Math.floor(Math.random()*256)
    RGB+=randomRGB
    // Jika perulangan ada lebih dari 2 kali maka akan di tambahkan koma agar rapih
    //Kita juga bisa memakai ${RGB} 3 kali jika gak ingin memakai percabangan
    if (i < 2) {
        RGB+=','
    }
}
console.log(`Rgb(${RGB})`);

//No 16
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
//Kita gunakan variable[]agar bisa mengakses 1 per 1 elemen dan mengubah nya menjadi upper case
let countriesUp=[]
for (let i = 0; i < countries.length; i++) {
    const country=countries[i]
    const countriesUpp=country.toUpperCase();
    countriesUp.push(countriesUpp)
}
console.log(countriesUp);

//No 17 Logika nya sama Seperti yang ada di Nomor 16
let countriesLength=[]
for (let i = 0; i < countries.length; i++) {
    const country=countries[i]
    const countriesLength1=country.length
    countriesLength.push(countriesLength1)
}
console.log(countriesLength);

//No 18 Logika di nomor ini 
//Pertama kita buat variable array baru
let arrayCon=[]
for (let i = 0; i < countries.length; i++) {
    //buat variable country yang nilai nya di ambil dari array countries[i] jangan lupa untuk pakai[i] agar mengakses elemen 1 1
    const country=countries[i];
    // buat variable baru untuk mengambil length dan memotong kata 3 pertama
    const countriesLength=country.length;
    const countriesSlice=country.slice(0,3);
    //gunakan push untuk memasukan array baru ke dalam arraycon dan tambahkan variable2 length dan potongan
    arrayCon.push([country,countriesSlice,countriesLength]);
}
console.log(arrayCon);

//No 19
//Solusi yang ada di nomor ini 
let countriesWithLand=[]
for (let i = 0; i < countries.length; i++) {
    // Akses terlebih dahulu array countries nya
    let country=countries[i]
    // jadikan semua elemen lowercase agar mudah terbaca program
    let countryLower=country.toLowerCase()
    // Gunakan Includes untuk mencari kata yang di tujukan
    let countryLand=countryLower.includes('land')
    // dan gunakan percabangan jika ada negara yang mengandung kata land akan di push/dimasukan kedalam array
    if (countryLand > 0) {
        countriesWithLand.push(country)
    }
    else{
        console.log(`" 'All these countries ${country} are without land' "`);
    }
}
console.log(countriesWithLand);

//No 20 Solusi dan logika nya sama dengan yang ada di nomor 19
let countriesWithIA=[]
for (let i = 0; i < countries.length; i++) {
    const country=countries[i]
    const countryLower=country.toLowerCase()
    const countryIA=countryLower.includes('ia')
    if (countryIA>0) {
        countriesWithIA.push(country)
    }
    else{
        console.log(`'These are countries ${country} ends without ia'`);
    }
}
console.log(countriesWithIA);

//No 21 logika yang ada di nomor ini 
let countriesMax=[];
let MAX=0;
for (let i = 0; i < countries.length; i++) {
    const country=countries[i]
    //kita buat variable yang akan di isi oleh country.length
    const countryLength=country.length
    // kita buat percabangan dengan kondisi jika length lebih besar dari variable MAX=0 maka max akan disamakan dengan negara yang panjang  dan array countriesMax akan di isi oleh country dengan negara yang index terpanjang
    if (countryLength > MAX ) {
        MAX=countryLength
        countriesMax=country;
    }
}
console.log(countriesMax);

//No 22 Logika yang ada di nomor ini sama dengan nomor2 sebelum nya yang membedakan hanya di percabangan dengan kondisinya yang berbeda disini kita gunakan strictly equality operator/gunakan equality biasa untuk mencari negara yang hanya menggunakan 5 kata
let countriesWith5Let=[]
for (let i = 0; i < countries.length; i++) {
    const country=countries[i]
    const countryLength=country.length
    if (country.length === 5) {
        countriesWith5Let.push(country)
    }
}
console.log(countriesWith5Let);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//No 23 Solusinya sama dengan seperti Nomor 21
let longestWord=[]
let MAXword=0
for (let i = 0; i < webTechs.length; i++) {
    let webTech=webTechs[i]
    let webLength=webTech.length
    if (webLength > MAXword) {
        MAXword=webLength;
        longestWord=webTech
    }
}
console.log(longestWord);

//No 24 solusinya sama dengan seperti No 18
let newWebTechs=[]
for (let i = 0; i < webTechs.length; i++) {
    let webTech=webTechs[i]
    let webLength=webTech.length
    newWebTechs.push([webTech,webLength])
}
console.log(newWebTechs);

//No 25
for (const MERN of mernStack) {
    console.log(MERN);
}

//No 26
let webArray=[]
for (let webTech of webTechs) {
    webArray.push(webTech)
}
console.log(webArray);

//No 27
//logika dan solusi yang ada di nomor ini adalah pertama kita buat variable buah
let nameFruits=['banana', 'orange', 'mango', 'lemon']
// dan buat array dengan elemen kosong untuk menyimpan elemen reversed
let reverseFruit=[]
// perulangan ini pertama buat iterasi dari nameFruits.length-1 dan kondisi perulangan jika i lebihsamabesar dari 0 maka iterasi akan decrement
for (let i = nameFruits.length-1; i >= 0; i--) {
    // dan kita push elemen namefruits[i] kedalam reversfruit array reverse tadi
    reverseFruit.push(nameFruits[i])
}
console.log(reverseFruit);

//No 28 logika dan solusi yang ada di nomor ini menggunakan for bersarang
// logika nya hampir mirip dengan No 4
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
// pertama kita buat iterasi dari objeck fullstack
for (const fullStackCopy of fullStack) {
    // lalu kita buat for kedua dengan iterasi dari object iterasi pertama
    for (const stack of fullStackCopy) {
        console.log(stack);
    }
}

//No 30
let conMernWebArray=webTechs.concat(mernStack)
let mernWebArray=[]
mernWebArray.push(conMernWebArray)
for (const mernWebArraySort of mernWebArray) {
    console.log(mernWebArraySort.sort());
}

//No 31
let countryWithLand=[]
for (let i = 0; i < countriesNew.length; i++) {
    let country=countriesNew[i];
    let countryLower=country.toLowerCase();
    let countryInclude=country.includes('land')
    if (countryInclude > 0) {
        countriesWithLand.push(country)
    }
}
console.log(countriesWithLand);

//No 32
let hightestLand=[]
let maxland=0
for (let i = 0; i < countriesNew.length; i++) {
    let country=countriesNew[i]
    if (countriesNew.length>maxland) {
        maxland=country;
        hightestLand.push(country)
    }
}
console.log(hightestLand);

//No 33
let fourLetCountry=[]
for (let i = 0; i < countriesNew.length; i++) {
    let country=countriesNew[i];
    let countryLength=country.length
    if (countryLength == 4) {
        fourLetCountry.push(country)
    }
}
console.log(fourLetCountry);

//No 34
let twoOrMoreLetCountry=[]
for (let i = 0; i < countriesNew.length; i++) {
    let country=countriesNew[i]
    if (country.length >= 2 ) {
        twoOrMoreLetCountry.push(country)
    }
}
console.log(twoOrMoreLetCountry);

//No 35
let reversedAndUpCountries=[]
for (const countries of countriesNew) {
    reversedAndUpCountries.push(countries.toUpperCase())
}
console.log(reversedAndUpCountries.reverse());