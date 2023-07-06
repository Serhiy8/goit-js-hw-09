function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartPush);
refs.stopBtn.addEventListener('click', onStopPush);

refs.stopBtn.disabled = true;
let timeoutId = null;

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onStartPush() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timeoutId = setInterval(changeBodyColor, 1000);
}

function onStopPush() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timeoutId);
}
