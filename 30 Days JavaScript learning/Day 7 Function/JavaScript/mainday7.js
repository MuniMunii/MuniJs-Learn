//No 1
function names() {
    let firstName='Ramzi';
    let midName='Akbar';
    let lastName='Ramadhan';
    let fullName=firstName+' '+midName+' '+lastName;
    console.log(fullName);
}
names();

// No 2
function fullName(){
    let firstName=document.getElementById('firstName').value;
    let lastName=document.getElementById('lastName').value;
    let result=document.getElementById('result');
    result.innerHTML=firstName+' '+lastName;
}
// No 2 Function Pakai Return
function fullname2() {
    let firstName="Ramzi"
    let midName="Akbar"
    let lastName="Ramadhan"
    let fullName=firstName+' '+midName+' '+lastName
    return fullName
}
console.log(fullname2());

//No 3 in Website
function sumTwoNumberWeb(){
    let num1=Math.floor(document.getElementById('num1').value);
    let num2=Math.floor(document.getElementById('num2').value);
    let result=document.getElementById('result2')
    if(isNaN(num1) || isNaN(num2)){
        result.innerHTML='harus angka'
    }
    else{
        result.innerHTML=num1+num2;
    }
}


//No 3 With return
function sumTwoNumber(num1,num2){
    let sum=num1+num2
    return sum
}
console.log(sumTwoNumber(3,6));

//No 4 in web
function rectangleFormulaWeb(){
    let num1Rec=Math.floor(document.getElementById('num1rec').value);
    let num2rec=Math.floor(document.getElementById('num2rec').value);
    let resultRec=document.getElementById('resultrec')
    if(isNaN(num1Rec)||isNaN(num2rec)){
        resultRec.innerHTML='Harus Angka'
    }
    else{
        resultRec.innerHTML=num1Rec*num2rec;
    }
}

//No 4 with return
function rectangleFormula(num1RecWeb,num2RecWeb){
    let recCalc=num1RecWeb*num2RecWeb;
    return recCalc;
}
console.log(rectangleFormula(3,8));

//No 5 in Web
function formulaPerimeterRecWeb() {
    let num1Peri=Math.floor(document.getElementById('num1perirec').value);
    let num2Peri=Math.floor(document.getElementById('num2perirec').value);
    let resultPeri=document.getElementById('resultperirec');
    resultPeri.innerHTML=2*(num1Peri+num2Peri);
}

//No 5 with return
function formulaPerimeterRec(num1PeriRec,num2PeriRec) {
    let calcPerimeterRec=2*(num1PeriRec+num2PeriRec);
    return calcPerimeterRec;
}
console.log(formulaPerimeterRec(4,6));

//No 6 in Web
function volumeOfPrismWeb(){
    let num1Length=Math.floor(document.getElementById('num1prism').value);
    let num2Width=Math.floor(document.getElementById('num2prism').value);
    let num3Height=Math.floor(document.getElementById('num3prism').value);
    let resultPrism=document.getElementById('resultformulaprism');
    resultPrism.innerHTML=num1Length*num2Width*num3Height;
}
//No 6 With Return
function volumeOfPrism(prismLength,prismWidth,prismHeight) {
    let calcPrism=prismLength*prismWidth*prismHeight
    return calcPrism
}
console.log(volumeOfPrism(3,4,5));

//No 7 in Web
function areaOfCircleWeb(){
    let num1Circle=parseFloat(document.getElementById('areaofCircle').value);
    let resultAreaCircle=document.getElementById('resultareacircle')
    if(isNaN(num1Circle)){
        resultAreaCircle.innerHTML='Harus Angka'
    }
    else{
        resultAreaCircle.innerHTML=Math.PI*num1Circle*num1Circle;
    }

}

// No 7 with return Function
function areaofCircle(radius){
    let areaCalc=Math.PI*radius*radius
    return areaCalc;
}
console.log(areaofCircle(6));

