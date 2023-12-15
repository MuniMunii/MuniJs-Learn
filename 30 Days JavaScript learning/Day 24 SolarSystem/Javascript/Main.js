
// masalah dan solusi di nomor ini adalah
function calculateObject(){
    // let getResult=document.querySelector('#result')
    let getKotak=document.getElementById('kotak')
    let getResultNotif=document.getElementById('result-notif')
    let getResult=document.getElementById('result')
    let getContent=document.getElementById('content')
    let getMass=parseFloat(document.getElementById('mass').value);
    let getPlanets=document.getElementById('planets')
    // kita akan ambil value dari getPlanets
    let getPlanetsValue=getPlanets.value;
    if (getPlanetsValue) {
        // kita buat variable dengan isi optionsGetplanet[index yang dipilih dari get planet]dan mengambil dari atribut data-gravity
        let getGravity=parseFloat(getPlanets.options[getPlanets.selectedIndex].getAttribute('data-gravity'));
        // abis itu kita kalikan dengan mass yang ada di input htmlnya
        let imgPath=document.querySelector('img')
        let calculateObject=getMass*getGravity
        getKotak.style.width='300px'
        getKotak.style.height='250px'
        getKotak.style.backgroundColor='#fff'
        getContent.style.justifyContent='space-evenly'
        getContent.style.alignItems='center'
        getResultNotif.innerHTML=`The Weight Object On ${getPlanetsValue}`
        getResult.innerHTML=`${calculateObject.toFixed(2)} N`
        getResult.style.width='150px'
        getResult.style.height='150px'
        getResult.style.borderRadius='50%'
        getResult.style.backgroundColor='pink'
        if(getPlanetsValue==='merkurius'){
            imgPath.src='../image/mercury.png'
        }
        else if(getPlanetsValue==='venus'){
            imgPath.src='../image/venus.png'
        }
        else if(getPlanetsValue==='earth'){
            imgPath.src='../image/earth.png'
        }
        else if(getPlanetsValue==='mars'){
            imgPath.src='../image/mars.png'
        }
        else if(getPlanetsValue==='saturnus'){
            imgPath.src='../image/saturn.png'
        }
        else if(getPlanetsValue==='jupiter'){
            imgPath.src='../image/jupiter.png'
        }
        else if(getPlanetsValue==='uranus'){
            imgPath.src='../image/uranus.png'
        }
        else if(getPlanetsValue==='neptunus'){
            imgPath.src='../image/neptune.png'
        }
        else if(getPlanetsValue==='pluto'){
            imgPath.src='../image/pluto.png'
        }
        else{
            getResult.innerHTML='Select the Planets'
        }
    }
        if (isNaN(getMass)) {
            getResult.innerHTML = 'Input the correct number for mass';
            return;
        } else if(getMass==='') {
            getContent.innerHTML = 'input The valid mass';
        }
    
}