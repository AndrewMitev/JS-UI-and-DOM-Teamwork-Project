var gameField = document.getElementById('game-field'),
    gameFieldCtx = gameField.getContext('2d'),
    endOfRound = false,
    round = 1,
    pop = document.getElementById('pop-up'),
    isStarted = false,
    isPaused = false;

function checkPoints(players) {
    for (var currentPlayer in players) {
        var maxPoints = (players.length - 1) * 3;
        if (players[currentPlayer].points === maxPoints) {
            gameFieldCtx.clearRect(0, 0, gameField.width, gameField.height);
            drawScoreBoard(players);
            drawWinner(players[currentPlayer]);
            return true;
        }
    }
}

function checkForRoundEnd(players) {
    var alivePlayers = aliveCount(players);
    if (alivePlayers === 1) {
        drawScoreBoard(players);
        return true;
    }
}

var render = (function animationFrame() {
    if (!isPaused) {
        drawRound(round, 'Space', 'P');
        if (isStarted) {
            pop.style.display = 'none';

            for (var currentPlayer in players) {
                players[currentPlayer].move();
            }
            if (checkPoints(players)) {
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
                isStarted = false;
            }
            requestAnimationFrame(animationFrame);
        }
    } else {
        drawPause('P');
    }
});