//No 8 in Web
function circumferenceCircleWeb(){
    let radius=Math.floor(document.getElementById('circumcircle').value)
    let result=document.getElementById('resultcircum')
    if(isNaN(radius)){
        result.innerHTML='harus angka'
    }
    else{
        result.innerHTML=Math.PI*radius*2
    }
}

//No 8 With return
function circumferenceCircle(radius){
    let result=Math.PI*radius*2
    return result
}
console.log(circumferenceCircle(4));

//No 9 in Web
function densityCalcWeb(){
    let Mass=parseFloat(document.getElementById('mass').value)
    let Volume=parseFloat(document.getElementById('volume').value);
    let result=document.getElementById('resultdense');
    if(isNaN(Mass)||isNaN(Volume)){
        result.innerHTML='Harus Angka'
    }
    else{
        result.innerHTML=Mass/Volume+ ' Kepadatan nya';
    }
}

//No 9 With Return
function densityCalc(Mass,Volume) {
    let denseCalc=Mass/Volume
    return denseCalc
}
console.log(densityCalc(3,4));

//No 10 in Web
function speedCalcWeb() {
    let Object=parseFloat(document.getElementById('movingObject').value);
    let Time=parseFloat(document.getElementById('time').value)
    let resultSpeed=document.getElementById('resultSpeed')
    if(Object == 0 || Time == 0 ){
        resultSpeed.innerHTML='Must Have Number'
    }
    else{
        resultSpeed.innerHTML=Object/Time+' Speed Nya'
    }
}

//No 10 With Return
function speedCalc(Distance,Time) {
    let speedResult=Distance/Time;
    return speedResult;
}
console.log(speedCalc(3,4));

//No 11 in Web
function gravityCalcWeb(){
    const Gravity=9.18
    let Mass=parseFloat(document.getElementById('massWeight').value);
    let Result=document.getElementById('resultWeight')
    if (isNaN(Mass)||Mass==0) {
        Result.innerHTML="Input Invalid"
    }
    else{
        Result.innerHTML=Mass*Gravity+' Berat nya'
    }
}

// No 11 With Return Function
function GravityCalc(Mass) {
    const Gravity=9.18
    let gravityResult=Mass*Gravity;
    return gravityResult
}
console.log(GravityCalc(3));

//No 12 In web
function celsiusCalcWeb(){
    let oC=Math.floor(document.getElementById('Celsius').value);
    let resultCelsius=document.getElementById('celsiusResult');
    if(isNaN(oC)||oC==0){
        resultCelsius='Input The correct Value'
    }
    else{
        let fahrenheit=(oC*9/5)+32
        resultCelsius.innerHTML=fahrenheit+' F'
    }
}

//No 12 With return
function celsiusCalc(Celsius){
    let fahrenheit=(Celsius*9/5)+32
    return fahrenheit
}
console.log(celsiusCalc(120));

//No 13 in Web Solusi Dan Logika di Nomor Ini
function BMICalcWeb() {
    let Weight=parseInt(document.getElementById('WeightBMI').value)
    let Height=parseInt(document.getElementById('HeightBMI').value)
    let resultBMI=document.getElementById('BMIResult');
    // pertama Kita ubah dulu height menjadi Centimeter dengan rumus height/100
    let HeightToCm=Height/100
    //Kita gunakan method math.floor agar di bulatkan angka nya
    let BMICalculate=Math.floor(Weight/(HeightToCm*HeightToCm));
    // Kita gunakan nested if untuk kondisi nya if di bawah ini hanya untuk mempercantik 
    //jadi jika yang di input huruf/0 maka akan invalid hasilnya
    if (isNaN(Weight)||isNaN(Height)||Height==0||Weight==0) {
        resultBMI.innerHTML='Input The Correct Number'
    }
    else{
        if (BMICalculate < 18.5) {
            resultBMI.innerHTML=BMICalculate + ' You Are UnderWeight'
        }
        else if(BMICalculate <= 24.9 ){
        resultBMI.innerHTML=BMICalculate+' You are in Normal Condition'
        }
        else if(BMICalculate <= 29.9){
            resultBMI.innerHTML=BMICalculate+' You are Overweight'
        }
        else{
            resultBMI.innerHTML='You Are Obese'
        }
    }
}

