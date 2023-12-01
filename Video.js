var img=document.querySelector("img")
var video=document.querySelector("video")
var previousBtn=document.querySelector(".fa-backward")
var playBtn=document.querySelector(".fa-play")
var pauseBtn=document.querySelector(".fa-pause")
var nextBtn=document.querySelector(".fa-forward")
var shuffleBtn=document.querySelector(".fa-shuffle")
var volumeBtn=document.querySelector("#volume")
var videoRange=document.querySelector("#videorange")

var storage=[{ videoSource:"./Images/jkvideo.mp4"  , imageSource:"./Images/jkmusicplayer.jpg" },
    { videoSource:"./Images/shrutivideo.mp4"  , imageSource:"./Images/samajavaragamana.jfif" },

]

var index=0
var realTime=0

pauseBtn.style.display="none"

function playfun(){
    // img.src=storage[index].imageSource
    video.src=storage[index].videoSource
    video.play()
    audioInterval=setInterval(()=>{
        videoRange.value=(video.currentTime/video.duration)*100
    },1000)
    video.currentTime=realTime
    playBtn.style.display="none"
    pauseBtn.style.display="inline"
}

function pausePlay(){
    if(video.paused){
        playfun()
    }
    else{
        video.pause()
        realTime=video.currentTime;
        playBtn.style.display="inline"
        pauseBtn.style.display="none"
    }
}
playBtn.addEventListener("click",pausePlay)
pauseBtn.addEventListener("click",pausePlay)

nextBtn.addEventListener("click",function(){
    index=(index+1)%storage.length
    realTime=0
    playfun()
})
previousBtn.addEventListener("click" ,()=>{
    index=(index-1+storage.length)%storage.length
    realTime=0
    playfun()
})
// volumeBtn.addEventListener("input",()=>{
//     audio.volume=volumeBtn.value
// })
videoRange.addEventListener("input",()=>{
    // clearInterval(audioInterval)
    video.currentTime=(videoRange.value*video.duration)/100 //doubt
    realTime=video.currentTime
})
video.addEventListener("ended", ()=>{
    index=(index+1)%storage.length
    realTime=0
    playfun()
})