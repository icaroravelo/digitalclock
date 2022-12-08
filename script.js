// Week Days

const weekDays = document.getElementById("weekday");
const monthDate = document.getElementById("month")

const week = ["Domingo", "Segunda-feira, ", "Terça-feira, ", "Quarta-feira, ", "Quinta-feira, ", "Sexta-feira, ", "Sábado, "]
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

// Digital Watcher

setInterval(showtime, 1000);

function showtime() {
  const time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var seconds = time.getSeconds();
  var weekDay = time.getDay();
  var fullday = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var currentTime = hour + " " + ":" + " " + minute + " " + ":" + " " + seconds;

  weekDays.textContent = week[weekDay];
  monthDate.textContent = months[month];

  document.getElementById("clock").innerHTML = currentTime;
  document.getElementById("fullday").innerHTML = fullday;
  document.getElementById("year").innerHTML = year;
};

showtime();
