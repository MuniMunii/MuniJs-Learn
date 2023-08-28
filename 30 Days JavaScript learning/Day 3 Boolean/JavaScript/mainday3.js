let firstname='Muni',
lastname=10,
country='Indonesia',
city='Depok',
age=18.29,
married='NotMarried';
//No1
console.log(typeof firstname ,'\n',typeof age);
//No2
console.log(typeof firstname == typeof lastname);
//No3
console.log("Operational pembandingan");
console.log(age == parseInt(age)); // False Karna Var Age awal float dan dibandingkan oleh age yang sudah di casting jadi integer
// No4
let num4=4
let num3=3
let num4c='4'
let num3c='3'
let num41=num4 > num3
let num42=num4 >= num3
let num43=num4 < num3
let num44=num4 <= num3
let num45=num4 = num4
let num46=num4 == num4
let num47=num4 === num4
let num48=num4 != num4
let num49=num4 != num4c
let num50=num4 !== num4c
let num51=num4 == num4c
let num52=num4 === num4c
console.log(`hasil dari num4 > num3= ${num41}`);
console.log(`hasil dari num4 >= num3= ${num42}`);
console.log(`hasil dari num4 < num3= ${num43}`);
console.log(`hasil dari num4 >= num3= ${num44}`);
console.log(`hasil dari num4 = num4= ${num45}`);
console.log(`hasil dari num4 == num4= ${num46}`);
console.log(`hasil dari num4 === num4= ${num47}`);
console.log(`hasil dari num4 != num4= ${num48}`);
console.log(`hasil dari num4 != num4c= ${num49}`);
console.log(`hasil dari num4 >== num4c= ${num50}`);
console.log(`hasil dari num4 == num4c= ${num51}`);
console.log(`hasil dari num4 === num4c= ${num52}`);
console.log('Jargon'.length == 'python'.length); //harus pakai ' ' kalo mau mengukur length String di dalam Log
//No5
console.log("operator conditional dan operator logical");
console.log("Operator AND &&");
console.log(4 > 3  &&  10 < 12);
console.log(4 > 3  &&  10 > 12); // 'false' karena value yang dihasilkan tidak sama 4 lebih besar dari 3 tapi 10 tidak lebih besar dari 12 karena ini operator AND value kedua harus sama agar menghasilkan hasil TRUE
console.log("Operator OR ||");
console.log(4 > 3  ||  10 < 12);
console.log(4 > 3  ||  10 > 12); //'True' Karena ini Operator OR jadi jika salah satu benar maka akan menghasilkan hasil true
console.log("Operator Negates");
console.log(!(4>3)); //'False' karna ini operator negates jadi akan menghasilkan hasil yang berbeda /sebalikan seperti contoh let lightOn = !LightOff akan menghasilkan false atau let isMarried= !false akan menghasilkan Nilai true
console.log(!(4<3));
console.log(!false);
console.log(!(4<3));
console.log(!(4 < 3 && 10 < 12));
console.log(!(4 < 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('Jargon'.match('on') && 'python'.match('on')));
//No7
console.log("Date");
const now=new Date()
console.log(`Tahun Sekarang ${now}`);
console.log(now.getMonth()); //(0-11) Karena januari ada di bulan 0
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
const now1970=new Date(1)
console.log(now1970);
//No8-11
console.log('Excercise 2 math Problem');
console.log('Area of triangle');
const base=20
const height=10
const areatri=0.5*base*height
console.log(`Hasil Area Perhitungan Segitiga = ${areatri}`);
console.log('Area of rectangle');
const length=20
const width=32
const arearec=length*width
const perimeterrec=2*(length+width)
console.log(`Hasil perhitungan area persegi panjang ${arearec} dan perimeternya adalah ${perimeterrec}`);
console.log('Area Of circle and the circumference');
const pi=3.14
const ruas=12
const ruascir=pi * ruas * ruas
const circum=2*pi*ruas
console.log(`Hasil perhitangan lingkaran ruas ${ruascir} dan area keseluaruhan lingkaran ${ruascir}`);
//No12-14
let name1='Miii'
let fullname=name1.length > 7
    ? console.log("Name Too long")
    : console.log("Name Too Short");

let first='Miii'
let last='mun'
let fullname2=first.length > last.length
    ? console.log("Nama depan lebih panjang dari pada nama belakang")
    : console.log("Nama belakang lebih panjang dari pada nama depan");

const yourage=250
const myage=25
const allage=yourage-myage
const aging=myage<yourage
? console.log(`Kau masi jauh umurnya butuh ${allage} tahun agar bisa seusia`)
: console.log("Kau lebih tua");

const birth1=1990
const birthpls=2023-birth1
const birthplsall=birthpls > 18
? console.log(`You are ${birthpls} old and you can drive`)
: console.log("Sorry you cant drive");
// Contoh 2
const birth2=2012
const birthpls1=2023-birth2
const birthalls=18-birthpls1
const births=birthpls1 > 18
? console.log(`You are old enough to drive`)
: console.log(`Sorry you are ${birthpls1} under 18 you need ${birthalls} more ages to drive`);

// Excercise 3
// Date Properties/methods

const newdates=new Date()
const newyears=newdates.getFullYear()
const newmonth=newdates.getMonth()
const newdays=newdates.getUTCDate()
console.log(`tanggal Saat Ini Tahun ${newyears} Bulan ${newmonth} Hari ${newdays}`);
