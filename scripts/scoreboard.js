var drawScoreBoard = function drawScoreBoard(players) {
    var scoreBoard = document.getElementById('score-board'),
        scoreBoardCtx = scoreBoard.getContext('2d');

    scoreBoardCtx.clearRect(0, 0, scoreBoard.width, scoreBoard.height - 100);
    scoreBoardCtx.font = '32px Comic Sans MS, sans-serif';
    scoreBoardCtx.fillStyle = '#c34301';
    scoreBoardCtx.fillText('SCORE', (scoreBoard.width / 3.5), 40);
    scoreBoardCtx.strokeText('SCORE', (scoreBoard.width / 3.5), 40);

    for (var i = 0; i < players.length; i += 1) {
        var currentPlayer = players[i];
        scoreBoardCtx.fillStyle = currentPlayer.fillStyle;
        scoreBoard.strokeStyle = 'black';
        scoreBoardCtx.beginPath();
        scoreBoardCtx.arc(scoreBoard.width / 10, (i + 1) * 90, 10, 0, 2 * Math.PI);
        scoreBoardCtx.fill();
        scoreBoardCtx.stroke();
        scoreBoardCtx.font = '28px Comic Sans MS, sans-serif';
        scoreBoardCtx.fillStyle = '#e54506';
        scoreBoardCtx.strokeText(currentPlayer.name, scoreBoard.width / 6, 10 + (i + 1) * 90);
        scoreBoardCtx.fillText(currentPlayer.name, scoreBoard.width / 6, 10 + (i + 1) * 90);
        scoreBoardCtx.strokeText(currentPlayer.points, scoreBoard.width - 40, 15 + (i + 1) * 90);
        scoreBoardCtx.fillText(currentPlayer.points, scoreBoard.width - 40, 15 + (i + 1) * 90);
    }

    drawScoreboardImage();
    function drawScoreboardImage() {
        firstImage = new Image();
        firstImage.src = 'images/worm.png';
        firstImage.onload = function () {
            scoreBoardCtx.drawImage(firstImage, 220, 385);
        };
    }
};








