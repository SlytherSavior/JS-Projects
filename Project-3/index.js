function updateCountdown() {
  const currentDate = new Date();
  const nextYear = currentDate.getFullYear() + 1;
  const newYear = new Date(`January 01 ${nextYear} 00:00:00`);
  const timeLeft = newYear - currentDate;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
  document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);


updateCountdown();
