const countriesLength=countries.length
const getCountriesLength=document.querySelector('.countries-length')
getCountriesLength.textContent=`Currently we have ${countriesLength} countries in the world`
const countriesFilter=countries.filter(countries=>countries.name)
const getContainer=document.getElementById('container')
let getDisplayedCountry=countries.slice()
function createContainer(Data){
    Data.forEach(Country=>{
    const getCountryData=CreateDisplayData(Country)
    const createCountriesCard=document.createElement('div')
    createCountriesCard.setAttribute('class','country-card')
    createCountriesCard.appendChild(getCountryData)
    getContainer.appendChild(createCountriesCard)
    })
}
function Display(data){
    getContainer.innerHTML=''
    createContainer(data)
}

createContainer(getDisplayedCountry)

function CreateDisplayData(data){
        let createImg=document.createElement('img')
        createImg.setAttribute('src',data.flag)
        createImg.setAttribute('class','img-card')
        let createDivText=document.createElement('div')
        createDivText.style.display='flex'
        createDivText.style.flexDirection='column'
        createDivText.setAttribute('class','inside-card')
        let createPName=document.createElement('p')
        createPName.className='text-content title-card'
        createPName.innerHTML=data.name
        let createPCapital=document.createElement('p')
        createPCapital.innerHTML=`Capital:${data.capital}`
        createPCapital.className='text-content'
        let createPlanguages=document.createElement('p')
        createPlanguages.innerHTML=`Languages:${data.languages}`
        createPlanguages.className='text-content'
        let createPopulation=document.createElement('p')
        createPopulation.innerHTML=`Population:${data.population}`
        createPopulation.className='text-content'
        createDivText.appendChild(createImg)
        createDivText.appendChild(createPName)
        createDivText.appendChild(createPCapital)
        createDivText.appendChild(createPlanguages)
        createDivText.appendChild(createPopulation)
        return createDivText
}

const getDataInput=document.getElementById('input-data')
getDataInput.addEventListener('input',function(){
    let getDataValue=getDataInput.value.toLowerCase()
    let DataValueFilter=countries.filter((country)=>{
        const lowerNameCountries=country.name.toLowerCase()
        return( 
        lowerNameCountries.startsWith(getDataValue)
        )
    })
    Display(DataValueFilter)
})

// button function
const getButtonName=document.getElementById('sort-country')
const getButtonCapital=document.getElementById('sort-capital')
const getButtonPopulation=document.getElementById('sort-population')
let toggle=true
getButtonName.addEventListener('click',function(){
    let getDataValue=getDataInput.value.toLowerCase()
    let DataValueFilter=countries.filter((country)=>{
        const lowerNameCountries=country.name.toLowerCase()
        return( 
        lowerNameCountries.startsWith(getDataValue)
        )
    })
    const getArrowCountry=document.getElementById('arrow-country')
    toggle=!toggle
    if (toggle) {
        DataValueFilter.sort((a,b)=>a.name.localeCompare(b.name))
        getArrowCountry.innerHTML='arrow_upward'
    }
    else{
        DataValueFilter.sort((a,b)=>b.name.localeCompare(a.name))
        getArrowCountry.innerHTML='arrow_downward'
    }
    
    Display(DataValueFilter)
})