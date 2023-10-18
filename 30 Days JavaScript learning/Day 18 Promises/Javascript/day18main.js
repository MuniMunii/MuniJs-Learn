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
