const audioPlayer = document.getElementById("audioPlayer");
const startBtn = document.getElementById("startBtn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const remainingTimeEl = document.getElementById("remainingTime");
const streakEl = document.getElementById("streak");

const tracks = [
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445861/Dia7_kf3qqj.mp3",
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445858/Dia1_fbioum.mp3",
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445860/Dia2_bip1yp.mp3",
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445859/Dia3_qdih9z.mp3",
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445858/Dia4_cfa8yf.mp3",
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445859/Dia5_teuvsh.mp3",
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445858/Dia6_en5foj.mp3"
];

function getTodayTrack() {
  const day = new Date().getDay();
  return tracks[day];
}

startBtn.addEventListener("click", () => {
  audioPlayer.src = getTodayTrack();
  audioPlayer.play();
});

audioPlayer.addEventListener("timeupdate", () => {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  if (!duration) return;

  const percent = (currentTime / duration) * 100;
  progress.

