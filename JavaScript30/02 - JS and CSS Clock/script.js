const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  // get seconds
  const second = now.getSeconds();
  // convert seconds into degree
  const secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  // get minitue
  const minutes = now.getMinutes();
  // convert minute into degree
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minuteDegrees}deg)`;

  // get hour
  const hour = now.getHours();
  // convert hour into degree
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  // prevent clock from reloading
  if (second === 0 || minutes === 0 || hour === 0) {
    secondHand.style.transitionDuration = "0s";
    minHand.style.transitionDuration = "0s";
    hourHand.style.transitionDuration = "0s";
  } else {
    secondHand.style.transitionDuration = "0.05s";
    minHand.style.transitionDuration = "0.05s";
    hourHand.style.transitionDuration = "0.05s";
  }
}

setInterval(setDate, 1000);