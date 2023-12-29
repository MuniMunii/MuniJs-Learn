let countriesLength=countries.filter(countries=>countries.name).length
console.log(countriesLength);
let getCountryLength=document.getElementById('country-Length')
getCountryLength.textContent=countriesLength
let getChart=document.getElementById('chart-countries')
let getLanguageName = document.querySelectorAll('.language-name')
let getCountainerBar=document.querySelectorAll('.container-bar')
let getCount = document.querySelectorAll('.count')
let getBar=document.querySelectorAll('.bar')
let getWorld=document.querySelectorAll('.world')

// penjelasan disini
function Display(data,property,allData){
    // pertama kita reset dulu semua isi container bar nya
    // dengan menggunakan forEach untuk mengambil array dari queryselector Array getCountainerBar
    // jadi tidak nge overide bekas data lain nya dan tidak berbekas
    getCountainerBar.forEach(containerBar => containerBar.style.display = 'none');
    // kemudian expressi di loop ini jika i lebih kecil dari lengthcontainerbar
    for (let i = 0; i <getCountainerBar.length; i++) {
        let Percentage=data[i][property]/allData*100
            getBar[i].style.width=`${Percentage}%`
            // dan expresi condition ini jika i lebih kecil dari data.length nya akan di tambahkan data nya
        if (i<data.length) {
            // biar gampang ku pakai variable label
            // jadi pake operator OR apakah data nya country/Language
            let Label=data[i].country||data[i].language
            getLanguageName[i].innerHTML=Label
            // kita ambil property nya apakah itu count/population
            getCount[i].innerHTML=data[i][property]
            getCountainerBar[i].style.display='flex'
        }
        else{
            getCountainerBar[i].style.display = 'none';
        }
    }
}

function Languages(){
    let GetContainer=document.querySelector('.container')
    let getRow=document.querySelectorAll('.data-row')
    let filteredLanguages=countries.filter(countries=>countries.languages)
    .map(countries=>countries.languages)
    .reduce((acc,lang)=>acc.concat(lang),[]);
    let languageCountry=filteredLanguages.reduce((count,languages)=>{
        count[languages]=(count[languages]||0)+1;
        return count
    },{})
    let languageKey=Object.keys(languageCountry).map(language=>({
        language,
        count:languageCountry[language]
    }))
    let sortLanguageX=languageKey.sort((a,b)=>b.count-a.count).slice(0,10)
    let allLang=sortLanguageX.map(countries=>countries.count).reduce((a,b)=>a+b,0)
    Display(sortLanguageX,'count',allLang)
}

function Population(){
    let getAllCountries=countries.filter(country=>country.population)
    .map(countries=>countries.population)
    .reduce((a,b)=>a + b)
    let populationOnEachCountry=countries.filter(country=>country.population)
    .map(countries=>({
        country:countries.name,
        population:countries.population} 
    ),{})
    let sortedPopulationsCountries=populationOnEachCountry.sort((a,b)=>b.population-a.population).slice(0,10)
    sortedPopulationsCountries.unshift({country:'World',population:getAllCountries})
    console.log(sortedPopulationsCountries);

    Display(sortedPopulationsCountries,'population',getAllCountries)
}

// Cara kurang efektip
// for (let i = 0; i < sortLanguageX.length; i++) {
//     let createDiv=document.createElement('div')
//     createDiv.setAttribute('class','container-bar')

//     let createLangName=document.createElement('p')
//     createLangName.innerHTML=sortLanguageX[i].language

//     let createCount=document.createElement('p')
//     createCount.innerHTML=sortLanguageX[i].count
    
//     let createBar=document.createElement('div')
//     createBar.setAttribute('class','bar')
//     createBar.style.width=`${sortLanguageX[i].count}%`

//     createDiv.appendChild(createLangName)
//     createDiv.appendChild(createBar)
//     createDiv.appendChild(createCount)

//     document.querySelector('.container').appendChild(createDiv)
// }

// Cara menggunakan library
// new Chart(getChart,{ 
    //     type:'horizontalBar',
    //     data:{
    //         labels:sortLanguageX.map(lang=>lang.language),
    //         datasets:[{
    //             label:"Number Of countries",
    //             backgroundColor:"yellow",
    //             data:sortLanguageX.map(lang=>lang.count)
    //         }]
    //     },
    //     options:{
    //         legend:{display:false},
    //         title:{
    //             display:true,
    //             text:'text Languages Spoken'
    //         },
    //         Plugins:{
    //             datalabels:{
    //                 anchor:'end',
    //                 align:'end',
    //                 display:(context)=>context.datasets.data[context.dataIndex]>0,
    //                 formatter:(value,context)=>`${value}`,
    //                 color:'black',
    //                 font:{
    //                     weight:'bold'
    //                 }
    //             }
    //         }
    //     }
    // })

