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
// No 4 masalah dan solusi di nomor ini
let  paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
function mostFrequentWords(text,numSlice){
    // pattern disini adalah \b untuk ngecek karakter apakah itu nomor,huruf,_ jika selain itu maka tidak akan dibaca
    // dan [a-zA-Z]+ jika huruf yang di dalam [] lebih dari sekali kemunculan nya dan di tutup dengan \b lagi, gi itu artinya global dan case insensitive
    let pattern=/\b[a-zA-Z]+\b/gi
    // kita buat variable nya menjadi array agar bisa di baca kalimat nya pakai Array.from dan text.match(pattern)apakah sama dengan pattern nya
    let extractArray=Array.from(text.match(pattern))
    // kita hitung array nya makai reduce ada di day 9 jika ingin melihat nya ulang
    let countArray=extractArray.reduce((count,text)=>{
        count[text]=(count[text]||0)+1;
        return count;
    },{})
    // kita ambil key nya dari count array dan kita jadikan object menggunakan map
    let arrayKeys=Object.keys(countArray).map(Text=>({
        Text,
        count:countArray[Text]
    })).slice(0,numSlice).sort((a,b)=>b.count-a.count)
    return arrayKeys
}
console.log(mostFrequentWords(paragraph));

// No 5 masalah disini 
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
function clearText(sentence) {
    // kita cari pattern nya dulu [@#$%&;] kita masukan simbol unik nya
    let pattern=/[@#$%&;]/gi
    // abis itu kita replace pattern tadi dengan string kosong
    let clearTexts=sentence.replace(pattern,'')
    return clearTexts
}
console.log(clearText(sentence));
// ini kita pakai double function dari no 4 tadi
console.log(mostFrequentWords(clearText(sentence),3));
