let Dummy='https://www.30daysofreact.com/dummy-data'
fetch(Dummy)
.then(Response=>Response.json())
.then(Data=>{
    console.log(Data);
})
.catch(error=>{
    console.log(error);
})