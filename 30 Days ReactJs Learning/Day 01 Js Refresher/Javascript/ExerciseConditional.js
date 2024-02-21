const CarTest=document.querySelector('.car-test')
CarTest.addEventListener('input',function(){
    const CarResult=document.querySelector('.car-result')
    let CarTestValue=parseInt(CarTest.value)
    if (CarTestValue >= 18) {
        CarResult.innerHTML='You are old enough to drive.'
    }
    else if(CarTestValue < 18){
        CarResult.innerHTML=`You are left with ${18-CarTestValue} years to drive.`
    }
    else{
        CarResult.innerHTML=''
    }
})
const CompareAge=document.querySelector('.compare-age')
CompareAge.addEventListener('input',function(){
    let CompareAgeValue=parseInt(CompareAge.value)
    const MyAges=19
    const CompareAgeResult=document.getElementById('compare-result')
    if (CompareAgeValue>MyAges) {
        CompareAgeResult.innerHTML=`You are ${CompareAgeValue-MyAges} years older than me.`
        CompareAgeResult.style.visibility='visible'
    }
    else if(CompareAgeValue < MyAges){
        CompareAgeResult.innerHTML=`You are ${MyAges-CompareAgeValue} years younger than me`
        CompareAgeResult.style.visibility='visible'
    }
    else if(isNaN(CompareAgeValue)){
        CompareAgeResult.style.visibility='hidden'
        CompareAgeResult.innerHTML=''
    }
})
const OddEvenChecker=document.querySelector('.oddeven-checker')
OddEvenChecker.addEventListener('input',function(){
    let OddEvenInputValue=OddEvenChecker.value
    const OddEvenResult=document.getElementById('oddeven-result')
    if (OddEvenInputValue%2===0) {
        OddEvenResult.innerHTML=`${OddEvenInputValue} is Even Number`
        OddEvenResult.style.visibility='visible'
    }
    else if(OddEvenInputValue%2===1){
        OddEvenResult.innerHTML=`${OddEvenInputValue} is odd Number`
        OddEvenResult.style.visibility='visible'
    }
    else if(OddEvenInputValue===''){
        OddEvenResult.innerHTML=''
        OddEvenResult.style.visibility='hidden'
    }
})
let a=3
let b=4
console.log('================Conditional=================');
if(b>a){
    console.log(`${b} is greater than ${a}`);
}
else{
    console.log(`${b} is not greater than ${a}`);
}
console.log(`${b>a?'Yes':'No'}`);

function checkgrade(Number){
    if (Number >= 90) {
        console.log(`Your Grade Is A Congratulation`);
    }
    else if(Number >=70){
        console.log(`Your Grade is B Good Job`);
    }
    else if(Number >=60){
        console.log(`Your Grade is C Great`);
    }
    else if(Number >=50){
        console.log(`Your Grade is D Need More Improvement`);
    }
    else{
        console.log(`You Better studying If You dont wanna Stay class`);
    }
}
console.log(checkgrade(20));

function seasonCheck(Months) {
    let MonthsLowerCase=Months.toLowerCase()
    switch (MonthsLowerCase) {
        case 'januari':
        case 'februari':
        case 'desember':
            console.log('Now is Winter');
            break;
        case 'maret':
        case'april':
        case 'mei':
            console.log('Now is Spring');
            break;
        case 'juni':
        case 'juli':
        case 'agustus':
            console.log('Now is Summer');
            break;
        case 'september':
        case'oktober':
        case 'november':
            console.log('Now is Autumn');
            break;
        default:
            break;
    }
}
console.log(seasonCheck('januari'));

console.log('============================================');