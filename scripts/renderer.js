var endOfRound=false;
var round=1;
var pop=document.getElementById('pop-up');
var started=false;
var isPaused=false;
function checkPoints(players){
    for (var currentPlayer in players) {
        var maxPoints = (players.length - 1) * 3;
        if (players[currentPlayer].points === maxPoints) {
            gameFieldCtx.clearRect(0, 0, gameField.width, gameField.height);
            drawScoreboard(players);
            drawWinner(players[currentPlayer]);
            return true;
        }
    }
}
function checkForRoundEnd(players){
    var alivePlayers = aliveCount(players);
    if (alivePlayers === 1) {
        drawScoreboard(players);
        return true;
    }
}
var render = (function animationFrame() {
    if(!isPaused){
        drawRound(round,'Space');
        if(started) {
            pop.style.display = 'none';

            for (var currentPlayer in players) {
                players[currentPlayer].move();
            }
            if(checkPoints(players)){
                cancelAnimationFrame(animationFrame);
                return;
            }
            flame.moveRandomly();
            checkForRoundEnd(players);
            endOfRound = checkForRoundEnd(players);
            if (endOfRound) {
                gameFieldCtx.clearRect(0, 0, gameField.width, gameField.height);
                players.forEach(function (player) {
                    reinitPlayer(player);
                });
                round += 1;
                started=false;

            }
            requestAnimationFrame(animationFrame);
        }
    }
    else {
        drawPause('p');
    }
});
//render is called in displayMenu()
displayMenu(gameField, gameFieldCtx);
//Pause game with button "P"

function addInGameListeners(){
    document.addEventListener('keydown', function Pause(ev) {

        if (ev.keyCode == 80) {
            if (isPaused) {
                pop.style.zIndex=-11;
                requestAnimationFrame(render);
            }
            isPaused = !isPaused;
        }
    }, false);

    document.addEventListener('keydown', function Start(ev) {

        if (ev.keyCode == 32) {

            started=true;
            render();

        }
    },false);
}