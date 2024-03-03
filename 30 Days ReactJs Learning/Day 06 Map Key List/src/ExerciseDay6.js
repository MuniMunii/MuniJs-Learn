import Index from '.'
import './ExerciseDay6.css'
export const tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]
function DataVisualCountries(){
    const AllPopulation=tenHighestPopulation.find(country=>country.country==='World')
    let dataPopulation=tenHighestPopulation.map(country=>{
        let populationPercentage=country.population/AllPopulation.population*75
        let Visual=(
        <div className='visual-bar'>
            <h1 className='h1-label'>{country.country}</h1>
            <div className='bar' style={{width:`${populationPercentage}%`}}></div>
            <h1 className='h1-label'>{country.population}</h1>
        </div>)
        return Visual
    })
    return dataPopulation
}
function OddEvenPrime(){
    function isPrime(number){
        let prime=true
        if(number<=1){
            prime=false
        }
        else{
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number%i===0) {
                    prime=false
                }
            }
        }
        return prime
    }
    let arrayStorage=[]
    for (let i = 1; i < 32; i++) {
        arrayStorage.push(i)
    }
    let Split=arrayStorage.map(Index=>{
        if(isPrime(Index)){
            return <h1 className='h1-box prime'>{Index}</h1>
        }
        else if (Index%2===0) {
            return <h1 className='h1-box even'>{Index}</h1>
        }
        else if (Index%2===1) {
            return <h1 className='h1-box odd'>{Index}</h1>
        }
    })
    return (<div className='container'>{Split}</div>)
        
}
console.log(OddEvenPrime());
function HexaColorGenerator(){
    const hexNumber='1234567890ABCDEF'
    let hexContainer=[]
    for (let i = 0; i < 31; i++) {
        let init='#'
        for (let i = 0; i <= 5; i++) {
            let randomNumber=Math.floor(Math.random()*hexNumber.length)
            init+=hexNumber[randomNumber]
        }
        hexContainer.push(init)
    }
    let hexIntoBox=hexContainer.map(color=><p className='h1-box hex' style={{backgroundColor:color}}>{color}</p>)
    return (
    <div className='container'>{hexIntoBox}</div>)
}
const DataVisualComp=()=>{
    return <DataVisualCountries />
}
const OddEvenPrimeComp=()=>{
    return <OddEvenPrime />
}
const HexColorComp=()=>{
    return <HexaColorGenerator />
}
let ExerciseDay6=()=>{ 
    return (
    <div>
        <h1 className='Title'>Odd Even Checker(Number Generator)</h1>
        <OddEvenPrimeComp />
        <h1 className='Title'>Hex Color Generator</h1>
        <HexColorComp />
        <h1 className='Title'>Data World Population</h1>
        <p className='Title'>Ten Populated Country</p>
        <DataVisualComp />
    </div>
    )}
export default ExerciseDay6;