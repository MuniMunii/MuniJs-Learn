console.log('===========================function=====================');
function Name(FirstName,LastName) {
    return `My name is ${FirstName} ${LastName}`
}
console.log(Name('Ramzi','Akbar'));

function SumTwoNumber(first,last) {
    return first+last
}
console.log(SumTwoNumber(2,3));
function AreaOfCircle(Number) {
    const Pi=Math.PI
    const Result=Pi*Number*Number
    return Result.toFixed(2)
}
console.log(AreaOfCircle(10));

const getCelsiusConvertFahrenheit=document.getElementById('celsius-checker')
getCelsiusConvertFahrenheit.addEventListener('input',function(){
    let Celsius=getCelsiusConvertFahrenheit.value
    const getCelsiusResult=document.getElementById('celsius-result')
    let Fahrenheit=(Celsius*9/5)+32
    if (isNaN(Celsius)||Fahrenheit===32) {
        getCelsiusResult.style.visibility='hidden'
    }
    else{
        getCelsiusResult.innerHTML=`${Fahrenheit} Fahrenheit`
        getCelsiusResult.style.visibility='visible'
    }
})
const getBMIChecker=document.getElementById('bmi-checker')
getBMIChecker.addEventListener('click',function(){
    let Weight=parseInt(document.getElementById('bmi-weight').value)
    let Height=parseInt(document.getElementById('bmi-height').value)
    let getBMIResult=document.getElementById('bmi-result')
    const HeightToCM=Height/100
    let BMI=Math.floor(Weight/(HeightToCM*HeightToCM))
    console.log(BMI);
    if (!typeof Weight==='number'||!typeof Height==='number'||isNaN(Weight)||isNaN(Height)||isNaN(BMI)) {
        getBMIResult.innerHTML='Input The Correct Number'
    }
    else if(BMI < 18.5){
        getBMIResult.innerHTML='You Are Underweight'
        
    }
    else if(BMI <= 24.9){
        getBMIResult.innerHTML='You Are under Normal Condition'
    }
    else if(BMI <= 29.9){
        getBMIResult.innerHTML='You Are Overweight'
    }
    else{
        getBMIResult.innerHTML='You Are Obese'
    }
})

function ShowDate() {
    let getDate=new Date()
    let getDays=getDate.getDay()
    let getMonths=getDate.getMonth()+1
    let getYears=getDate.getFullYear()
    let getHours=getDate.getHours()
    let getMinutes=getDate.getMinutes()
    console.log(`${getDays}/${getMonths}/${getYears} ${getHours}:${getMinutes}`);
}
ShowDate()

function SwapValues(first,last){
    let swap=first
    first=last
    last=swap
    return [first,last]
}
console.log(SwapValues(4,2));

function ReverseSortWithoutMethods(array) {
    let newArray=[]
    for (let i =array.length-1;i >=0; i--) {
        newArray.push(array[i])
    }
    return newArray
}
console.log(ReverseSortWithoutMethods([1,9,7,6]));
console.log(ReverseSortWithoutMethods(['a','d','t','c','w']));

function CapitalizedFunction(Text){
    return Text.toUpperCase()
}
console.log(CapitalizedFunction('Hello'));

let ArrayExample=[]
function addItem(item) {
    return ArrayExample.push(item)
}
//delete pakai nomor index bukan indexOf
function DeleteItem(Index){
    if (Index>-1&&Index<ArrayExample.length) {
        let removedItem=ArrayExample.splice(Index,1)
        return removedItem[0]
    }
    else{
        return null
    }
    
}
addItem(12)
addItem(52)
addItem('2323')
DeleteItem(2)
console.log(ArrayExample);
function evensAndOddsCounter(Number) {
    let oddC=0
    let evenC=0
    for (let i = 0; i <= Number; i++) {
        if (i%2===0) {
            evenC++
        }
        if (i%2===1) {
            oddC++
        }
    }
    return `even ${evenC} odd ${oddC}`
}
console.log(evensAndOddsCounter(100));

function sumNumberInArray(...Number){
    let Init=0
    for (const Value of Number) {
        Init+=Value
    }
    return Init
}
console.log(sumNumberInArray(1,2,3));

function CreateID() {
    let id=''
    let Char='1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    for (let i = 0; i < 7; i++) {
        let randomChar=Math.floor(Math.random()*Char.length)
        id+=Char[randomChar]
    }
    return id
}
console.log(CreateID());
function CreateColorGenerator(type,Number){
    if (type==='hexa') {
        let HexaNum='01234567890abcdefABCDEF'
        let storage=[]
        for (let i = 0; i < Number; i++) {
            let id='#'
            for (let Color = 0; Color < 6; Color++) {
                let MixedNumber=Math.floor(Math.random()*HexaNum.length)
                id+=HexaNum[MixedNumber]
            }
            storage.push(id)
        }
        return storage
    }
    else if(type==='rgb'){
        let storage=[]
            for (let Color = 0; Color < Number; Color++) {
                let R=Math.floor(Math.random()*256)
                let G=Math.floor(Math.random()*256)
                let B=Math.floor(Math.random()*256)
                storage.push(`RGB(${R},${G},${B})`)
            }
        return storage
    }
}
console.log(CreateColorGenerator('rgb',4)); 
function ShuffleArray(Array){
    let copyArray=Array.slice()
    for (let i = copyArray.length - 1; i > 0; i--) {
        let ShuffledIndex=Math.floor(Math.random() * (i + 1));
        [copyArray[i], copyArray[ShuffledIndex]] = [copyArray[ShuffledIndex], copyArray[i]];
    }
    return copyArray
}
let consArray=[1,2,3,4,5];
console.log(ShuffleArray(consArray));
// disini pake method some tidak bisa jadi di tukar menjadi loop
function isEmpty(Array) {
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] === null || Array[i] === undefined || isNaN(Array[i]) || Array[i] === '') {
            return 'Yes, it is Empty';
        }
    }
        return 'Not Empty';
};
console.log(isEmpty(consArray));
function ArrayAverageChecker(Array){
    if(Array.every(ArrayItem=>typeof ArrayItem==='number')){
        let init=0
        for (const Value of Array) {
            init+=Value
        }
        let Average=init/Array.length
        return Average
    }
    else{
        return 'Must Number'
    }
}
console.log(ArrayAverageChecker(consArray));
function FactorialNumber(Number){
    let FactorialNumber=1
    for (let i = 1; i < Number; i++) {
        FactorialNumber *= i        
    }
    return FactorialNumber
}
console.log(FactorialNumber(5));
console.log('========================================================');