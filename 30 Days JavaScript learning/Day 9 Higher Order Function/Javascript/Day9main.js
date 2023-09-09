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