/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activePlayer , roundScore , scores , test ;

var lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click' , function () {
     
    if (test) {

    var dice =Math.floor(Math.random() * 6) + 1;
    

    var diceDom = document.querySelector('.dice');
        diceDom.src = 'dice-' + dice + '.png' ; 
         diceDom.style.display = 'block';

    if (dice === 6 && lastDice === 6) {

            scores[activePlayer] = 0;
            document.querySelector('#score-'+ activePlayer).textContent = '0';
            nextPlayer(); 

    } else if (dice !== 1) {   

    roundScore += dice ;
    document.querySelector('#current-' + activePlayer ).textContent = roundScore ;
    lastDice = dice;
  
    } else  nextPlayer();
    
  // lastDice not in the end cuse it will make a error if next player get a 6 in the first it will be 0 to him too
  }
} );

document.querySelector('.btn-hold').addEventListener('click' , function() {

    if (test) {
     var finalScore ;  
    scores[activePlayer] += roundScore ;

    document.querySelector('#score-'+ activePlayer).textContent =  scores[activePlayer] ;

    var input = document.querySelector('.final-score').value;

    if (input) {
        finalScore = input;
    } else finalScore = 100 ;

    if (scores[activePlayer] >= finalScore) {

        document.getElementById('name-' + activePlayer).textContent =' Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.dice').style.display = 'none';

        test =  false ;

      } else  nextPlayer();
     
   
  } 

});


function nextPlayer () {
     
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ; 

    roundScore = 0 ;
    
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

    tmp = false;
    lastDice = 0;

    
}


function init () {
     
scores = [0,0];
activePlayer = 0;
roundScore=0;
test = true ;

document.querySelector('#current-0').textContent = '0';
document.querySelector('#score-0').textContent = '0';

document.querySelector('#current-1').textContent = '0';
document.querySelector('#score-1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

// document.querySelector('.player-0-panel').classList.remove('active');
// document.querySelector('.player-1-panel').classList.remove('active');


document.getElementById('name-0').textContent ='Player 1';
document.getElementById('name-1').textContent ='Player 2';

document.querySelector('.player-0-panel').classList.add('active');

}


document.querySelector('.btn-new').addEventListener('click' , init);


