const myInformation={
    jobs:[
        ['👔','Students'],
        ['🎞','Movie Enthusiast'],
        ['🎻','Classical Music Enthusiast']
    ],
    info:['Javascript','PHP','CSS','HTML']
}
const TwoSecond=2000
let currentIndex=0
let getIcon=document.getElementById('icon')
let getJobsContent=document.querySelectorAll('.jobs-content')
let getInfoDetail=document.querySelector('.info-detail')
function changeJobsList(){
        // di update dulu jangan taro di bawah karna tidak bakal ke update
        getIcon.innerHTML=myInformation.jobs[currentIndex][0]
        getJobsContent[0].innerHTML=myInformation.jobs[currentIndex][1]
        getJobsContent.forEach((jobs)=>{
            jobs.classList.add('transition')
            jobs.addEventListener('transitionend', function (){
                jobs.innerHTML=''
                getIcon.innerHTML=''
                jobs.classList.remove('transition')
            },{once:true})
        })
        currentIndex=(currentIndex+1)%myInformation.jobs.length
}
function addInformation(){
    myInformation.info.forEach(info=>{
        getInfoDetail.innerHTML=info
    })
}
setInterval(()=>{
    changeJobsList();
},TwoSecond)
setInterval(()=>addInformation(),TwoSecond)