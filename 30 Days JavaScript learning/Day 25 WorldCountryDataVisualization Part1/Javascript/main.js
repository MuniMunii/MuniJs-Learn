let countriesLength=countries.filter(countries=>countries.name).length
console.log(countriesLength);
let getCountryLength=document.getElementById('country-Length')
getCountryLength.textContent=countriesLength
let getChart=document.getElementById('chart-countries')

function Languages(){
    let getContainerBar=document.getElementsByClassName('container-bar');
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

    getRow.forEach((row,index) => {
        let getNameLanguage=row.querySelector('.language-name')
        let getBar=row.querySelector('.bar')
        let getCount=row.querySelector('.count')
        if (sortLanguageX[index]) {
            getNameLanguage.innerHTML=`${innerHTML=sortLanguageX[index].language}`
            getCount.innerHTML=`${sortLanguageX[index].count}`
            getBar.style
        }
    });
}


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