//No 13 With Return
function BMICalc(Height,Weight){
    let HeightTocm=Height/100
    let BMICalculate=Math.floor(Weight/(HeightTocm*HeightTocm))
    if (BMICalculate < 18.5) {
        console.log('You Are UnderWeight');
    }
    else if(BMICalculate <= 24.9 ){
    console.log('You are in Normal Condition');
    }
    else if(BMICalculate <= 29.9){
        console.log('You are Overweight');
    }
    else{
        console.log('You Are Obese');
    }
    return BMICalculate
}
console.log(BMICalc(169,55));

//No 14 in web solusi dan logika di nomor ini
function seasonCheckerWeb(){
    // kita jadikan dulu variable month ini ke lower case agar menjadi case insensitive
    let Months=document.getElementById('seasonMonth').value.toLowerCase();
    let Result=document.getElementById('seasonResult');
    //Kita gunakan operator Logika OR agar lebih rapih bisa juga dengan menggunakan case dan break
    if(Months==='januari'||Months==='februari'||Months==='desember'){
        Result.innerHTML='Now is winter season'
    }
    else if(Months==='maret'||Months==='april'||Months==='mei'){
        Result.innerHTML='Now is Spring season'
    }
    else if(Months==='juni'||Months==='juli'||Months==='agustus'){
        Result.innerHTML='Now is Summer season'
    }
    else if(Months==='september'||Months==='oktober'||Months==='november'){
        Result.innerHTML='Now is Autumn Season'
    }
    else{
        Result.innerHTML='Input The Correct months'
    }
}

//No 14 With Return
function webChecker(lowerMonth){
    let Months=lowerMonth.toLowerCase()
    if(Months==='januari'||Months==='februari'||Months==='desember'){
        console.log('Now is Winter');
    }
    else if(Months==='maret'||Months==='april'||Months==='mei'){
        console.log('Now is spring');
    }
    else if(Months==='juni'||Months==='juli'||Months==='agustus'){
    console.log('Now is Summer');
    }
    else if(Months==='september'||Months==='oktober'||Months==='november'){
        console.log('Now is Autumn');
    }
    else{
        console.log('Input correct Month');
    }
    return Months;
}
console.log(webChecker('januari'));

//No 15 solusi disini kita menggunakan math.max dan menggunakan spread operator
///Spread operator(...)ini banyak fungsi nya jika kurang mengerti bisa liat di google Spread Operator function
function findMax(num1,num2,num3){
    let allNum=[num1,num2,num3]
    return Math.max(...allNum)
}
console.log(findMax(3,10,5));

//No 15 Cara ke dua
//Solusi disini kurang optimal karna memakai if else dengan kondisi
//jika num1 lebih besar sama dari num2 dan num1 lebih besar sama dari num3 maka akan return num1.dan seterusnya
function findMax2(num1,num2,num3) {
    let allnum=[num1,num2,num3]
    if (num1>=num2&&num1>=num3) {
        return num1
    }
    else if(num2>=num1&&num2>=num3){
        return num2
    }
    else{
        return num3
    }
}
console.log(findMax2(0,-21,-24));

//No 16 Ini hasil dari chat gpt Mohon maaf karna aku 
//kurang mengerti matematika jadi jika tau solusi dan logika nya nya bisa contak aku
function linearEquation(a,x,b,y,c) {
    const solution=a*x + b*y + c;
    return solution;
}
const aValue=10;
const xValue=4;
const bValue=13;
const yValue=2;
const cValue=12;
let result=linearEquation(aValue,xValue,bValue,yValue,cValue)
console.log(`X=${xValue} Y=${yValue} value calculation ${result}`);

