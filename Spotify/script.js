console.log("welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("./songs/Shape of You - Ed Sheeran.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
  {
    songName: "Shape of You",
    filePath: "./songs/Shape of You - Ed Sheeran.mp3",
  },
  {
    songName: "salam-e-Ishq",
    filePath:
      "./songs/vlog-music-beat-trailer-showreel-promo-background-intro-theme-274290 (1).mp3",
  },
  { songName: "salam-e-Ishq", filePath: "songs/1.mp3" },
  { songName: "salam-e-Ishq", filePath: "songs/1.mp3" },
  { songName: "salam-e-Ishq", filePath: "songs/1.mp3" },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-circle-play");
  }
});

audioElement.addEventListener("timeupdate", () => {
  //   console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //   console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
