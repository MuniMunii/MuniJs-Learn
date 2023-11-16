function hexGenerator(){
    let hexNum='0123456789abcdef'
    let initial='#'
    for (let i = 0; i < 6; i++) {
        let hexNumGenerator=Math.floor(Math.random()*hexNum.length);
        initial+=hexNum[hexNumGenerator]
    }
    return initial
}
let one_Second=1000
let titleYear=document.getElementById('title-Years')
let getDateWeb=document.getElementById('change-date')

let getP=document.querySelectorAll('.li-content')
for (const p of getP) {
    p.style.backgroundColor='rgb(223, 57, 57)';
}
getP[0].style.backgroundColor='#8AC926'
getP[1].style.backgroundColor='#FFCA3A'
function changeColor(type){
    if(type==='Years'){
        titleYear.style.color=hexGenerator()
    }
    if (type==='Date') {
        getDateWeb.style.backgroundColor=hexGenerator()
    }
}
setInterval(()=>
{changeColor('Years')}
,one_Second)
setInterval(()=>
{changeColor('Date')}
,one_Second)

function updateTime(){ 
    let getDate=new Date()
    let getMonth=getDate.getMonth()
    let getDay=getDate.getDay()
    let getYears=getDate.getFullYear()
    let getHours=getDate.getHours()
    let getMinute=getDate.getMinutes()
    let getSecond=getDate.getSeconds()
    getMinute = getMinute < 10 ? '0' + getMinute : getMinute;
    getDateWeb.innerHTML=`Day:${getDay} Months:${getMonth} Years:${getYears} ${getHours}-${getMinute}:${getSecond}`
    }
updateTime()
setInterval(updateTime,one_Second)
let getTitleContent=document.querySelectorAll('.title-content')
let getSummaryContent=document.querySelectorAll('.summary-content') 
let getTitleSummary=document.querySelectorAll('.title-summary')
let getStatus=document.querySelectorAll('.condition')
let getLogoSocial=document.querySelector('.logo-social')
let getAuthorTitle=document.querySelectorAll('.content-author-title')
let getAuthorQuali=document.querySelectorAll('.content-author-qua')
let getAuthorSkills=document.querySelectorAll('.content-author-skill')
// loopan buat nama content nya
asabenehChallenges2020.challenges.forEach((challenges,index)=>{
    getTitleContent[index].textContent=challenges.name
})
asabenehChallenges2020.challenges.forEach((challenges,index)=>{
    getStatus[index].textContent=challenges.status
})
asabenehChallenges2020.challenges.forEach((challenges,index)=>{
    challenges.topics.forEach((topic)=>{
        let getLI=document.createElement('li');
        getLI.textContent=topic
        getLI.style.padding='5px 10px'
        getSummaryContent[index].appendChild(getLI)
    })
})
asabenehChallenges2020.author.socialLinks.forEach((social,index)=>{
    let createA=document.createElement('a')
    createA.style.fontSize='2rem'
    createA.style.display='inline-block'
    createA.style.textAlign='center'
    createA.style.color='black'
    createA.innerHTML=social.fontawesomeIcon
    createA.href=social.url
    getLogoSocial.appendChild(createA)
})
asabenehChallenges2020.author.titles.forEach((title,index)=>{
    let createLI=document.createElement('li')
    let createTitle=getAuthorTitle[index]
    createTitle.appendChild(createLI)
})