let ic= document.querySelector('i');
let ad= document.querySelector('audio');
let track= document.querySelector('#track');
let time=0;
let idx;
ad.addEventListener('loadedmetadata', function(){
    track.setAttribute('max',ad.duration);  
});   
function adplay(){
   ad.play(); 
}   
function adpause(){
     ad.pause();
    
}   
function changetime(dur){
      ad.currentTime=dur;
}
ic.addEventListener('click',()=>{
       if(ic.classList.contains('fa-pause')){
           ic.classList.add('fa-play');
           ic.classList.remove('fa-pause');
           adpause();
       }
       else{
         ic.classList.add('fa-pause');
         ic.classList.remove('fa-play');
         adplay();
       }   
})
ad.addEventListener('ended',()=>{
        clearInterval(idx);
        ic.classList.add('fa-play');
        ic.classList.remove('fa-pause');    
})  
track.addEventListener('input',()=>{
           ad.currentTime= track.value;
}) 
ad.addEventListener('playing',()=>{
        clearInterval(idx);
        idx = setInterval(() =>{
             track.value=ad.currentTime;
             console.log(track.value);
        },1000);
}) 