//No 17 ini Juga hasil dari gpt tapi akan ku usahakan jelaskan
//kalo salah maafkan dan kasi saran
function linQuadEquation(a,b,c){
    //jika a sama dengan 0 maka akan muncul log ini bukan equation quadrat
    if(a===0){
        console.log('bukan quadratic equation a Tidak bisa menjadi 0');
    }
    // kita buat variable discriminan dengan value b * b - 4 * a *c
    const discriminant=b * b - 4 * a * c; 
    // jika hasil variable discriminant lebih besar dari 0 maka akan muncul hasil
    if (discriminant > 0 ) {
        //ini hasil nya -b ditambah hasil akar quadrat dari discriminant dan di bagi (2*a) 
        const x1=( -b + Math.sqrt(discriminant)) / (2*a)
        // sama seperti di variable x1 cuma x2 dikurang akar quadrat bukan ditambah
        const x2=( -b - Math.sqrt(discriminant)) / (2*a)
        // kita return hasil nya memakai array
        return [x1,x2]
    }
    else if(discriminant === 0){
        // jika discriminant sama dengan 0 makan akan hasil perhitungan di bawah
        const x= -b / (2*a);
        return [x]
    }
    else{
        console.log('ga ada solusi discriminant < 0');
    }
}
console.log(linQuadEquation());
console.log(linQuadEquation(1,4,4));
console.log(linQuadEquation(1,-1,-2));
console.log(linQuadEquation(1,7,12));
console.log(linQuadEquation(1,0,-4));
console.log(linQuadEquation(1,-1,0));

// No 18 solusi yang ada di nomor ini
function printArray(sArray){
    // Kita jadikan function ini jadi pengubah string ke array dan menambah elemen di setiap kata
    // Kita gunakan method split 
    let StringToArray=sArray.split(' ');
    return StringToArray
}
// kita akan jadikan paragraph ini menjadi array dan memiliki elemen di setiap katanya
let Paragraph='ajh wd auw oduawo upapof'
console.log(printArray(Paragraph));

//No 18 Part 2
// ini solusi mengubah array untuk mengeprint di setiap element nya
function printArray2(iArray) {
    // Kita gunakan for of Loop yang ada di seperti Day 6
    for (const value of iArray) {
        console.log(value);
    }
}
let num=[1,2,3,4,5]
printArray2(num)

//No 19
function showDateTime(){
    let newDate=new Date();
    let day=newDate.getDay();
    let month=newDate.getMonth();
    let Years=newDate.getFullYear();
    let Hours=newDate.getHours();
    let Minute=newDate.getMinutes();
    console.log(`${day}/${month}/${Years}/ ${Hours}:${Minute}`);
}
showDateTime();

//No 20 solusi untuk masalah ini
function swapValue(x,y) {
    // pertama kita menyimpan dulu value x nya dengan variable swap
    let swap=x;
    // kita samakan value x dengan y
    x=y;
    // dan samakan value y dengan swap
    y=swap;
    // return [x,y] agar hasil nya terbentuk seperti array
    return [x,y]
    // alasan kenapa tidak langsung y=x dan harus menyimpan value x terlebih dahulu
    // karna nanti  hasil nya tidak akan ke swap malahan menjadi sama nilainya
}
console.log(swapValue(3,4));
console.log(swapValue(4,5));

//No 21 solusi di nomor ini 
function reverseSortArray(reverseArray){
    // kita gunakan method sort dan kita gunakan function => agar mengubah dari b ke a
    // return reverseArray.sort((a,b)=>b-a)
    // Kita juga bisa memakai reverse()
    return reverseArray.reverse()
}
let arrayNum=[1,2,3,4,5]
let arrayChar=['A','B','C']
console.log(reverseSortArray(arrayNum));
console.log(reverseSortArray(arrayChar));

//No 22 cara ini sama seperti yang ada di materi Loop day 6
function capitalizedArray(Array) {
    let emptyArray=[]
    for (let i = 0; i < Array.length; i++) {
        emptyArray.push(Array[i].toUpperCase())
    }
    return emptyArray
}
let arrayLow=['a','b','c']
console.log(capitalizedArray(arrayLow));

//No 23 Cara pertama
function addItem(...Array){
    let emptyArray=[1,2,3,4]
    emptyArray.push(Array)
    return emptyArray
}
console.log(addItem('2',2,4,5));

