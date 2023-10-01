// No 1 Masalah dan solusi nya
let firstSentence='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// regex ini \d ini buat mencari angka dan kita tambahin \d+ melebihkan angka dan /g ini global jadi semua nya ke ambil
let patternFirstSentence=/\d+/g
let extractFirstSentence=firstSentence.match(patternFirstSentence)
// kita jadiin parseint dulu biar ke itung kan di variable first sentence tadi masi String
let sumFirstSentence=extractFirstSentence.reduce((a,b)=>parseInt(a)+parseInt(b),0)
// bisa di liat disini masi string
console.log(extractFirstSentence);
console.log(sumFirstSentence);
// No 2
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
let numPoint=points.join(',').match(/-?\d+/g).map(Number)
let sortedPoint=numPoint.sort((a,b)=>a-b)
let distancePoint=sortedPoint[sortedPoint.length-1]-sortedPoint[0]
console.log(sortedPoint);
console.log(`distancePoint=${distancePoint}`);

// No 3
function validVariable(sentence) {
    let pattern=/^[A-Za-z]*[A-Za-z_]*$/;
    let result=pattern.test(sentence)
    return result
}
console.log(validVariable('firstas_name'));
console.log(validVariable('first-tname'));
console.log(validVariable('1firstname'));
console.log(validVariable('firstname'));

// No 3 In Web
function textCheckerWeb() {
    let Text=document.getElementById('textChecker').value;
    let Result=document.getElementById('resultCheck');
    let pattern=/^[A-Za-z]*[a-zA-Z_]$/
    let resultText=pattern.test(Text)
    Result.innerHTML=`Hasil=${resultText}`
}