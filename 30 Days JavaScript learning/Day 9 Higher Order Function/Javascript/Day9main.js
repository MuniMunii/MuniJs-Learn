const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// No 3
const printCountriesForEach=countries.forEach(country=>console.log(country));
console.log(printCountriesForEach);
//No 4
const printNamesForEach=names.forEach(name=>console.log(name))
console.log(printNamesForEach);
//No 5
const printNumberForEach=numbers.forEach(num=>console.log(num))
console.log(printNumberForEach);
// No 6
const countriesUpperCase=countries.map(country=>country.toUpperCase())
console.log(countriesUpperCase);
//No 7
const countriesLength=countries.map(country=>country.length);
console.log(countriesLength);
//No 8
const numberSquare=numbers.map(num=>num*num);
console.log(numberSquare);
//No 9
const upperCaseName=names.map(name=>name.toUpperCase())
console.log(upperCaseName);
//No 10
const priceProduct=products.map(product=>{
    if(product.price===''||isNaN(product.price)||typeof product.price=== 'string'){
        return{product:product.product, price:'Empty'}
    }
    else{
        return{product:product.product,price:product.price}
    }
})
console.log(priceProduct);
//No 11
const countryWithLand=countries.filter(country=>country.includes('land'))
console.log(countryWithLand);
//No 12
const contryWithSixLength=countries.filter(country=>country.length===6);
console.log(contryWithSixLength);
//No 13
const countryWithMoreSix=countries.filter(country=>country.length>6);
console.log(countryWithMoreSix);
//No 14
const countryStartWithE=countries.filter(country=>country.startsWith('e'))
if (countryStartWithE.length===0) {
    console.log('there is no country that starts with E');
}
else{
    console.log(countryStartWithE);
}
//No 15
const priceWithValue=products.filter(product=>typeof product.price==='number');
console.log(priceWithValue);
// No 16
function getStringList(array){
    let stringArray=array.filter(item=>typeof item==='string')
    if (stringArray.length===0) {
        return 'there are no String in this list'
    }
    return stringArray
}
const varArray=[1,'2',3,'4']
console.log(getStringList(varArray));

// No 17
const sumNumber=numbers.reduce((a,b)=>a+b)
console.log(sumNumber);

// No 18
countries.unshift('Estonia')
const countryConcate=countries.reduce((acc,country,index)=>{
    if(index===countries.length-1){
        return `${acc} and ${country}is north european country`
    }
    else{
        return`${acc} ${country}`
    }
},'')
console.log(countryConcate);

//No 19
const someCountries7Let=countries.some(country=>country.length>7)
console.log(someCountries7Let);

//No 20
const everyCountriesWithLand=countries.every(country=>country.includes('land'))
console.log(everyCountriesWithLand);

// No 23
const findSixLetcountries=countries.find(country=>country.length===6)
console.log(findSixLetcountries);

//No 24
const findIndexSixLetCountry=countries.findIndex(country=>country.length===6)
console.log(findIndexSixLetCountry);

//No 24
const findNorway=countries.findIndex(country=>country==='Norway')
if (findNorway !== -1) {
    console.log(`Norway is at Index Number ${findNorway}`);
}
else{
    console.log('There is no norway in countries Array');
}
console.log(countries);

// No 25
const findRussia=countries.findIndex(country=>country==='Russia')
if (findRussia !== -1) {
    console.log(`'Russia is at index Number ${findRussia}'`);
}
else{
    console.log('There is no russia in countries array');
}

// No 26
const filterPrice=products.filter(price=>typeof price.price==='number')
console.log(filterPrice);
const sumPrice=filterPrice.reduce((total,value)=>total+value.price,0)
console.log(sumPrice);

// No 27
const reduceCallback=products.reduce((total,price)=>{
    if (typeof price.price==='number') {
        return total+price.price
    }
    else{
        return total
    }
},0)

console.log(reduceCallback);

// No 28
function categorizeCountries(letter){
    let findCountry=countries.filter(country=>country
        .toLowerCase()
        .includes(letter));
    if (findCountry.length===0) {
        return `There is no country that includes this '${letter}' letter`
    }
    return findCountry
}
console.log(categorizeCountries('land'));

