    var audio = document.getElementById("audioArrow");
    var audioSylv = document.getElementById("audioSyl");
     var audioFir = document.getElementById("audioFire");
    var testee = document.getElementById("imgSound");

function flechaScroll(){
    var flecha = document.getElementById("flechaId");
    var arco = document.getElementById("arcoId");
    setTimeout(() => {
    var song = document.getElementById('sylSong')
      var mapaScroll = document.getElementById("scrollMap");
      audioSylv.pause();
      audioFir.pause();
      audio.volume = 0.2;
      audio.play();
      arco.classList.add("arcoNovo");
      mapaScroll.scrollIntoView();
    }, 300);
  
    setTimeout(() => {
      flecha.classList.add("batata");
    }, 1500);
  }

  
function audioOn(){
    audioFir.volume = 0.09;
    audioSylv.volume = 0.5;
    audioSylv.play();
    audioFir.play();
    testee.style.display = "none"
}
