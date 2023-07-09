import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const firrstDelay = Number(refs.delayInput.value);
  const step = Number(refs.delayInput.value);
  const amount = Number(refs.amountInput.value);

  let startDelay = firrstDelay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, startDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    startDelay += step;
  }
  refs.form.reset();
});
