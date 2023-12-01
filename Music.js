
var image=document.querySelector("img")
var audio=document.querySelector("audio")
var previousBtn=document.querySelector(".fa-backward")
var pauseBtn=document.querySelector(".fa-pause")
var playBtn=document.querySelector(".fa-play")
var nextBtn=document.querySelector(".fa-forward")
var shuffleBtn=document.querySelector(".fa-shuffle")
var volumeBtn=document.querySelector("#volume")
var audioRange=document.querySelector("#audiorange")
var audioInterval=null
//console.log(image,audio,previousBtn,pauseBtn,playBtn,nextBtn,shuffleBtn,volumeBtn);


var storage=[
                {audioSource : "./Images/Agust D - 대취타 (Daechwita) [129 kbps].mp3" ,                imageSource : "./Images/daechwita.jpg" },
                {audioSource :  "./Images/Magic Shop - BTS- [MyMp3Bhojpuri.In].mp3"   ,                imageSource : "./Images/magic.jpg" },
                {audioSource : "./images/Nee-Chitram-Choosi(PagalWorlld.Com).mp3" , imageSource : "./images/nii chitram choosi.jfif" },
                {audioSource : "./images/Samajavaragamana-Hindi(PagalWorldl).mp3" , imageSource : "./images/samajavaragamana.jfif"},
                {audioSource : "./Images/BTS - MIC Drop Mp3 Song Download.mp3" ,                      imageSource : "./Images/micdrop.jpg" }
            ]                                                           //creating objects in array

// console.log(storage[1].imageSource);
// console.log(storage[3].audioSource);

var index=0
var realTime=0//to start from where audio is paused
pauseBtn.style.display="none"
function playfun(){
    image.src=storage[index].imageSource
    audio.src=storage[index].audioSource
    audio.currentTime=realTime
    //by default we have play() function-- which automatically plays the song
    audio.play() 
    audioInterval=setInterval(()=>{
        audioRange.value=(audio.currentTime/audio.duration)*100
    },1000)
    playBtn.style.display="none"
    pauseBtn.style.display="inline-block"                                   
                    
}

function pausePlay(){
    if(audio.paused){
      playfun() 
    }
    else{
        audio.pause()
        realTime=audio.currentTime
        playBtn.style.display="inline-block"    
    pauseBtn.style.display="none" 
           
    }
}
playBtn.addEventListener("click",pausePlay)
pauseBtn.addEventListener("click",pausePlay)

nextBtn.addEventListener("click",function (){
    // index=(index+1)%storage.length
    index=index+1
    realTime=0
    playfun()
})
previousBtn.addEventListener("click",()=>{
    index=(index-1+storage.length)%storage.length
    realTime=0
    playfun()
})

volumeBtn.addEventListener("input",()=>{
    audio.volume=volumeBtn.value
})
audioRange.addEventListener("input",()=>{
    clearInterval(audioInterval)
    audio.currentTime=(audioRange.value*audio.duration)/100 //doubt
    realTime=audio.currentTime
})

//to play next song when this song is completed ended
audio.addEventListener("ended", ()=>{
    index=(index+1)%storage.length
    realTime=0
    playfun()
})


