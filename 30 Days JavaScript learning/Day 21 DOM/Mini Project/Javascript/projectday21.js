function randomColorGenerator(){
    const hexId=('0123456789abcdef')
    let init='#'
    for (let i = 0; i < 6; i++) {
        let randomGenerator=Math.floor(Math.random()*hexId.length)
        init+=hexId[randomGenerator]
    }
    return init
}
let getDateWeb=document.getElementById('change-date')
let getTitle_Years=document.getElementById('title-Years')
const one_Second=1000
function changeColor(Type){
    if(Type==='year'||Type==='years'){ 
    getTitle_Years.style.color=randomColorGenerator()
    }
    if(Type==='date'||Type==='dates'){ 
    getDateWeb.style.backgroundColor=randomColorGenerator()
    }
}
setInterval(()=>
    {changeColor('years')}
    ,one_Second)
setInterval(()=>
    {changeColor('date')}
    ,one_Second)

let getP=document.querySelectorAll('li')
getP[0].style.backgroundColor='#8AC926'
getP[1].style.backgroundColor='#FFCA3A'

function updateTime(){ 
let getDate=new Date()
let getMonth=getDate.getMonth()
let getDay=getDate.getDay()
let getYears=getDate.getFullYear()
let getHours=getDate.getHours()
let getMinute=getDate.getMinutes()
let getSecond=getDate.getSeconds()
getMinute = getMinute < 10 ? '0' + getMinute : getMinute;
getDateWeb.innerHTML=`${getDay} ${getMonth} ${getYears} ${getHours}-${getMinute}:${getSecond}`
}
updateTime()
setInterval(updateTime,one_Second)