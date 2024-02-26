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
const workdayChecker=document.querySelector('.workday-checker')
workdayChecker.addEventListener('input',function(){
    let workdayValue=workdayChecker.value
    let workdayValueLowecase=workdayValue.toLowerCase()
    const workdayResult=document.getElementById('workday-result')
    switch (workdayValueLowecase) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            workdayResult.innerHTML=`${workdayValue} is Workday`
            workdayResult.style.visibility='visible'
            break;
        case 'saturday':
        case 'sunday':
            workdayResult.innerHTML=`${workdayValue} is weekend`
            workdayResult.style.visibility='visible'
            break;
        default:
            if (isNaN(workdayValue)) {
                workdayResult.innerHTML=`there are ${workdayValue} no month`
                workdayResult.style.visibility='visible'
            }
            else{workdayResult.style.visibility='hidden'}
            break;
    }
})

const MonthChecker=document.getElementById('month-checker')
MonthChecker.addEventListener('input',function(){
    let MonthValue=MonthChecker.value
    let MonthValueToLowerCase=MonthValue.toLowerCase()
    const MonthResult=document.getElementById('month-result')
    switch (MonthValueToLowerCase) {
        case 'januari':
        case 'april':
        case 'juni':
        case 'juli':
        case 'september':
        case 'november':
            MonthResult.innerHTML='has 31 days'
            MonthResult.style.visibility='visible'
            break;
        case 'maret':
        case 'desember':
        case 'mei':
        case 'agustus':
        case 'oktober':
            MonthResult.innerHTML='has 30 days'
            MonthResult.style.visibility='visible'
            break;
        case 'februari':
            MonthResult.innerHTML='has 28 days'
            MonthResult.style.visibility='visible'
            break;
        default:
            if (isNaN(MonthValue)) {
                MonthResult.innerHTML=`there are ${MonthValue} no month`
                MonthResult.style.visibility='visible'
            }
            else{MonthResult.style.visibility='hidden'}
            break;
    }
})
console.log('================Conditional=================');
let a=3
let b=4
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
checkgrade(20)

function seasonCheck(Months) {
    let MonthsLowerCase=Months.toLowerCase()
    switch (MonthsLowerCase) {
        case 'januari':
        case 'january':
        case 'februari':
        case 'february':
        case 'desember':
        case 'december':
            console.log('Now is Winter');
            break;
        case 'maret':
            case 'march':
        case'april':
        case 'mei':
            case 'may':
            console.log('Now is Spring');
            break;
        case 'juni':
            case 'june':
        case 'juli':
            case 'july':
        case 'agustus':
            case 'augustus':
            console.log('Now is Summer');
            break;
        case 'september':
        case'oktober':
        case'october':
        case 'november':
            console.log('Now is Autumn');
            break;
        default:
            break;
    }
}
seasonCheck('januari')

console.log('============================================');