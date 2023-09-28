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