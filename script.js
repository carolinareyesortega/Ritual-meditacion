const audioPlayer = document.getElementById("audioPlayer");
const startBtn = document.getElementById("startBtn");

const tracks = [
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445861/Dia7_kf3qqj.mp3", // Domingo
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445858/Dia1_fbioum.mp3", // Lunes
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445860/Dia2_bip1yp.mp3", // Martes
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445859/Dia3_qdih9z.mp3", // Miércoles
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445858/Dia4_cfa8yf.mp3", // Jueves
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445859/Dia5_teuvsh.mp3", // Viernes
  "https://res.cloudinary.com/dfaws82zj/video/upload/v1771445858/Dia6_en5foj.mp3"  // Sábado
];

function getTodayTrack() {
  const day = new Date().getDay();
  return tracks[day];
}

startBtn.addEventListener("click", () => {
  audioPlayer.src = getTodayTrack();
  audioPlayer.play();
});

audioPlayer.addEventListener("ended", () => {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem(today, "completed");
  renderCalendar();
});

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
