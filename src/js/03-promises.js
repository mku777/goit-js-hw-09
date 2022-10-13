import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promiseObj = { position, delay };

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(promiseObj);
    } else {
      reject(promiseObj);
    }
  });
}

function onFormSubmit(event) {
  event.preventDefault();

  let delay = 0;
  const amount = Number(event.target.amount.value);
  const step = Number(event.target.step.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }
}
