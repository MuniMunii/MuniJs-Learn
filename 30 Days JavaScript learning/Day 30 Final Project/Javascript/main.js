const countriesLength=countries.length
const getCountriesLength=document.querySelector('.countries-length')
getCountriesLength.textContent=`Currently we have ${countriesLength} countries in the world`
const countriesFilter=countries.filter(countries=>countries.name)
let getCountries=countries
const getContainer=document.getElementById('container')
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

createContainer(getCountries)

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
    const getInputInfo=document.getElementById("input-info")
    let DataValueFilter=countries.filter((country)=>country.name.toLowerCase().startsWith(getDataValue)||(country.name||'').toLowerCase().startsWith(getDataValue))
    Display(DataValueFilter)
})

// button function
const getButtonName=document.getElementById('sort-country')
const getButtonCapital=document.getElementById('sort-capital')
const getButtonPopulation=document.getElementById('sort-population')
let toggle=true
let toggleNCapital=true
let toggleNPopulation=true
const getArrowCountryCapital = document.getElementById('arrow-capital');
const getArrowCountry=document.getElementById('arrow-country')
const getArrowCountryPopulation=document.getElementById('arrow-population')

getButtonName.addEventListener('click',function(){
    let getDataValue=getDataInput.value.toLowerCase()
    let DataValueFilter=countries.filter((country)=>{
        const lowerNameCountries=country.name.toLowerCase()
        return( 
        lowerNameCountries.startsWith(getDataValue)
        )
    })
    toggle=!toggle
    toggleNCapital=false
    toggleNPopulation=false
    getArrowCountryCapital.innerHTML=''
    getArrowCountryPopulation.innerHTML=''
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
getButtonCapital.addEventListener('click', function () {
    let getDataValue = getDataInput.value.toLowerCase();
    let DataValueFilter = countries.filter((country) => {
        const lowerCapitalCountries = (country.capital||'').toLowerCase();
        return (
            lowerCapitalCountries.startsWith(getDataValue)
        );
    });
    getArrowCountry.innerHTML=''
    getArrowCountryPopulation.innerHTML=''
    toggleNCapital = !toggleNCapital;
    toggle=false
    toggleNPopulation=false
    if (toggleNCapital) {
        DataValueFilter.sort((a, b) => (a.capital||'').localeCompare(b.capital));
        getArrowCountryCapital.innerHTML = 'arrow_upward';
    } else {
        DataValueFilter.sort((a, b) => (b.capital||'').localeCompare(a.capital));
        getArrowCountryCapital.innerHTML = 'arrow_downward';
    }

    Display(DataValueFilter);
});
getButtonPopulation.addEventListener('click',function(){
    let getDataValue = getDataInput.value.toLowerCase();
    let DataValueFilter = countries.filter((country) => {
        const lowerCapitalCountries = country.name.toLowerCase();
        return (
            lowerCapitalCountries.startsWith(getDataValue)
        );
    });
    getArrowCountryCapital.innerHTML=''
    getArrowCountry.innerHTML=''
    toggleNPopulation = !toggleNPopulation;
    toggle=false
    toggleNCapital=false
    if (toggleNPopulation) {
        DataValueFilter.sort((a, b) => a.population-b.population);
        getArrowCountryPopulation.innerHTML = 'arrow_upward';
    } else {
        DataValueFilter.sort((a, b) => b.population-a.population);
        getArrowCountryPopulation.innerHTML = 'arrow_downward';
    }

    Display(DataValueFilter);
})
let togglePopulation=false
let toggleLanguages=false

function CreateStatistic(Data){
    let languagesCount=Data
    .filter(country=>country.languages)
    .map(country=>country.languages)
    .reduce((acc,lang)=>acc.concat(lang),[])
    .reduce((languages,count)=>{
        languages[count]=(languages[count]||0)+1
        return languages
    },{});
    const LanguagesObject=Object.keys(languagesCount).map(languages=>({
        languages,
        LanguagesCount:languagesCount[languages]
    }))
    let sortLanguages=LanguagesObject.sort((a,b)=>b.LanguagesCount-a.LanguagesCount).slice(0,9)
    const allLanguagesIncrement=LanguagesObject.map(country=>country.LanguagesCount).reduce((a,b)=>a+b,0)
    console.log(sortLanguages);
    console.log(allLanguagesIncrement);
    let getStatisticBar=document.querySelector('.statistic-bar')
    // untuk besok coba buat ini jadi function biar bisa di ganti toggle nya jadi ke population biar ga banyak function
    sortLanguages.forEach((Data)=>{
    const createPercentage=document.createElement('div')
    createPercentage.setAttribute('class','percentage')
    const createLabel=document.createElement('p')
    createLabel.setAttribute('class','label-bar')
    createLabel.innerHTML=Data.languages
    const createBar=document.createElement('div')
    createBar.setAttribute('class','Bar')
    createBar.style.width=`${Data.LanguagesCount/allLanguagesIncrement*100}%`
    const createCount=document.createElement('p')
    createCount.innerHTML=Data.LanguagesCount
    createCount.style.marginLeft='auto'
    createPercentage.appendChild(createLabel)
    createPercentage.appendChild(createBar)
    createPercentage.appendChild(createCount)
    getStatisticBar.appendChild(createPercentage)
})
}
CreateStatistic(getCountries)