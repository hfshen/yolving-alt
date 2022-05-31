import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="app">

            </div>
        )
        
    }
}

showHighScores();

function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const highScoreList = document.getElementById('highScores');
  
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.name}`)
      .join('');
  }
  
  function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
    if (score > lowestScore) {
      const name = prompt('You got a highscore! Enter name:');
      const newScore = { score, name };
      saveHighScore(newScore, highScores);
      showHighScores();
    }
  }
  
  function saveHighScore(score, highScores) {
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(NO_OF_HIGH_SCORES);
  
    localStorage.setItem('highScores', JSON.stringify(highScores));
  }


// document.addEventListener("click", function(){soundplay();});

// function soundplay(){
//    audioArth.play();
// }