//No 23 Cara kedua
function addItem2(Array,...item) {
    Array.push(item)
    return Array
}
let arrayAdd=['a','f','g']
console.log(addItem2(arrayAdd,"c",'s',3,4));

//No 24
function removeItem(Array,index) {
    let removedIndex=Array.slice(index)
    return removedIndex
}
let arrayRemove=['a','f','g']
console.log(removeItem(arrayRemove,1));

//No 25 solusi disni
function sumNumber(Number) {
    // jangan lupa untuk membuat initialisasi nya dlu untuk di tambah
    let sum=0
    for (let i = 0; i <= Number; i++) {
        sum += i
    }
    return sum
}
console.log(sumNumber(100));

//No 26
function sumOddNumber(Number){
    let oddSum=0
    for (let i = 0; i <= Number; i++) {
        if(i % 2==1){
            oddSum += i
        }
    }
    return oddSum
}
console.log(sumOddNumber(100));

//No 27
function sumEvenNumber(Number){
    let evenSum=0
    for (let i = 0; i <= Number; i++) {
        if (i % 2==0) {
            evenSum+=i
        }
    }
    return evenSum
}
console.log(sumEvenNumber(100));

//No 28
// solusi nya sama yang seperti di atas cuman kita memakai operator increment ++ bukan += karna hanya menambah 1
// Bukan menghitung semua/Sum
function countOddAndEven(Number) {
    let odd=0
    let even=0
    for (let i = 0; i <= Number; i++) {
        if (i %2==0) {
            even++
        }
        else if(i %2==1){
            odd++
        }
    }
    return [odd,even]
}
console.log(countOddAndEven(100));

//No 29
function sumNumber(...Number){
    let sum=0
    for (const value of Number) {
        sum+=value
    }
    return sum
}
console.log(sumNumber(1,2,3));

//No 30
function randomHexaGenerator(){
    const hexaNum=('0123456789abcdef')
    let hexaId='#'
    for (let index = 0; index < 6; index++) {
        let randomGenerator=Math.floor(Math.random()*hexaNum.length)
        hexaId+=hexaNum[randomGenerator]
    }
    return hexaId
}
console.log(randomHexaGenerator());

//No 31
// Jangan lupa menggunakan Math.floor untuk membulatkan bilangan saat nge random angka
//Bisa memakai Parameter/tidak tergantung,jika ingin memakai param tinggal mengubah iterasi nya saja di loop
function random7Id(Number){
    const ranNum='1234567890asdfghjklqwertyuiopzxcvbnmQWERTYIOPASDFGHJKLZXCVBNM';
    let id=''
    for (let i = 0; i < Number; i++) {
        let ranNumGenerator=Math.floor(Math.random()*ranNum.length);
        id+=ranNum[ranNumGenerator]
    }
    return id
}
console.log(random7Id(7));

//No 32 
//Masalah dan solusi di Nomor ini
function randomIdGenerator() {
    const randomNum='1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    // Pertama kita casting dulu agar menjadi integer
    let enterId=parseInt(prompt("How many Id You Want to show"));
    let enterChar=parseInt(prompt("How Many Characters You want"));
    let Result=document.getElementById('resultIdGenerator');
    let id=''
    // Kita Buat Nested For yang for pertama kita buat untuk id
    for (let i = 0; i < enterId; i++) {
        // Yang kedua untuk berapa char nya
        for (let j = 0; j < enterChar; j++) {
            let RandomNumber=Math.floor(Math.random()*randomNum.length);
            id += randomNum[RandomNumber]
        }
        // Dan kita tambahkan di for id \n agar ke line baru di setiap id nya
        id += '\n'
    }
    // kita tidak memakai return karna ini akan di tampilan di dalam web
    Result.innerHTML=id;
}

//No 33
function rgbGenerator(){
    let RGB=''
    for (let i = 0; i < 3; i++) {
        let rgbRandom=Math.floor(Math.random()*256)
        RGB+=rgbRandom
        if (i<2) {
            RGB+=','
        }
    }
    // Gunakan Return juga bisa jika ingin console.log di luar function
    // return `RGB(${RGB})`
    console.log(`RGB(${RGB})`);
}
rgbGenerator()

