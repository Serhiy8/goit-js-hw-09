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

let interval = null;

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onStartPush() {
  refs.startBtn.setAttribute('disabled', '');
  interval = setInterval(changeBodyColor, 1000);
}

function onStopPush() {
  refs.startBtn.removeAttribute('disabled');
  clearInterval(interval);
}
