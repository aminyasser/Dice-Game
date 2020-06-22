
var activePlayer , roundScore , scores , test ;

var lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click' , function () {
     
    if (test) {

    var dice1 =Math.floor(Math.random() * 6) + 1;
    var dice2 =Math.floor(Math.random() * 6) + 1;
    

    var diceDom1 = document.querySelector('.dice1');
        diceDom1.src = 'dice-' + dice1 + '.png' ; 
        diceDom1.style.display = 'block';

    var diceDom2 = document.querySelector('.dice2');
        diceDom2.src = 'dice-' + dice2 + '.png' ; 
        diceDom2.style.display = 'block';    

     if (dice1 !== 1 && dice2 !== 1) {   
     
     var dice = dice1 + dice2;   
    roundScore += dice ;
    document.querySelector('#current-' + activePlayer ).textContent = roundScore ;
    lastDice = dice;
  
    } else  nextPlayer();
    
  // in this update its not able to reset when have two 6 in row 

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
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';

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

    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    
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

document.querySelector('.dice1').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

// document.querySelector('.player-0-panel').classList.remove('active');
// document.querySelector('.player-1-panel').classList.remove('active');


document.getElementById('name-0').textContent ='Player 1';
document.getElementById('name-1').textContent ='Player 2';

document.querySelector('.player-0-panel').classList.add('active');

}

document.querySelector('.btn-new').addEventListener('click' , init);
