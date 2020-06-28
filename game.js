var activePlayer, dice, game=true;
activePlayer = 0;
var lastDice=0, finalScore = 100;
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener("click",function(){
    if(game){
    dice= Math.ceil(Math.random()*6);
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = "img/dice"+dice+".jpg";
    var x = document.getElementById("current-"+activePlayer).innerHTML;
    console.log(dice);
    if(lastDice == 6 && dice == 6){
            document.getElementById("current-"+activePlayer).innerHTML = 0;
            document.getElementById("score-"+activePlayer).innerHTML = 0;
            nextPlayer();
    }else if(dice==1)
    {
        nextPlayer();
    }else{
        document.getElementById("current-"+activePlayer).innerHTML = Number(x)+Number(dice); 
    } 
    lastDice = dice;
}
});

document.querySelector('.btn-hold').addEventListener("click",function(){
    if(game){
        var winningScore;
        var a = document.getElementById('score-'+activePlayer).innerHTML;
        var b = document.getElementById('current-'+activePlayer).innerHTML;
        document.getElementById('score-'+activePlayer).innerHTML = Number(a)+Number(b);
        var score = document.getElementById('score-'+activePlayer).innerHTML;
        var input = document.querySelector('.final-score').value;
        if(input)
            winningScore = input;
        else 
            winningScore = 100;
        if(score>=winningScore){
            game=false;
            document.getElementById("current-"+activePlayer).textContent = '0';
            document.getElementById('name-'+activePlayer).innerHTML = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }else{
            nextPlayer();
        }
        
    }
});

document.querySelector('.btn-new').addEventListener("click",function(){
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    activePlayer=0;
    document.getElementById('name-0').innerHTML = 'PLAYER 1';
    document.getElementById('name-1').innerHTML = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    game=true;
});

function nextPlayer(){
    activePlayer==0 ? activePlayer=1 : activePlayer=0;
        document.getElementById("current-"+activePlayer).innerHTML=0;
        document.getElementById("current-0").textContent = '0';
        document.getElementById("current-1").textContent = '0'; 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        countSix = 0;
        lastDice = 0;
}