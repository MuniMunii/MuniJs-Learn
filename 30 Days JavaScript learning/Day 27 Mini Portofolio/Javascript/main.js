const jobsList=[
    ['👔','Students'],
    ['🎞','Movie Enthusiast'],
    ['🎻','Classical Music Enthusiast'],
]
const TwoSecond=2000
let currentIndex=0
let getJobsContent=document.getElementById('jobs-content')
let getIcon=document.querySelector('.icon')
function changeJobsList(){
        getJobsContent.innerHTML=jobsList[currentIndex][1]
        getIcon.innerHTML=jobsList[currentIndex][0]
        currentIndex=(currentIndex+1)%jobsList.length
}

setInterval(()=>changeJobsList(),TwoSecond)