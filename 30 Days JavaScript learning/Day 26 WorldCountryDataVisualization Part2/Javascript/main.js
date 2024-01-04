document.addEventListener('DOMContentLoaded',function(){
    let AllCountries=countries.length
    let getTotalCountries=document.querySelector('.Total-Country')
    let getCountry=document.querySelector('.country')
    getTotalCountries.innerHTML=AllCountries
    let getSearchInput=document.querySelector('.input-Class')
    let getAnyButton=document.querySelector('.any')
    let getStartWithButton=document.querySelector('.start')
    let getSortWeb=document.querySelector('.sort')
    let getTotal=document.querySelector('.Total')
    // Buat display awalan
    countries.forEach(countries=>{
        let getCountries=CreateCountryDisplay(countries)
        getCountry.appendChild(getCountries)
    })
    
    function Display(data,Total){
        getCountry.innerHTML=''
        getTotal.innerHTML=Total ? `${Total}` : ''
    data.forEach(country=>{
        let getCountries=CreateCountryDisplay(country)
        getCountry.appendChild(getCountries)
    })
    }
    function CreateCountryDisplay(country){ 
            let createH2=document.createElement('h2')
            createH2.setAttribute('class','country-list')
            createH2.textContent=country
            createH2.style.textAlign='center'
            createH2.style.zIndex='2'
            createH2.style.fontSize='18px'
            createH2.style.color='white'
            let createDIV=document.createElement('div')
            createDIV.setAttribute('class','card')
            createDIV.style.height='140px'
            createDIV.style.width='130px'
            createDIV.style.position='relative'
            createDIV.style.borderRadius='10px'
            createDIV.style.padding='0 4px'
            let createBackground=document.createElement('div')
            createBackground.style.backgroundColor='rgba(53, 53, 190, 0.596)'
            createBackground.style.position='absolute'
            createBackground.style.width='100%'
            createBackground.style.height='100%'
            createBackground.style.zIndex='0'
            createDIV.appendChild(createBackground)
            createDIV.appendChild(createH2)
            // getCountry.appendChild(createDIV)
            return createDIV
    }
    function SortWeb(){
        let sortedCountry=countries.reverse()
        Display(sortedCountry)
    }
    
    function StartWith(){
        let Value=getSearchInput.value.toLowerCase()
        let filterCountry=countries.filter(a=>a.toLowerCase().startsWith(Value))
        let Result=getTotal.innerHTML=`Countries That Start With ${Value} Are ${filterCountry.length}`
        Display(filterCountry,Result)
    }
    function Anyword(){
        let Value=getSearchInput.value.toLowerCase()
        let filterCountry=countries.filter(a=>a.toLowerCase().includes(Value))
        let Result=getTotal.innerHTML=Value ? `Countries That Containing This Letter ${Value} Are ${filterCountry.length}`:''
        Display(filterCountry,Result)
    }
    let isButtonActive=false
    function ToggleActiveButton(){
        isButtonActive = true
        StartWith()
    }
    console.log('Event listener registered');
    getSortWeb.addEventListener('click', function(){
        isButtonActive=false
        SortWeb()
    });
    getStartWithButton.addEventListener('click', ToggleActiveButton);
    getAnyButton.addEventListener('click', Anyword);
    getSearchInput.addEventListener('input',function (){
        if (isButtonActive) {
            StartWith()
        }else{
            Anyword()
        }
    })
    getSearchInput.addEventListener('input', Anyword);
})

