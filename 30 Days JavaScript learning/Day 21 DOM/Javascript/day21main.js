// No 1
let getFirstP=document.querySelector('p')
console.log(getFirstP);
// No 2
let getMuniId=document.getElementById('Muni')
console.log(getMuniId);
// No 3
let getAllP=document.querySelectorAll('p')
for (let i = 0; i < getAllP.length; i++) {
    console.log(getAllP[i]);
}
// No 4
let getMuniNode=document.querySelectorAll('#Muni')
console.log(getMuniNode);
// No 4
let fourthP=document.querySelectorAll('p')
fourthP[3].textContent='Muni ke empat'

// No 5
// penjelasan disini
// jika menggunakan set atribute class nya akan di override jika ada codingan di bawah nya
fourthP[1].setAttribute('class','tittle')
fourthP[1].setAttribute('class','tittle-override')
// method tanpa setAttribute juga bisa mengoverride
fourthP[1].id='Muni2'
// fourhp[1].class='tittle3'
// kalo menggunakan classList.add dia tidak akan mengoverride melainkan akan menambahkan nya
fourthP[2].classList.add('class','header-tittle','aa')
// kita juga bisa meremove nya tinggal memakai methode .remove
// fourthP[2].classList.remove('class','header-tittle','aa')

// No 6
// fourthP[1].style.color='#66ff23';
// fourthP[2].style.fontSize='2rem';

// No 7
for (let i = 0; i < fourthP.length; i++) {
    if(i % 2 == 1){
        fourthP[i].style.color='red'
    }
    else{
        fourthP[i].style.color='green'
    }
}

// No 8
fourthP[3].textContent='muniiiiiiiiiii'