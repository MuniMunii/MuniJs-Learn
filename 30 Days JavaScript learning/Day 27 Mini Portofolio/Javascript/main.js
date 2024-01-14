// masalah dan solusi di projek ini
// kita buat Object tentang informasi
const myInformation={
    jobs:[
        ['👔','Students'],
        ['🎞','Movie Enthusiast'],
        ['🎻','Classical Music Enthusiast']
    ],
    info:['Javascript','PHP','CSS','HTML','React']
}
// variable awal/utama
const TwoSecond=2000
let currentIndex=0
let getIcon=document.getElementById('icon')
let getJobsContent=document.querySelectorAll('.jobs-content')

function changeJobsList(){
        // di update dulu jangan taro di bawah karna tidak bakal ke update
        // kita buat variable yang bakal di mengerti
        let getIconFromArray=myInformation.jobs[currentIndex][0]
        getIcon.innerHTML=getIconFromArray
        let getInfoJobsFromArray=myInformation.jobs[currentIndex][1]
        getJobsContent[0].innerHTML=getInfoJobsFromArray
        // kita akan mengambil array secara urutan dengan menggunakan method foreach
        getJobsContent.forEach((jobs)=>{
        // kita akan tambahkan class transition
            jobs.classList.add('transition')
            // addeventlistener ini dengan expresi ketika transitionend/selesai
            jobs.addEventListener('transitionend', function (){
            // kita akan kosongkan semua nya dan meremive class transition
                jobs.innerHTML=''
                getIcon.innerHTML=''
                jobs.classList.remove('transition')
            },{once:true})
            // expresi once:true ini ketika hanya di tampilkan sekali saja
        })
        // currentindex akan di update dengan (0+1)%myinformation.jobs
        // kan current index awal adalah 0 nanti akan terus bertambah sampai array nya abis dan akan di ulang ke awal
        currentIndex=(currentIndex+1)%myInformation.jobs.length
}

function RandomColor(){
    const hexaNum='0123456789abcdef'
    let init='#'
    for (let i = 0; i < 6; i++) {
        let randomGenerator=Math.floor(Math.random()*hexaNum.length)
        init+=hexaNum[randomGenerator]
    }
    return init
}

function addInformation(){
    let getInfoDetail=document.getElementById('info-detail')
    // kita akan ambil array nya secara random menggunakan math.random
    let randomIndex=Math.floor(Math.random()*myInformation.info.length)
    // line ini akan mengambilkan angka array dari random index dari myinformation.info
    let randomInfo=myInformation.info[randomIndex]
    getInfoDetail.style.color=RandomColor()
    getInfoDetail.style.display='inline'
    getInfoDetail.style.visibility='hidden'
    // kita gunakan opacity 0  agar tidak kelihatan dan akan memberikan effect transition
    getInfoDetail.style.opacity='0'
    getInfoDetail.innerHTML=randomInfo
    // ketika sudah 1 detik maka opacity akan menjadi full/1 
    setTimeout(()=>{
        getInfoDetail.style.opacity='1'
        getInfoDetail.style.visibility='visible'
    },1000)
    currentIndex=(currentIndex+1)%myInformation.info.length
}

setInterval(()=>{
    changeJobsList();
},TwoSecond)
setInterval(()=>addInformation(),3000)