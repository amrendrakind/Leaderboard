import ApiClient from './postScore.js';
import Score from './score.js';

export default () => {
  const form = document.createElement('form');

  const headingText = document.createElement('h3');
  headingText.innerText = 'Add your score';
  form.appendChild(headingText);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your Name';
  nameInput.name = 'name';
  nameInput.required = true;
  nameInput.minLength = 2;
  form.appendChild(nameInput);

  const scoreInput = document.createElement('input');
  scoreInput.type = 'number';
  scoreInput.placeholder = 'Your Score';
  scoreInput.name = 'score';
  scoreInput.required = true;
  scoreInput.min = '0';
  form.appendChild(scoreInput);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.classList.add('submit-btn');
  submitBtn.innerText = 'Submit';
  form.appendChild(submitBtn);

  const warning = document.createElement('div');
  warning.classList.add('warning');
  form.appendChild(warning);

  form.onsubmit = (event) => {
    event.preventDefault();
    const score = new Score({ player: nameInput.value, score: scoreInput.value });
    warning.classList.remove('success');
    warning.classList.remove('danger');
    warning.innerText = '';
    ApiClient.addScore(score.toJSON()).then(
      (response) => {
        warning.classList.add('success');
        warning.innerText = `${response.result} \nClick Refresh for updates`;
        form.reset();
      },
      (error) => {
        warning.classList.add('danger');
        warning.innerText = error;
      },
    );
  };
  return form;
};