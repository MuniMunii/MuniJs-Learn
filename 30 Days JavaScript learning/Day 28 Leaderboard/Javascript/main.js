// getClass
let getFirstName=document.getElementById('First-input')
let getLastName=document.getElementById('Last-input')
let getCountry=document.getElementById('Country-input')
let getScore=document.getElementById('Score-input');
let getSubmit=document.getElementById('Submit')
let getError=document.getElementById('error-messages')
let info={}
getSubmit.addEventListener('click',()=>{
    let scoreValue=getScore.value;
    if(getFirstName.value===''||getLastName.value===''||getCountry.value===''||isNaN(scoreValue)||scoreValue===''){
        getError.innerHTML='Input The Correct Value'
    }
})