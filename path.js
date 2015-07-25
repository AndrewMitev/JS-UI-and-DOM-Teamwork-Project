var drawPath = (function (playerNumber, fillStyle) {
    playerNumber.update();
    gamefieldCtx.fillStyle = fillStyle;
    gamefieldCtx.beginPath();
    gamefieldCtx.arc(playerNumber.x, playerNumber.y, CONSTANTS.PLAYER_RADIUS, 0, 2 * Math.PI);
    gamefieldCtx.fill();
    gamefieldCtx.closePath();
});