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

  const scoreList = document.createElement('ul');
  scoreList.classList.add('scores-list');
  scoreList.innerHTML = `<li class="recent-score"> Name: 100</li>
                        <li class="recent-score"> Name: 20</li>
                        <li class="recent-score"> Name: 50</li>
                        <li class="recent-score"> Name: 78</li>
                        <li class="recent-score"> Name: 125</li>
                        <li class="recent-score"> Name: 77</li>
                        <li class="recent-score"> Name: 42</li>`;
  wrapper.appendChild(heading);
  wrapper.appendChild(scoreList);
  return wrapper;
};