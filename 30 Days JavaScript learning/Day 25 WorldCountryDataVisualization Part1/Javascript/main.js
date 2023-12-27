let countriesLength=countries.filter(countries=>countries.name).length
console.log(countriesLength);
let getCountryLength=document.getElementById('country-Length')
getCountryLength.textContent=countriesLength
let getChart=document.getElementById('chart-countries')

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
    
    let getLanguageName = document.querySelectorAll('.language-name')
    let getCountainerBar=document.querySelectorAll('.container-bar')
    let getCount = document.querySelectorAll('.count')
    
    for (let index = 0; index < sortLanguageX.length; index++) {
        let createBar=document.createElement('div')
        createBar.setAttribute('class','bar')
        createBar.style.width=`${sortLanguageX[index].count}%`
        getLanguageName[index].innerHTML=sortLanguageX[index].language
        getCount[index].innerHTML=sortLanguageX[index].count
        getCountainerBar[index].appendChild(createBar)
    }
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

