
let getResult=document.querySelector('.result')
function calculateObject(){
    let getContent=document.querySelector('.content')
    getContent.sty
    let getMass=parseFloat(document.getElementById('mass').value);
    let getPlanets=document.getElementById('planets')
    let getPlanetsValue=getPlanets.value;
    if (getPlanetsValue) {
        let getGravity = parseFloat(getPlanets.options[getPlanets.selectedIndex].getAttribute('data-gravity'));
        if (!isNaN(getMass) && getMass !== '') {
            let calculateObject = getMass * getGravity;
            getResult.innerHTML = `Weight on ${getPlanetsValue}: ${calculateObject.toFixed(2)} N`;
        } else if (isNaN(getMass)) {
            getContent.innerHTML = 'Input the correct number for mass';
        } else if (getMass === '') {
            getContent.innerHTML = 'Input a valid mass';
        }
    } else {
        getContent.innerHTML = 'Select a planet';
    }
}
