const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// No 1
let extractData=fetch(countriesAPI)
.then(Response=>Response.json())
.then(data=>{
    const extratedInfo=data.map(country=>{
        return {
            country:country.name,
            capital:country.capital,
            languages:country.languages,
            population:country.population,
            Area:country.area
        }
    })
    console.log(extratedInfo);
})
.catch(error=>{
    console.log(error);
});
// No 2 dan 3
// Masalah dan Solusi di Nomor ini
let extractDataCat=fetch(catsAPI)
.then(response=>response.json())
.then(data=>{
    // pertama kita filter dulu data cat metric nya
    let metricDataCat=data.filter(cat=>cat.weight.metric)
    // kita pasang initiator nya
    let totalWeight=0
    if(metricDataCat.length > 0 ){
        // gunakan foreach untuk menghitung semua array cat weight metric nya
        metricDataCat.forEach(cat => {
            // gunakan split jadi - akan di ilang kan dan akan di ubah menjadi 'value'
            let catMetric=cat.weight.metric.split('-')
            // kita ambil data nya max di array ke 2
            let maxData=parseFloat(catMetric[1])
            // dan min di array pertama
            let mindata=parseFloat(catMetric[0])
            // kita kalkulasikan datanya min+max/2
            let calculateData=(mindata+maxData)/2
            console.table(`${cat.name}:${calculateData.toFixed(2)}`);
            // ini kita tambahkan/ganti totalweight nya dengan calculate datanya
            totalWeight+=calculateData
        });
        // kita buat total average semua cat nya dengan totalweight di bagi metricdata.length
        let averageTotalWeight=totalWeight/metricDataCat.length
        console.log(averageTotalWeight);
    // else ini jika di data nya ga ada metric data di object array kucing nya
    }else{
        console.log("Data Is Invalid");
    }
})
.catch(error=>{
    console.log(error);
})
// No 4
let extractDataCountry=fetch(countriesAPI)
.then(response=>response.json())
.then(data=>{
    let extractArea=data
    .filter(country=>country.area)
    .map(country=>{
        return {
            country:country.name,
            Area:country.area
        }
    })
    let sortedCountry=extractArea.sort((a,b)=>b.Area-a.Area).splice(0,10)
    console.log(sortedCountry);
    
})
.catch(err=>{
    console.log(err);
});
// No 5
// masalah dan solusi di nomor ini
let extractDataLang=fetch(countriesAPI)
.then(Response=>Response.json())
.then(data=>{
    let filteredCountry=data
    // logika di line ini pertama kita mengecek apakan country ada languages
    // kedua apakah panjang country ini lebih dari 0 jadi cuma 2 katagori ini saja yang akan tersaring
    .filter(country=>country.languages&&country.languages.length>0)
    // dan logika ini pertama kita ambil value languages nya dan didalam nya 
    // kita ambil value name nya karna ada array lagi didalam nya jika lebih dari 1
    .map(country=>country.languages.map(lang=>lang.name))
    // kita gabungkan semua array nya menjadi 1 menggunakan concat dan pakai initiator array biar masuk ke array
    .reduce((acc,lang)=>acc.concat(lang),[]);
    let languagesCount=filteredCountry.reduce((count,lang)=>{
        count[lang]=(count[lang]||0)+1
        return count
    },{})
    let languageFinal=Object.keys(languagesCount)
    .map(languages=>({
        languages,
        count:languagesCount[languages]
    }))
    languageFinal.sort((a,b)=>b.count-a.count)
    console.log(languageFinal);
})
.catch(err=>{
    console.log(err);
});