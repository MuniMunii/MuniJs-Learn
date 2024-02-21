// No 1
console.log('================Array=================');
let EmptyArray=[]
console.log(EmptyArray);
for (let i = 1; i < 6; i++) {
    EmptyArray.push(`Number: ${i}`)
}
// Search Length of your Arrays
let ArrayLength=EmptyArray.length
console.log(ArrayLength);
// Get First,Middle,Last Item of array
const FirstItem=EmptyArray[0]
const MiddleItem=EmptyArray[Math.floor(EmptyArray.length/2)]
const LastItem=EmptyArray[EmptyArray.length-1]
console.log(`FirstItem: ${FirstItem},MiddleItem: ${MiddleItem},LastItem: ${LastItem}`);

const MixedArrayData=[1,'aaa',2,'Muni',5,'Hello','Ramji']
const ItCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(ItCompanies.length);

const FirstItemCompanies=ItCompanies[0]
const MiddleItemCompanies=ItCompanies[Math.floor(ItCompanies.length/2)]
const LastItemCompanies=ItCompanies[ItCompanies.length-1]
console.log(`FirstItem: ${FirstItemCompanies},MiddleItem: ${MiddleItemCompanies},LastItem: ${LastItemCompanies}`);

ItCompanies.forEach(company=>{
    console.log(company.toUpperCase());
})
console.log(`${ItCompanies} Are big IT companies`);
const AmazonCompany=ItCompanies.find(company=>company.toUpperCase()==='AMAZON')
if (AmazonCompany) {
    console.log(ItCompanies.includes('Amazon'));
}
else{
    console.log('Not Founds');
}
// ngecek array dengan match
ItCompanies.map(Company=>{
    let CompanywithO=(Company.match(/o/gi)||[]).length
    if (CompanywithO>1) {
        console.log(`${Company} Companies with more one o's`);
    }
})

console.log(ItCompanies.sort());
console.log(ItCompanies.reverse());
console.log(ItCompanies.sort().slice(0,3));
console.log(ItCompanies.reverse().slice(0,3));
console.log(ItCompanies.slice(3,4));
// array sudah ter update jadi di ambil nya yang baru bukan array default jadi method ini bener
console.log(ItCompanies.shift());
// console.log(ItCompanies.splice(3,4));
console.log(ItCompanies.pop());
console.log(ItCompanies.splice());

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
    'Kenya',
  ]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(' '));

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
const HoneyIndex=shoppingCart.indexOf('Honey')
if (HoneyIndex>-1) {
    shoppingCart.splice(HoneyIndex,1)
}
const indexOfTea=shoppingCart.indexOf('Tea')
shoppingCart[indexOfTea]='Green Tea'
console.log(shoppingCart);

if(countries.includes('Ethiopia')){
    const indexOfEthiopia=shoppingCart.indexOf('Ethiopia')
    console.log(countries[indexOfEthiopia]='ETHIOPIA');
}
else{
    countries.push('Ethiopia')
}

if (webTechs.includes('Sass')) {
    console.log('Sass is preprocess CSS');
}
else{
    webTechs.push('Sass')
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const Fullstack=frontEnd.concat(backEnd)
console.log(Fullstack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 
const AgesSort=ages.sort
const MinAges=Math.min(...ages)
const MaxAges=Math.max(...ages)
const MedianAges=ages[ages.length/2]
const AverageAges=ages.reduce((a,b)=>a+b)/ages.length
const RangeAges=MaxAges-MinAges
const CompareValueMinAges=Math.abs(MinAges-AverageAges)
const CompareValueMaxAges=Math.abs(MaxAges-AverageAges)
console.log(CompareValueMinAges);

const FirstTenCountries=countries.slice(0,10)
const MiddleCountries=countries[Math.floor(countries.length/2)]
console.log(MiddleCountries);

let FirstHalf,SecondHalf
const CountriesLength=countries.length
const CountriesHalfLength=countries.length/2
if (CountriesLength % 2===1 ) {
    FirstHalf=countries.slice(0,CountriesHalfLength)
    SecondHalf=countries.slice(CountriesHalfLength)
}
else{
    FirstHalf=countries.slice(0,CountriesHalfLength + 1)
    SecondHalf=countries.slice(CountriesHalfLength + 1)
}
console.log(FirstHalf,SecondHalf);
console.log('=======================================');