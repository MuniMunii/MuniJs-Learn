let text=['30 Days Of Javascript Challenge 2020 Asabeneh Yetayeh']
let ArrayText=[]
let textSplitPerWords=text[0].split(' ')
let textSplitPerChars=text[0].split('')
let textJoinFirstWord=textSplitPerWords.slice(0,3).join(' ')
let textJoinChallengeWord=textSplitPerWords.slice(4,6).join(' ')
let textJoinChallengeAuthor=textSplitPerWords.slice(6,8).join(' ')
const getJavascriptIndex=textSplitPerWords.indexOf('Javascript')
let javascript=textSplitPerWords.slice(getJavascriptIndex,getJavascriptIndex+1).join('')
let CompleteArray=ArrayText.concat(textJoinFirstWord,javascript,textJoinChallengeWord,textJoinChallengeAuthor)
console.log(CompleteArray);
console.log(textSplitPerWords);
console.log(textSplitPerChars);
let getTextContent=document.getElementById('text-content')
function hexColorGenerator(){
    let init='#'
    let hexNum='0123456789abcdefABCDEF'
    for (let i = 0; i < 6; i++) {
        let hexGenerator=Math.floor(Math.random()*hexNum.length)
        init+=hexNum[hexGenerator]
    }
    return init
}
console.log(hexColorGenerator());
function changeColorSpan(){
    let getInsideContainer=document.getElementById('inside-container')
    let getSpan=document.querySelectorAll('.text-indv span')
    getInsideContainer.style.backgroundColor=hexColorGenerator()
    getSpan.forEach(span=>{
        span.style.color=hexColorGenerator()
        span.style.transition='all 2s ease'
    })
}
function changeDirAndColor(){
    if(getTextContent.style.flexDirection==='row'){ 
        getTextContent.style.flexDirection='column'
    }
    else{
        getTextContent.style.flexDirection='row'
    }
}
CompleteArray.forEach(text=>{
    let createDiv=document.createElement('div')
    createDiv.setAttribute('class','text-indv')
    for (let i = 0; i < text.length; i++) {
        let createSpan=document.createElement('span')
        createSpan.setAttribute('class','char-'+i)
        createSpan.innerHTML=text[i]
        createSpan.style.color=hexColorGenerator()
        createDiv.appendChild(createSpan)
    }
    getTextContent.appendChild(createDiv)
})
setInterval(()=>{
    changeDirAndColor(),
    changeColorSpan()
},2000)