// No 1
const emptySet=new Set()
console.log(emptySet);
// No 2
const emptySetNumber2=new Set()
for (let i = 0; i <= 10; i++) {
    emptySetNumber2.add(i)
}
// Kita dapat 11 Value
console.log(emptySetNumber2);

// No 3
// menghapus Value 0 yang ada di nomor 2 dan jadi 10 Value
emptySetNumber2.delete(0)
console.log(emptySetNumber2);

// No 4
// Menghapus semua Elemen
emptySetNumber2.clear()
console.log(emptySetNumber2);

// No 5
let newSetElement=new Set()
newSetElement.add('Schumann')
newSetElement.add('Schubert')
newSetElement.add('Liszt')
newSetElement.add('Mendhelssohn')
newSetElement.add('Prokofiev')
newSetElement.add('Grieg')
newSetElement.add('Ramji')
console.log(newSetElement);

// No 6 Part 1
let newMapElement=new Map();
newMapElement.set('Schumann','Kinderszenen')
newMapElement.set('Schubert','Standchen')
newMapElement.set('Liszt','Liebestraum')
newMapElement.set('Mendhelssohn','Lieder Ohne Worte')
newMapElement.set('Prokofiev','Dance Of Knight')
console.log(newMapElement);

// No 6 Part 2
const countriesMap=new Map()
const countries = ['Finland', 'Sweden', 'Norway']
for (const Country of countries) {
    let countChar=Country.length
    // Add Country To Map tidak usah pakai console.Log nanti hasil nya akan undefined
    countriesMap.set(Country,countChar)
}
console.log(countriesMap);

// No 7
// Union di JS itu artinya menggabungkan Elemen
// bisa cek google jika ingin tau lebih dalam tentang Union di JS/DataStructure
let unionC=[...newSetElement,...newMapElement]
let compareA=new Set(newSetElement)
let compareB=new Set(newMapElement)
let compareC=new Set(unionC)
console.log(compareC);

// No 8
// intersection disini di maksud mencari elemen yaang sama dalam 2 array yang berbeda
// dan fungsi set ini untuk tidak mengcopy elemen lagi jadi cuma yang unik saja
let compareAA=['Schumann','Schubert','Mendhelssohn'];
let compareBB=['Schubert','Prokofiev','Grieg'];
let compareBSet=new Set(compareBB);
// contoh nya ada seperti ini
let intersectionA=compareAA.filter(comparing=>compareBSet.has(comparing));
console.log(intersectionA);

// No 9
// Solusi disini
let filterLanguages=allCountries
// kita filter dulu object yang punya key languages
.filter(country=>country.languages)
// kita ambil properti languages nya
.map(country=>country.languages)
// kita satukan semua pakai concat menggunakan Array
.reduce((acc,country)=>acc.concat(country),[]);
// dan kita gunakan set agar tersaring dan tidak mengkopi languages dan hanya menampilkan yang unik saja
let filteredLanguages=new Set(filterLanguages);
// dan kita tampilkan ada berapa panjang nya menggunakan .size
console.log(filteredLanguages.size);

// No 10
// Masalah dan solusi nya
function mostSpokenLanguage(country,numSlice){
    // kita buat variable array untuk menyimpan data nanti
    let counts=[];
    // sama seperti di Nomor 9
    let filterLanguages=country
    .filter(country=>country.languages)
    .map(country=>country.languages)
    .reduce((acc,value)=>acc.concat(value),[]);
    // set Ini untuk menghilangkan duplikat/kopian
    let filteredLanguages=new Set(filterLanguages)
    // dan ini jadi kita akan mengiterasi kode unik di filtered languages tadi
    for (const languages of filteredLanguages) {
        // dan kita filter kode unik tadi yang sama dengan languages
        let filteringLanguages=filterLanguages.filter(lang=>lang===languages)
        // kita masukan object nya dengan languages tadi dan filteringLanguages.length tadi karna kita menghitung berapa banyak nya
        counts.push({languages:languages,Count:filteringLanguages.length})
    }
    // kita sort dari properti Count
    counts.sort((a,b)=>b.Count-a.Count)
    return counts.slice(0,numSlice)
}

console.log(mostSpokenLanguage(allCountries,10));