// No 29
function startLetter(letter){
    const findCountry=countries.filter(country=>country
        .toLowerCase()
        .startsWith(letter));
    if (findCountry.length===0) {
        return `There is no country that starts with '${letter}'`
    }
    return {
        country:findCountry,
        count:findCountry.length
    }
}
console.log(startLetter('f'));

// No 31
function tenFirstCountries() {
    const tenCountry=allCountries
    .sort()
    .slice(0,10);
    return tenCountry
}
console.log(tenFirstCountries());

// No 32
function lastTenCountries() {
    const tenCountry=allCountries
    .reverse()
    .slice(0,10);
    return tenCountry
}
// console.log(lastTenCountries());

// No 33 Sort Name
const sortCountries=allCountries.sort().slice(0,10)
console.log(sortCountries);

// No 33 capital
const sortCapital=allCountries
.sort((a,b)=>{
    if (typeof a.capital!=="string"||a.capital==='') {
        return 1
    }
    else if(typeof b.capital1=='string'||b.capital===''){
        return -1
    }
    return a.capital.localeCompare(b.capital)
})
.slice(0,10)

// No 33 Sort Population
const sortPopulation=allCountries.sort((a,b)=>b.population-a.population).slice(0,10)
console.log(sortCapital,sortCountries,sortPopulation);

// No 34
// Masalah dan penjelasan di nomor ini
function mostSpokenLanguage(country,numSlice){
    // pertama kita filter dulu object country yang ada key languages
    const filterLanguages=country
    .filter(country=>country.languages)
    // dan method map ini mengambil properti array dari key languages
    .map(country=>country.languages)
    // dan gunakan method reduce untuk satukan semua semua array languages tadi yang sudah di saring
    .reduce((acc,lang)=>acc.concat(lang),[])
    // kita gunakan lagi reduce untuk menyimpan berapa banyak properti yang tersebut
    const languagesCount=filterLanguages.reduce((counts,languages)=>{
        // kita hitung semua languages nya
        // jadi kita akses count[languages]. dan maksud dari (counts[languages]||0)+1
        // jadi jika ada properti languages di object count ada yang undefined maka expresi nya akan mengembalikan nilai 0 dan +1 untuk menambahkan ke object count
        // [ini itu Kunci contoh]=[Name,Age] contoh lagi age=30 nah age nya itu keys jadi di dalem [languages] languages nya yang jadi key dan count jadi angka nya
        counts[languages]=(counts[languages]||0) + 1;
        return counts;
        },{})
        // dan disini kita ambil kunci yang ada variable languagesCount 
        // dan kita gunakan map untuk di jadikan object
    const languagesKeys=Object.keys(languagesCount).map(languages=>({
        // key languages tadi
        languages,
        // dan ini jumlah languages yang ada di languagesCount
        count:languagesCount[languages]
    }))
    languagesKeys.sort((a,b)=>b.count-a.count)
    return languagesKeys.slice(0,numSlice)
}
console.log(mostSpokenLanguage(allCountries,10));

// No 35
function populationSort(country,numSlice) {
    const filterCountry=allCountries
    .filter(country=>country.population)
    .map(country=>({
        country:country.name,
        Population:country.population
    }))
    const conCountry=filterCountry.sort((a,b)=>b-a)
    return conCountry.slice(0,numSlice)

}
console.log(populationSort(allCountries,10));

