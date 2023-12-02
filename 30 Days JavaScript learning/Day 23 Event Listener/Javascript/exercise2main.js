
// Masalah dan Solusi Di exercise ini
let getNumberButton=document.querySelector('.pressed-number')
let getKeyPressed=document.querySelector('.pressed-key')
let getSpan=document.createElement('span')
// kita gunakan namanya eventlistener dan callback function
document.body.addEventListener('keypress',e=>{
    // kita isi text nya dengan e.keycode
    // method keycode ini menunjukan code yang ada di keyboard
    getNumberButton.innerHTML=e.keyCode
    // method key akan menampilkan huruf/dll yang ada di keyboard 
    getSpan.textContent=e.key
    getSpan.style.color='green'
    if(e.key===' '){
        // kita buat span buat bewarna elemen key nya
        let spaceColor=document.createElement('span')
        getKeyPressed.innerHTML='You Pressed '
        spaceColor.textContent='Spacebar'
        spaceColor.style.color='green'
        getKeyPressed.appendChild(spaceColor)
    }
    else{ 
        getKeyPressed.innerHTML=`You Pressed `
        getKeyPressed.appendChild(getSpan)
    }
})