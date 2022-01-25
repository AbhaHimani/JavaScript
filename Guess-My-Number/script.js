'use strict';
let ans = Math.trunc(Math.random() * 20) + 1;
console.log(ans);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess1 = Number(document.querySelector('.guess').value);

  if (!guess1) {
    document.querySelector('.message').textContent = 'No number';
  }
  if (guess1 == ans) {
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    document.querySelector('.message').textContent = 'Try again';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = 'black';
  ans = Math.trunc(Math.random() * 20) + 1;
  console.log(ans);
  score = 20;
  document.querySelector('.score').textContent = score;
});