//No 34
function hexaArrayGenerator(){
    let hexaArray=[]
    let hexaNum=('0123456789abcdef')
    for (let i = 0; i < 6; i++) {
        let hexaNumRandom=Math.floor(Math.random()*hexaNum.length);
        hexaArray.push(hexaNum[hexaNumRandom])
    }
    console.log(hexaArray);
}
hexaArrayGenerator()

//No 35
function rgbGeneratorArray() {
    let rgbArray=[]
    for (let i = 0; i < 3; i++) {
        let rgbrandom=Math.floor(Math.random()*256);
        rgbArray.push(rgbrandom)
    }
    console.log(rgbArray);
}
rgbGeneratorArray()

//No 36 
// masalah dan solusi di Nomor ini
// Sebenernya ada cara lebih mudah dengan menginstal npm hexconverter
// tetapi karna blom di ajarin di materi sebelum nya jadi kita gak pake package nya
function convertHextoRGB(r,g,b) {
    // Ini mendefinisikan sebuah fungsi bernama toHex dengan menggunakan sintaksis arrow function.
    let toHex=(value)=>{
        // disini kita mengubah value ke tostring(16)karna angka hexadecimal ada 16
        const Hex=value.toString(16);
        // ini kita memakai ternary operator fungsi nya sama kaya if else
        // kalo panjang hex sama dengan 1 maka akan di tambahkan 0 dan di tambah Hex (0f) jika salah hanya variable hex saja yang akan muncul (f)
        return Hex.length === 1 ? '0' + Hex : Hex;
    }
    let red=toHex(r)
    let green=toHex(g)
    let blue=toHex(b)
    return '#'+red+green+blue
}
console.log(convertHextoRGB(255,128,0));

//No 37 masalah dan solusi di nomor ini
function hexaToRGBWeb() {
    let hexaNumber=document.getElementById('hexaNumber').value;
    // Pertama kita hapuskan dulu lambang # dengan menggunakan method replace
    hexaNumber=hexaNumber.replace('#','');
    let result=document.getElementById('resultHexaRGB');
    
    // kita parseint semua variable nya dan kita extraks string nya dari index (0,2) dan parameter nya 16
    // jadi misalkan #ff8000 index 0 sampai 2 nya di ekstrak jadi ff nah ff nya di jadikan Integer
    const r=parseInt(hexaNumber.substring(0,2),16);
    const g=parseInt(hexaNumber.substring(2,4),16);
    const b=parseInt(hexaNumber.substring(4,6),16);

    return result.innerHTML=`RGB(${r},${g},${b})`;
}

// No 38
// masalah dan solusi di Nomor ini
function generateColor(Type,Hmuch){
    let arrayHex=[];
    let arrayRGB=[];
    const hexaNum=('0123456789abcdef')
    if (Type==='hex') {
        for (let i = 0; i < Hmuch; i++) {
            let idHex='#';
            for (let j = 0; j < 6; j++) {
                let randomHexNum=Math.floor(Math.random()*hexaNum.length);
                idHex+=hexaNum[randomHexNum]
            }
            arrayHex.push(idHex)
        }
        return arrayHex
    }
    // disini awal nya bingung tapi solusi nya ternyata
    else if(Type==='rgb'){
        // hanya buat math random di masing kata rgb 
        // kesalahan awal memakai nested for loop dan gak dipisah nanti hasil nya akan selalu berkelipatan
        // dan bakal hasil nya lebih dari 100 kata gak sesuai dengan Hmuch 
        for (let i = 0; i < Hmuch; i++) {
            let r=Math.floor(Math.random()*256);
            let g=Math.floor(Math.random()*256);
            let b=Math.floor(Math.random()*256);
            arrayRGB.push(`RGB(${r},${g},${b})`)
        }
        return arrayRGB
    }
}
console.log(generateColor('rgb',4));

