import './style.css';
import addScore from './modules/addScore.js';
import recentScore from './modules/recentScore.js';

const container = document.createElement('div');
container.classList.add('container');
container.appendChild(recentScore());
container.appendChild(addScore());
document.body.appendChild(container);