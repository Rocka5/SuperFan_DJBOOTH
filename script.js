function changeImg1() {
  document.getElementById("lights").src = "images/DJ_lights.gif";
  var image = document.getElementById("switch1");
  if (image.src.match("images/switch1.jpg")) {
    image.src = "images/switch2.jpg";
    document.getElementById("lights").src = "images/DJ_background.gif";
  } else {
    image.src = "images/switch1.jpg";
    document.getElementById("lights").src = "images/DJ_lights.gif";
  }
}

function blueSong() {
  stopSounds();
  document.getElementById("song1").play();
}

function redSong() {
  stopSounds();
  document.getElementById("song2").play();
}

function greenSong() {
  stopSounds();
  document.getElementById("song3").play();
}

function yellowSong() {
  stopSounds();
  document.getElementById("song4").play();
}

function stopSounds() {
  document.getElementById("song1").pause();
  document.getElementById("song1").currentTime = 0;
  document.getElementById("song2").pause();
  document.getElementById("song2").currentTime = 0;
  document.getElementById("song3").pause();
  document.getElementById("song3").currentTime = 0;
  document.getElementById("song4").pause();
  document.getElementById("song4").currentTime = 0;
}

function volumeUp() {
  adjustVolume("song1", 0.1);
  adjustVolume("song2", 0.1);
  adjustVolume("song3", 0.1);
  adjustVolume("song4", 0.1);
}

function volumeDown() {
  adjustVolume("song1", -0.1);
  adjustVolume("song2", -0.1);
  adjustVolume("song3", -0.1);
  adjustVolume("song4", -0.1);
}

function adjustVolume(audioId, change) {
  var audio = document.getElementById(audioId);
  if (audio) {
    audio.volume = Math.min(1, Math.max(0, audio.volume + change));
  }
}

function STOP() {
  stopSounds();
  document.getElementById("lights").src = "images/black.png";
}
