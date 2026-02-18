const audioPlayer = document.getElementById("audioPlayer");
const startBtn = document.getElementById("startBtn");

const tracks = [
  "domingo.mp3",
  "lunes.mp3",
  "martes.mp3",
  "miercoles.mp3",
  "jueves.mp3",
  "viernes.mp3",
  "sabado.mp3"
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

  for (let i = 0; i < 30; i++) {
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
