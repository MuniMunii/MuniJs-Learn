// masalah dan solusi yang ada di project ini
// pertama kita buat function primechecker agar bisa mendetect mana bilangan yang prime
function primeChecker(num){
    // jika num di bawah sama dengan 1 maka akan false
    if(num<=1){
        return false
    }
    // kita buat loopan dengan expresi dimulai inilisiasi dari 2
    // jika i lebih kecil dari akar kuadrat num maka akan di tambah
    for (let i = 2; i < Math.sqrt(num); i++) {
        // jika num bisa di bagi dengan sisa maka num bukan bilangan prima
        if(num%i===0){
            return false
        }
    }
    return true
}

let result=document.getElementById('contents')
// kita buat perulangan 0 sampai 101 
for (let i = 0; i <= 101; i++) {
    // buat document h1 dulu
    let title=document.createElement('h1')
    // kita style in variable title yang dibuat dari document create elemen
    title.style.padding='8px'
    title.style.margin='4px'
    title.style.width='100px'
    title.style.backgroundColor='#333'
    title.style.textAlign='center'
    // kita masukan isi text nya make hurup loopan tadi
    title.textContent=`${i}`;
    // ini jika sisa 0 sampai 5 akan di buatkan div biar bisa turun ke bawah pake style flex
    if(i%5===0){
        let div=document.createElement('div')
        div.className='row'
        result.appendChild(div)
    }
    // jika hurup nya odd maka background kuning
    if(i%2===1){
        title.style.backgroundColor='yellow'
    }
    // ini kalo genap maka akan ijo
    if(i%2===0){
        title.style.backgroundColor='green'
    }
    // ini jika angka nya prime maka akan jadi merah
    // pakai function yang kita buat tadi di atas
    if(primeChecker(i)){
        title.style.backgroundColor='red'
    }
    // line ini agar kita memasukan line terakhir dari variable result agar class row nya berfungsi
    result.lastChild.appendChild(title)
}