/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,roundScore,activePlayer,gamePlay=true;

initialize();


document.querySelector(".btn-roll").addEventListener("click",function(){
        if(gamePlay){
                //Random number
                var dice=Math.floor(Math.random()*6)+1;


                //Display result
                var domDice = document.querySelector(".dice")
                domDice.style.display ="block";
                domDice.src = "dice-"+ dice +".png";

                //Update content and if dice is 1 then turn changes
                if (dice !==1){
                        roundScore+=dice;
                        document.querySelector("#current-"+activePlayer).textContent=roundScore;
                }  
                else{
                        //change player position
                next();
                }

        }

});
document.querySelector(".btn-hold").addEventListener("click",function(){
        if(gamePlay){
                //Hold the value as player1 score
                scores[activePlayer] +=roundScore;

                //Update the UI content
                document.querySelector("#score-" + activePlayer).textContent=scores[activePlayer];
                //Winner is decided when the total is above 100

                if(scores[activePlayer]>= 100){
                        document.querySelector("#name-"+activePlayer).textContent="Winner!!";

                        document.querySelector(".dice").style.display="none";
                        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
                        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
                        gamePlay=false;
                        



                }else{
                        //change player position
                        next();
                }
            
        }
 
});

document.querySelector(".btn-new").addEventListener("click",initialize);


function next(){
        //change player position
        activePlayer === 0?activePlayer=1:activePlayer=0;
        document.getElementById("current-0").textContent="0";
        document.getElementById("current-1").textContent="0";
        roundScore=0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        document.querySelector(".dice").style.display="none";
}



function initialize(){
        scores=[0,0];
        roundScore=0;
        activePlayer=0;
        
        
        
        //document.querySelector("#current-"+activePlayer ).textContent= dice;
        
        document.querySelector(".dice").style.display="none";
        
        document.getElementById("score-0").textContent="0";
        document.getElementById("score-1").textContent="0";
        document.getElementById("current-0").textContent="0";
        document.getElementById("current-1").textContent="0";
        document.getElementById("name-0").textContent="Player 1";
        document.getElementById("name-1").textContent="Player 2";

        document.querySelector(".player-0-panel").classList.remove("winner");
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");

        
        document.querySelector(".player-1-panel").classList.remove("winner");
        document.querySelector(".player-1-panel").classList.remove("active");
        
        gamePlay=true;

}