// No 39
function shuffleArray(Array) {
    let emptyArray=[]
    for (let i = 0; i < Array.length; i++) {
        let shufflingArray=Math.floor(Math.random()*Array.length);
        emptyArray.push(shufflingArray)
    }
    return emptyArray
}
let arrayShuffleExample=[1,2,3,4,5]
console.log(shuffleArray(arrayShuffleExample));

//No 40
// Solusi di nomor ini tinggal memakai *=
function factorialNumber(Number) {
    let factorialNum=1
    for (let i = 1; i <= Number; i++) {
        factorialNum *= i
    }
    return factorialNum
}

console.log(factorialNumber(5));

//No 41 solusi dan masalah di nomor ini
function isEmpty(Arrays){
    // Pertama Kita buat operational if dengan kondisi jika arrays.Length === 0 maka akan return array kosong
    if(Arrays.length===0){
        return 'Empty Array'
    }
    else{
        // untuk iterator Array seperti menambahkan sum atau seperti ini di sarankan pakai For Of
        for (const ArrayI of Arrays) {
            // Kita gunakan kondisi jika Array is Null/undifined/kosong maka akan return ada array yang value nya empty
            if (ArrayI===null||ArrayI===undefined||ArrayI==='') {
                return 'There is array with empty value'
            }
        }
    }
    // Jika ga ada empty value
    return 'There is no emptyArray'
}
let emptyArray=[]
console.log(isEmpty(emptyArray));

//No 42 Part 1
function sumAllNumberArray(Number) {
    let Num=0
    for (let i = 0; i < Number.length; i++) {
        Num+=Number[i]
    }
    return Num
}
let arrayNumber=[1,2,3,4,5]
console.log(sumAllNumberArray(arrayNumber));

//No 42 Part 2
function sumAllNumber(Number) {
    let Num=0
    for (let i = 0; i <= Number; i++) {
        Num+=i
    }
    return Num
}

console.log(sumAllNumber(2));

//No 43
// Masalah dan solusi di nomor ini
function checkTypeAndSum(Array){
    let Num=0
    // Kita buat percabangan dengan kondisi Array.some
    // Method some ini untuk ngecek elemen di array apakah cocok/tidak,method ini mirip dengan includes bisa di cek di google untuk melliat perbedaan nya
    // dan kita chech apakah typeof item nya !== tidak sama dengan number maka akan return tidak bisa
    if (Array.some(item => typeof item !=='number')) {
        return 'sorry we cannot sum the array because invalid type'
    }
    else{
        for (let i = 0; i <= Array.length; i++) {
            Num+=Array[i]
        }
        return Num
    }
}

let arrayChars=[1,3,'2','4']
console.log(checkTypeAndSum(arrayChars));

// No 44
function checkAverage(Array) {
    if (Array.some(item => typeof item !== 'number')) {
        return 'Invalid Type cant check Average'
    }
    else{
        let num=0
        if (Array===0) {
            return 0;
        }
        else{
            for (let i = 0; i < Array.length; i++) {
                num+=Array[i]
            }
            return num/Array.length
        }
    }
}

console.log(checkAverage(arrayNumber));

//No 45
function modifyArray(...Array){
    if (Array.length <= 5) {
        return 'Not Found'
    }
    let emptyArray=[]
    for (let i = 0; i < Array.length; i++) {
            emptyArray.push(Array[i])
        }
    return emptyArray
}
console.log(modifyArray('Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'));
console.log(modifyArray('Google', 'Facebook','Apple', 'Amazon','Microsoft', 'IBM'));
console.log(modifyArray('Google', 'Facebook','Apple', 'Amazon'));

//No 46
function primeCalcWeb(){
    let numberPrime=parseInt(document.getElementById('numberPrime').value);
    let Result=document.getElementById('resultPrime')

    if (numberPrime <= 1) {
        return 'The Number Is Not Prime Number'
    }
    else{
        let Prime=true
        for (let i = 2; i < Math.sqrt(numberPrime); i++) {
            if (numberPrime % i===0) {
                Prime=false;
                break;
            }
        }
        if(Prime){
            Result.innerHTML='The Number Is Prime Number'
        }
        else{
            Result.innerHTML='The Number is not Prime Number'
        }
    }
}