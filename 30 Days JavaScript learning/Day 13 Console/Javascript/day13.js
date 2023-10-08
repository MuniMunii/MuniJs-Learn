// No 1 dan 2
// penjelasan console.table ini sederhana jadi mengubah array,object menjadi table di console
// Bermanfaat jika ingin mencari data karna ada fitur sort nya tinggal pencet key nya saja
console.table(countries)
let arrayName=['aaa','Ramzi']
console.table(arrayName)

// No 3 
// console.group ini menyimpan log2 yang ada di dalam console.groupEnd
// console.group('')Menggunakan parameter untuk meng organisir nya
console.group('countri')
console.log(countries);
console.groupEnd()

// No 4 
// console.assert ini jika expresi nya salah maka akan muncul string yang kita atur tadi
// jika masih kurang paham bisa cari2 di google untuk contoh nya
console.assert(10>2*10,'10 is not greater than 2*10')

// No 5
console.warn('You have been warned')

// No 6
console.error('Error there is no expression')

// No 7
console.time('for')
let odd=0
let even=0
for (let index = 1; index < 100; index++) {
    if (index %2 === 1) {
        odd++
    }
    else{
        even++
    }
}
console.log('Even Number=',even);
console.log('odd Number=',odd);
console.timeEnd('for')
// for Of
console.time('forofs')
let names=0
for (const Number of countries) {
    if (Number.name) {
        names++
    }
}
console.log(names);
console.timeEnd('forofs')
// Foreach
console.time('foreach')
let foreachcount=0
countries.forEach(element => {
    console.log(element.currency);
});
console.timeEnd('foreach')
// While
console.time('while')
let i=0
while(i<10){
    i++
}
console.log(i);
console.timeEnd('while')