const audioPlayer = document.getElementById("audioPlayer");
const startBtn = document.getElementById("startBtn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const remainingTimeEl = document.getElementById("remainingTime");

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
  const { currentTime, duration } = audioPlayer;

  if (duration) {
    const percent = (currentTime / duration) * 100;
    progress.style.width = percent + "%";

    currentTimeEl.textContent = formatTime(currentTime);
    remainingTimeEl.textContent = "-" + formatTime(duration - currentTime);
  }
});

audioPlayer.addEventListener("ended", () => {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem(today, "completed");
  renderCalendar();
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return min + ":" + (sec < 10 ? "0" + sec : sec);
}

function renderCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const key = date.toISOString().split("T")[0];

    const day = document.createElement("div");
    day.classList.add("day");

    if (localStorage.getItem(key)) {
      day.classList.add("completed");
    }

    calendar.appendChild(day);
  }
}

renderCalendar();
