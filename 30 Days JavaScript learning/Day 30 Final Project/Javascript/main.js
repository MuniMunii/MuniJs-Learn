let countriesLength=countries.length
let getCountriesLength=document.querySelector('.countries-length')
getCountriesLength.textContent=`Currently we have ${countriesLength} countries in the world`
let countriesFilter=countries.filter(countries=>countries.name)
let getContainer=document.getElementById('container')
countries.forEach(countries=>{
    let createCountriesCard=document.createElement('div')
    createCountriesCard.setAttribute('class','country-card')
    let createImg=document.createElement('img')
    createImg.setAttribute('src',countries.flag)
    createCountriesCard.appendChild(createImg)
    let createDivText=document.createElement('div')
    let createPName=document.createElement('p')
    createPName.className='text-content'
    createPName.innerHTML=countries.name
    let createPCapital=document.createElement('p')
    createPCapital.innerHTML=`Capital:${countries.capital}`
    createPCapital.className='text-content'
    let createPlanguages=document.createElement('p')
    createPlanguages.innerHTML=`Languages:${countries.languages}`
    createPlanguages.className='text-content'
    let createPopulation=document.createElement('p')
    createPopulation.innerHTML=`Population:${countries.population}`
    createPopulation.className='text-content'
    createDivText.appendChild(createPName)
    createDivText.appendChild(createPCapital)
    createDivText.appendChild(createPlanguages)
    createDivText.appendChild(createPopulation)
    createCountriesCard.appendChild(createDivText)
    getContainer.appendChild(createCountriesCard)
})
