// play sound
function playsound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

	if (!audio) return; // stop the function for all keys together
	audio.currentTime = 0; // rewind to start

	audio.play();
	key.classList.add("playing");
}

// remove transform
function removeTransition(e) {
	if (e.propertyName !== "transform") return; // skip it if it is not transform animation

	// remove playing class from current key clicked
	this.classList.remove("playing");
}

// remove playing class after transition
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// add event listener for key on the window
window.addEventListener("keydown", playsound);
