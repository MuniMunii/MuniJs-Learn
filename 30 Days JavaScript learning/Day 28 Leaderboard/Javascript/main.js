// getClass
let getFirstName=document.getElementById('First-input')
let getLastName=document.getElementById('Last-input')
let getCountry=document.getElementById('Country-input')
let getScore=document.getElementById('Score-input');
let getSubmit=document.getElementById('Submit')
let getError=document.getElementById('error-messages')
let getPlayerList=document.querySelector('.player-list')
// let getNameDate=document.getElementById('name-date')
// let getName=document.getElementById('name')
// let getDate=document.getElementById('date')
const MonthsInAlphabets=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let createTime=new Date()
let createMonths=createTime.getMonth()
let createDate=createTime.getDate()
let createYear=createTime.getFullYear()
let createHour=createTime.getHours()
let createMinute=createTime.getMinutes()
let MonthsNames=MonthsInAlphabets[createMonths]
let TimeRN=`${MonthsNames} ${createDate} ${createYear} ${createHour}:${createMinute}`
console.log(TimeRN);
let getCheckIndex=document.getElementById('checkIndex')
getCheckIndex.addEventListener('click',()=>{
    console.log(info);
})

// function updatePlayer(){
//     info.forEach(player => {
//         DisplayPlayer(player.Score);
//     });
// }
let info=[]
getSubmit.addEventListener('click',()=>{
    let scoreValue=parseInt(getScore.value);
    let firstNameValue=getFirstName.value;
    let lastNameValue=getLastName.value;
    let countryValue=getCountry.value; 
    if(getFirstName.value===''||getLastName.value===''||getCountry.value===''||isNaN(scoreValue)||scoreValue===''){
        getError.innerHTML='Input The Correct Value'
    }
    else{
        DisplayPlayer(firstNameValue,lastNameValue,countryValue,scoreValue)
    }
    console.log(info);
})
function DisplayPlayer(firstname,lastName,country,score){ 
    info.push(
        {firstname:firstname,
        lastname:lastName,
        country:country,
        Score:score})
    let createPlayerDiv=document.createElement('div')
    createPlayerDiv.setAttribute('class','player')

    // 
    let createNameDate=document.createElement('div')
    createNameDate.setAttribute('class','name-date')
    let createNameP=document.createElement('p')
    createNameP.setAttribute('class','name')
    createNameP.innerHTML=`${firstname} ${lastName}`
    createNameDate.appendChild(createNameP)
    let createDateP=document.createElement('p')
    createDateP.setAttribute('class','date')
    createDateP.innerHTML=TimeRN
    // 
    createNameDate.appendChild(createDateP)
    getPlayerList.appendChild(createNameDate)
    let createPCountry=document.createElement('p')
    createPCountry.setAttribute('id','country')
    createPCountry.innerHTML=`${country}`
    
    let createPScore=document.createElement('p')
    createPScore.setAttribute('id','score')
    createPScore.innerHTML=`${score}`
    // 
    createPlayerDiv.appendChild(createNameDate);
    createPlayerDiv.appendChild(createPCountry)
    

    let createButtonList=document.createElement('div')
    createButtonList.setAttribute('class','button-list')
    getPlayerList.appendChild(createButtonList)
    //
    let LastPlayerIndex=info.length-1
    let createTrashButton=document.createElement('button')
    createTrashButton.setAttribute('class','button-function')
    createTrashButton.setAttribute('id','delete-player')
    createTrashButton.setAttribute('data-index',LastPlayerIndex)
    createTrashButton.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'
    createTrashButton.style.color='red'
    createTrashButton.addEventListener('click',()=>{
        let changeIndex=createTrashButton.setAttribute('data-index',LastPlayerIndex)
        const LastPlayer=parseInt(createTrashButton.dataset.index)
        if(!isNaN(LastPlayer)&&LastPlayer >= 0 && LastPlayer<info.length){
            createPlayerDiv.remove()
            info.splice(LastPlayer,1)
            getPlayerList.querySelectorAll('.player').forEach((playerdiv,index)=>{
                const button=playerdiv.querySelector('.delete-player, .increment-score, .decrement-score')
                button.setAttribute('data-index',index)
            })
        }
    })
    //
    let incrementButton=document.createElement('button')
    incrementButton.setAttribute('class','button-function')
    incrementButton.setAttribute('id','increment-score')
    incrementButton.setAttribute('data-index',LastPlayerIndex)
    incrementButton.innerHTML='+5'
    incrementButton.addEventListener('click',()=>{
        let changeIndex=incrementButton.setAttribute('data-index',LastPlayerIndex)
        const LastPlayer=parseInt(incrementButton.dataset.index)
        if (!isNaN(LastPlayer)&&LastPlayer >= 0 && LastPlayer < info.length) {
            let updatedScore=info[LastPlayer].Score+=5
            createPScore.innerHTML=`${updatedScore}`
            
        }
    })
    //
    let decrementButton=document.createElement('button')
    decrementButton.setAttribute('class','button-function')
    decrementButton.setAttribute('id','decrement-score')
    decrementButton.setAttribute('data-index',LastPlayerIndex)
    decrementButton.innerHTML='-5'
    decrementButton.addEventListener('click',()=>{
        let changeIndex=incrementButton.setAttribute('data-index',LastPlayerIndex)
        const LastPlayer=parseInt(decrementButton.dataset.index)
        if (!isNaN(LastPlayer)&&LastPlayer >= 0 && LastPlayer < info.length) {
            let updatedScore=info[LastPlayer].Score-=5
            createPScore.innerHTML=`${updatedScore}`
        }
    })
    createButtonList.appendChild(createTrashButton)
    createButtonList.appendChild(incrementButton)
    createButtonList.appendChild(decrementButton)

    getPlayerList.appendChild(createPlayerDiv);
    createPlayerDiv.appendChild(createPScore)
    createPlayerDiv.appendChild(createButtonList);
}