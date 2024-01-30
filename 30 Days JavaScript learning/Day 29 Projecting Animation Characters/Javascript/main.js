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
let getTextContent=document.querySelector('.text-content')
console.log(textSplitPerWords);
console.log(textSplitPerChars);
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

CompleteArray.forEach(text=>{
    let createDiv=document.createElement('div')
    createDiv.setAttribute('class','text-indv')
    createDiv.textContent=text
    getTextContent.appendChild(createDiv)
})