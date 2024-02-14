const progressBar = document.getElementById("progressBar");
const song = document.getElementById("song");
const play = document.querySelector(".fa-play");

song.onloadedmetadata = function () {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
};
function playPause() {
  if (play.classList.contains("fa-pause")) {
    song.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
  } else {
    song.play();
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
  }
}
if (song.play) {
  setInterval(() => {
    progressBar.value = song.currentTime;
  }, 500);
}
progressBar.onchange = function () {
    song.play()
  song.currentTime = progressBar.value;
  play.classList.add("fa-pause");
  play.classList.remove("fa-play");
};
