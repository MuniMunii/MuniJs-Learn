//No1
//Masalah Yang di alami pada nomor 1 ini jangan lupa menambahkan .value setelah document agar kebaca value nya
function ageres(){
    var age=parseInt(document.getElementById('age').value);
    var resultage=document.getElementById('resultAge');

    if(age >= 18){
    resultage.innerHTML='You Can Drive';
    }
    else{
    resultage.innerHTML='You Cant Drive';
    }
}
//No2
//Masalah yang didapatkan pada nomor 2 adalah Jangan menggunakan value/id yang sama kalo di html yang sama, dan masalah yang di titik merah tolong teliti dengan operational perbandingan >= sama === nya agar if else berfungsi jika memakai >= else if yang memakai === tidak berfungsi karna lebih besar sama
function agedif(){
    var age=parseInt(document.getElementById('aged').value);
    var resultage=document.getElementById('aging');

    if(age > 20){
        resultage.innerHTML=`You are older than me`;
    }
    else if(age === 20){
        resultage.innerHTML=`We are in the same age`;
    }
    else{
        const aged1=20-age
        resultage.innerHTML=`You are ${aged1} years younger than me`;
    }
}
//No3
function odd(){
    var oddeven=parseInt(document.getElementById('oddeven').value);
    var result=document.getElementById('oddevenresult');

    if(oddeven % 2 == 0){
        result.innerHTML=`${oddeven} is even Number`
    }
    else{
        result.innerHTML=`${oddeven} is odd number`
    }
}
//No4
//Notes Switch di javascript tidak bisa memakai operasi perbandingan
function checkgrade(){
    var grade=parseInt(document.getElementById('grades').value);
    var result=document.getElementById('yourgrade');

    if (grade >= 90) {
        result.innerHTML=`Your Grade Is A Congratulation`
    }
    else if(grade >=70){
        result.innerHTML=`Your Grade is B Good Job`
    }
    else if(grade >=60){
        result.innerHTML=`Your Grade is C Great`
    }
    else if(grade >=50){
        result.innerHTML=`Your Grade is D Need More Improvement`
    }
    else{
        result.innerHTML=`You Better studying If You dont wanna Stay class`
    }
}
//No 5
//Masalah Disini saat memakai switch kita harus selalu pasang case buat tambahan pilihan gak bisa di gabung misal 1 case gak bisa di gabung dengan beberapa pilihan seperti contoh case 'value1','value 2 tetapi harus 
//case 'value1'
//case 'value2'
function seasoncheck() {
    var season =document.getElementById('season').value;
    var seasons=season.toLowerCase();
    var result=document.getElementById('seasonnow')

    switch (seasons) {
        case 'januari':
        case 'februari':
        case 'desember':
            result.innerHTML='Now is Winter'
            break;
        case 'maret':
        case'april':
        case 'mei':
            result.innerHTML='Now is Spring'
            break;
        case 'juni':
        case 'juli':
        case 'agustus':
            result.innerHTML='Now is Summer'
            break;
        case 'september':
        case'oktober':
        case 'november':
            result.innerHTML='Now is Autumn'
            break;
        default:
            break;
    }
}

function nowmonths(){
    var months=document.getElementById('months').value;
    var result=document.getElementById('manydays');
    switch (months) {
        case 'januari':
            result.innerHTML='has 31 days'
            break;
        case 'februari':
            result.innerHTML='has 28 days'
            break;
        case 'maret':
            result.innerHTML='has 30 days'
            break;
        case 'april':
            result.innerHTML='has 31 days'
            break;
        case 'mei':
            result.innerHTML='has 30 days'
            break;
        case 'juni':
            result.innerHTML='has 31 days'
            break;
        case 'juli':
            result.innerHTML='has 31 days'
            break;
        case 'agustus':
            result.innerHTML='has 30 days'
            break;
        case 'september':
            result.innerHTML='has 31 days'
            break;
        case 'oktober':
            result.innerHTML='has 30 days'
            break;
        case 'november':
            result.innerHTML='has 31 days'
            break;
        case 'desember':
            result.innerHTML='has 30 days'
            break;
        default:
            result.innerHTML=`There is No ${months} Months`
            break;
    }
}