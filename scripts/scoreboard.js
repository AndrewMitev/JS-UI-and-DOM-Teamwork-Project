/**
 * Created by Niki on 28.7.2015 ã..
 */
var drawScoreboard=function drawScoreboard(players){
    var scoreBoard = document.getElementById('scoreboard'),
        scoreboardCtx = scoreBoard.getContext('2d');
        scoreboardCtx.clearRect(0,0,scoreBoard.width,scoreBoard.height-100);
        scoreboardCtx.font='32px Comic Sans MS ';
        scoreboardCtx.fillStyle='#c34301';
        scoreboardCtx.fillText('SCORES',(scoreBoard.width/3.5),40);
        scoreboardCtx.strokeText('SCORES',(scoreBoard.width/3.5),40);

    for(var i =0;i<players.length;i+=1){
        var currentPlayer=players[i];
        scoreboardCtx.fillStyle=currentPlayer.fillStyle;
        scoreBoard.strokeStyle='black';
        scoreboardCtx.beginPath();
        scoreboardCtx.arc(scoreBoard.width/10,(i+1)*90,10,0, 2 * Math.PI);
        scoreboardCtx.fill();
        scoreboardCtx.stroke();
        scoreboardCtx.font='28px Comic Sans MS ';
        scoreboardCtx.fillStyle='#e54506';
        scoreboardCtx.strokeText(currentPlayer.name,scoreBoard.width/6,10+(i+1)*90);
        scoreboardCtx.fillText(currentPlayer.name,scoreBoard.width/6,10+(i+1)*90);
        scoreboardCtx.strokeText(currentPlayer.points,scoreBoard.width-40,15+(i+1)*90);
        scoreboardCtx.fillText(currentPlayer.points,scoreBoard.width-40,15+(i+1)*90);
    }

    drawScoreboardImage();
    function drawScoreboardImage()
    {
        firstImage = new Image();
        firstImage.src = 'images/score.png';
        firstImage.onload = function(){
            scoreboardCtx.drawImage(firstImage, 190,390);
        };

    }
};