// No 36
const ages =[31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics={
    count:function(Age){
        let countAge=Age.length
        return countAge
    },
    Sum:function(Age){
        let sumAge=Age.reduce((a,b)=>a+b,0)
        return sumAge;
    },
    Min:function(Age){
        // Kita pakai spread operator agar bisa membaca semua elemen di array
        // kalo gak pake spread operator hasil nya Nan karna cuma bisa nge baca 1 elemen gak semuanya
        let minAge=Math.min(...Age)
        return minAge
    },
    Max:function(Age){
        let maxAge=Math.max(...Age)
        return maxAge
    },
    Range:function(Age) {
        return this.Max(Age)-this.Min(Age)
    },
    Mean:function(Age){
        let MeanData=Math.floor(this.Sum(Age)/Age.length)
        return MeanData
    },
    Median:function(Age){
        let SortAge=Age.sort((a,b)=>a-b);
        if (SortAge.length % 2 ===0) {
            // Number 1 ini bagian di kiri yang akan menghasilkan angka genap
            let number1=SortAge([SortAge.length/2]-1);
            // dan ini angka ganjil
            let number2=SortAge(SortAge.length/2);
            let Result=(number1-number2)/2;
            return Result
            
        }else{
            // ini jika saat di bagi hasil nya rata di bagian kiri dan kanan nya
            return SortAge[Math.floor(SortAge.length/2)]
        }
    },
    Mode:function(Age){
        // kita buat object kosong terlebih dahulu
        let objectMap={};
        // ini angka awal
        let initialized=0;
        // dan ini juga hanya untuk penambahan nama di object nanti
        let Mode;
        // kita pakai forEach untuk mengiterasi Satu per satu 
        Age.forEach((value)=>{
            // jika value yang ada di objectMap maka akan di tambah 1
            objectMap[value]=(objectMap[value]||0)+1;
            // dan jika value nya lebih besar dari initilized tadi
            if (objectMap[value]>initialized) {
                // akan meng update hasil initialized yang 0 tadi di ubah dari objectmap[vakue]
                initialized=objectMap[value];
                // dan value kita ganti menjadi Mode
                Mode=value
            };
        })
        return {Mode,count:initialized}
    },
    Variation:function(Age){
        const Square=Age.map(value=>Math.pow(value-this.Mean(Age), 2))
        const variation=Square.reduce((acc,value)=>acc+value,0)/Age.length
        return variation
    },
    freqDist:function(Age){
        let objectCurrent={}
        Age.forEach(value=>{
            objectCurrent[value]=(objectCurrent[value]||0)+1;
        })
        return objectCurrent
    },
    // Cara ke Dua
    // masalah di nomor ini
    freqDistArray:function(Age){
        let arrayCurrent=[]
        Age.forEach(element => {
            // callback disini bertujuan untuk memeriksa apakah elemen kedua [1] dari tuple array current sama seperti elemen
            // jika iya nanti elemen akan di simpan di variable ini
            // dan jika tidak ada/copy/-1 maka tidak akan disimpan
            const indexFreq=arrayCurrent.findIndex(item=>item[1]===element);
            // expresi ini maksud nya
            // jika indexFreq Bukan Gakada/copy/-1 maka akan count tadi di increment
            if (indexFreq !== -1) {
                arrayCurrent[indexFreq][0]++;
            }
            else{
                // jadi 1 ini seperti initialisasi awal jika elemen ada maka 1 akan di increment
                // yang di kondisi ada if
                arrayCurrent.push([1,element])
            }
        });
        // jika ingin menyortir Array di dalam array gunakan [] misal
        // [[age,Name]] kalo ingin nyortir age brati di index 0 berarti a[0]-b[0] dan seterusnya
        arrayCurrent.sort((a, b) => Number(a[1]) - Number(b[1]));
        return arrayCurrent;
    },
    Desciption:function(Age){
        console.log(`
        Length= ${this.count(Age)}\n`+
        `Sum= ${this.Sum(Age)}\n`+
        `Min= ${this.Min(Age)}\n`+
        `Max= ${this.Max(Age)}\n`+
        `Mean= ${this.Mean(Age)}\n`+
        `Median= ${this.Median(Age)}\n`+
        `Mode= ${JSON.stringify(this.Mode(Age))}\n`+
        `Variation= ${this.Variation(Age)}\n`+
        `freqDist=${JSON.stringify(this.freqDist(Age))}\n`+
        `freqDistArray=\n${JSON.stringify(this.freqDistArray(Age))}`);
        
    }
}


console.log(statistics.freqDistArray(ages));
console.log(statistics.freqDist(ages));
console.log(statistics.count(ages));
console.log(statistics.Sum(ages));
console.log(statistics.Min(ages));
console.log(statistics.Max(ages));
console.log(statistics.Range(ages));
console.log(statistics.Mean(ages));
console.log(statistics.Median(ages));
console.log(statistics.Mode(ages));
console.log(statistics.Variation(ages));
console.log(statistics.Desciption(ages));