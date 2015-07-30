var endOfRound=false;
var round=1;
var pop=document.getElementById('pop-up');
var isActive = true;
var started=false;

var render = (function animationFrame() {

    if(started&&isActive) {
        if (isActive && !endOfRound) {
            for (var currentPlayer in players) {
                var maxPoints = (players.length - 1) * 3;
                players[currentPlayer].move();
                var alivePlayers = aliveCount(players);
                if (alivePlayers === 1) {
                    endOfRound = true;
                    drawScoreboard(players);
                }
                if (players[currentPlayer].points === maxPoints) {
                    gameFieldCtx.clearRect(0, 0, gameField.width, gameField.height);
                    drawScoreboard(players);
                    drawWinner(players[currentPlayer]);
                    cancelRequestAnimationFrame();
                }
            }
            requestAnimationFrame(animationFrame);
        } else if (isActive && endOfRound) {
            gameFieldCtx.clearRect(0, 0, gameField.width, gameField.height);
            players.forEach(function (player) {
                reinitPlayer(player);
            });
            round += 1;
            drawRound(round, 'Space');
            started = false;
            endOfRound = false;

            render();
        }

    }
    else if (!isActive&&started ) {
        drawPause('p');
    }
});
//render is called in displayMenu()
displayMenu(gameField, gameFieldCtx);
//Pause game with button "P"
document.addEventListener('keydown', function Pause(ev) {

    if (ev.keyCode == 80) {
        if (!isActive) {
            pop.style.zIndex=-1;
            requestAnimationFrame(render);
        }
        isActive = !isActive;
    }
}, false);

document.addEventListener('keydown', function Start(ev) {

    if (ev.keyCode == 32) {
        started = true;
        pop.style.zIndex = -1;
        requestAnimationFrame(render);

    }

},false);
