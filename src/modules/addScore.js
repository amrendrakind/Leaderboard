export default () => {
  const form = document.createElement('form');

  const headingText = document.createElement('h3');
  headingText.innerText = 'Add your score';
  form.appendChild(headingText);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your Name';
  nameInput.name = 'name';
  form.appendChild(nameInput);

  const scoreInput = document.createElement('input');
  scoreInput.type = 'number';
  scoreInput.placeholder = 'Your Score';
  scoreInput.name = 'score';
  form.appendChild(scoreInput);

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.classList.add('submit-btn');
  submitBtn.innerText = 'Submit';
  form.appendChild(submitBtn);

  return form;
};