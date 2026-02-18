const audioPlayer = document.getElementById("audioPlayer");
const startBtn = document.getElementById("startBtn");

const tracks = [
  "audio/Dia7.mp3", // Domingo
  "audio/Dia1.mp3", // Lunes
  "audio/Dia2.mp3", // Martes
  "audio/Dia3.mp3", // Miércoles
  "audio/Dia4.mp3", // Jueves
  "audio/Dia5.mp3", // Viernes
  "audio/Dia6.mp3"  // Sábado
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
