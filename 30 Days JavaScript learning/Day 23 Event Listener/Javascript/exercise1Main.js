function primeChecker(num){
    // jika num di bawah sama dengan 1 maka akan false
    if(num<=1){
        return false
    }
    // kita buat loopan dengan expresi dimulai inilisiasi dari 2
    // jika i lebih kecil dari akar kuadrat num maka akan di tambah
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // jika num bisa di bagi dengan sisa maka num bukan bilangan prima
        if(num%i===0){
            return false
        }
    }
    return true
}
// Masalah dan Solusi di function ini
function Generate() {
    let getInputNumber=document.querySelector('#input-generator').value
    let getNumberResult=document.querySelector('.number-generator')
    let getWrongNotif=document.querySelector('#wrong-input')

    if (getInputNumber === '') {
        getWrongNotif.innerHTML = 'Must Input Value';
    } 
    else if (isNaN(getInputNumber)) {
        getWrongNotif.innerHTML = 'Input Value Must be a Number';
    }
    else{
        getNumberResult.innerHTML=''
        for (let index = 0; index < getInputNumber; index++) {
            let createH1=document.createElement('h1')
            createH1.style.textAlign='center'
            createH1.style.padding='10px'
            createH1.style.width='3em'
            createH1.style.margin='4px'
            createH1.textContent=`${index}`
            // jika ingin menggunakan DOM buat lah secara urutan dengan misalnya prime dulu baru ganjil/genap
            // karna css juga ngambil nya dari yang paling bawah
            if (primeChecker(index)) {
                createH1.style.backgroundColor = 'green';
            } 
            else if (index % 2 === 0) {
                createH1.style.backgroundColor = 'red';
            } 
            else {
                createH1.style.backgroundColor = 'yellow';
            }
            getNumberResult.appendChild(createH1)
        }
    }
}