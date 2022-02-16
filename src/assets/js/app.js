// console.log('file 1');
// console.log('adasdada')

const player = document.querySelector('.player'),
      playBtn = document.querySelector('.btn_play'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress-parent'),
      progress = document.querySelector('.progres'),
      title = document.querySelector('.song'),
      imgSrc = document.querySelector('.img_src')
      mixer = document.querySelector('.mixer'),
      timeNow = document.querySelector('.current-time'),
      allTime = document.querySelector('.all-time')


      

function playSong(){
    imgSrc.src= "assets/images/pause_h.png"
    imgSrc.classList.add('play')
    audio.play()
    
}
function pauseSong(){
    
    imgSrc.src= "assets/images/play_h.png"

    
    imgSrc.classList.remove('play')
    audio.pause()
}

playBtn.addEventListener('click',function(){

    if(! imgSrc.classList.contains('play')){
          playSong()
    }else {
      pauseSong()
       }

})

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = ( currentTime / duration ) * 100
    progress.style.width = `${progressPercent}%`
    mixer.style.left = (progressPercent - 1 ) +'%'
    const minutesn = Math.floor(currentTime / 60).toString().padStart(2,'0') 
    const secn = Math.floor(currentTime % 60).toString().padStart(2,'0') 
    const minutes = Math.floor(duration / 60).toString().padStart(2,'0') 
    const sec = Math.floor(duration % 60).toString().padStart(2,'0') 


    
    
    timeNow.innerText = minutesn + ':' + secn
    allTime.innerText = minutes + ':' + sec


}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
     
    audio.currentTime = (clickX / width) * duration

}

progressContainer.addEventListener('click', setProgress)


