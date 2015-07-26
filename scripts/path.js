var drawPath = (function (playerNumber, fillStyle) {
    gameFieldCtx.fillStyle = fillStyle;
    gameFieldCtx.beginPath();
    gameFieldCtx.arc(playerNumber.x, playerNumber.y, CONSTANTS.PLAYER_RADIUS, 0, 2 * Math.PI);
    gameFieldCtx.fill();
    gameFieldCtx.closePath();
});