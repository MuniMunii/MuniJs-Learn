//No1 Declare empty Array
const emptyArray=[]
console.log(emptyArray);
//No2 Declare array with 5 element
const Array5=[12,14,32,12,45]
console.log(Array5);
//No3 find length of your array in Array 5
console.log(Array5.length);
//No 4 Untuk Mencari last index di sarankan untuk memakai function baru dengan cara var (Nama_variable2)=Nama_variable1.length-1
console.log(Array5[0]);
console.log(Array5[3]);
const lastIndex=Array5.length-1
console.log(Array5[lastIndex]);
//No 5
var mixedTypeArray=['Hello','Sir',21,243,'This is','Mixed','Array',21]
console.log(mixedTypeArray);
console.log(mixedTypeArray.length);
//No 5
const itCompanies=['Google','Amazon','Microsoft','Apple','IBM','Oracle','Facebook']
console.log(itCompanies);
//No 6
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
var lastIndexCompanies=itCompanies.length-1
console.log(itCompanies[lastIndexCompanies]);
//No 7 Kalo Ingin Mengprint Array Menggunakan method Join
console.log(itCompanies.join(', '));
//No 11 Menggunakan method map untuk membuat array baru yang Semua elemen akan berubah dan di bisa konversikan Memakai method tolowerCase/toUpperCase menggunakan =>(tanda Panah)
var lowerArray=itCompanies.map(itCompanies=>itCompanies.toUpperCase());
console.log(lowerArray.join(', '));
//No 12 untuk masalah no12 di anjurkan kondisi operasi perbandingan nya untuk if harus menggunakan strictly equality operator'==='jangan pakai'=='
function arrayCheck() {
    var itCompanies=['Google','Amazon','Microsoft','Apple','IBM','Oracle','Facebook']
    var arrayInput=document.getElementById('arrayInput').value;
    var arrayResult=document.getElementById('arrayResult');
    
    if (itCompanies.indexOf(arrayInput)===-1) {
        arrayResult.innerHTML='Array Does Not Exist';
    }
    else{
        arrayResult.innerHTML=`Index ${arrayInput} Exist`;
    }
}
//No 14 Blon Di temukan Solusi
// var stringCompanies=itCompanies.toString()
// var stringO=stringCompanies.includes('oo')
// console.log(stringO);
// console.log(stringCompanies);
// if (stringCompanies == 'oo') {
//     console.log();
// }

//No 15
console.log(itCompanies.sort());
//No 16
console.log(itCompanies.reverse());
//No 17
console.log(itCompanies.slice(3,7));
//No 18
console.log(itCompanies.slice(0,4));
//No 19
console.log(itCompanies.slice(3,4));
//No 20 Fungsi Shift Disini Untuk menghapus elemen array pertama 
itCompanies.shift();
console.log(itCompanies);
//No 21 Masalah Dan solusi yang kita dapat pada nomor ini adalah jika ingin menghapus array di bagian tengah dengancara membuar var baru dengan=(Array).length/2 habis itu menggunakan methode splice(Var yang tadi dibuat,1) satu yang ditujukan ini untuk mengetahui berapa elemen yang akan di hapus jika di ganti 2 berarti akan ada 2 elemen tengah yang dihapus
const middleComp=itCompanies.length/2
const midcomp=itCompanies.splice(middleComp,1)
console.log(midcomp);
console.log(itCompanies);
//No 22 Fungsi Pop untuk menghapus elemen yang ada di paling belakang 
itCompanies.pop()
console.log(itCompanies);
//No23 fungsi splice dengan memanggil array sendiri akan menghapus semua elemen yang ada
itCompanies.splice(itCompanies)
console.log(itCompanies);
//No24 masalah dan solusi yang di alami pada nomor ini jika ingin melakukan string paragraph ke array pertama kita boleh menghapus tandabaca terlebih dahulu dengan cara memakai regular expresion dan memakai replace (/[,.]/g,'') artinya [.,]untuk menghapus tanda baca titik dan tandakoma yang ada di bracket siku dan tambahkan /g yang artinya global atau bisa di artikan mencari semua yang sama dan di replace dengan kosong / ''.
// dan solusi kedua menggunakan function split setelah itu memanggil function array dan akan dijadikan menjadi array di setiap kata
let stringArray='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const removePunctuation=stringArray.replace(/[.,]/g,'')
const arraySplit=removePunctuation.split(' ')
let StringToArray=Array(arraySplit)
console.log(StringToArray);
console.log(StringToArray.length);
//No 25
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//Menambah Array Meat di Awal 
shoppingCart.unshift('Meat')
//Fungsi Push untuk menambah array di paling belakang
shoppingCart.push('Sugar')
//Solusi untuk menggantikan kata tea menjadi tea pertama menggunakan function map (item => (item.toLowerCase() === 'tea' ? 'GreenTea' : item))
//Maksudnya kita akan mengubah dulu nama semua item di array menjadi LowerCase abis itu kita menggunakan strictly equality operator === dengan tea dan kita memakai ternaryOperator jika benar maka akan diubah menjadi greentea dan jika salah akan tetap 
//Solusi ke 2
//untuk menghapuskan elemen Honey di array shoppingCart Kita memakai Function filter untuk membuat array baru yang memenuhi dengan elemen2 tersebut dan fungsi match untuk menyaring elemen yang tidak cocok dengan pola /honey/gi 
const newCart = shoppingCart
    .map(item => (item.toLowerCase() === 'tea' ? 'GreenTea' : item))
    .filter(item => !item.match(/honey/gi));
console.log(newCart);
console.log(shoppingCart);

//No 26 ada di Countries.js