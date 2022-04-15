import ApiClient from './getScore.js';

export default () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('scores');

  const heading = document.createElement('div');
  heading.classList.add('heading');

  const headingText = document.createElement('h3');
  headingText.innerText = 'Recent scores';
  heading.appendChild(headingText);

  const refreshBtn = document.createElement('button');
  refreshBtn.type = 'button';
  refreshBtn.classList.add('refresh-btn');
  refreshBtn.innerText = 'Refresh';
  heading.appendChild(refreshBtn);

  refreshBtn.onclick = () => {
    window.location.reload();
  };

  const scoreList = document.createElement('ul');
  scoreList.classList.add('scores-list');
  ApiClient.getScores().then(
    (scores) => {
      scoreList.innerHTML = '';
      scores.result.forEach((score) => {
        scoreList.innerHTML += `<li class="recent-score"> ${score.user}: ${score.score}</li>`;
      });
    },
  ).catch(() => {
    scoreList.innerHTML = ' Error Loading ';
  });
  wrapper.appendChild(heading);
  wrapper.appendChild(scoreList);
  return wrapper;
};