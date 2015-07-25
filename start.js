var beginGame = (function beginGame() {
    player1.update();

    var modifierVectorLength = Math.sqrt(Math.abs(player1.xModifier, player1.yModifier));
    var normalizeModifierVal = 1 / modifierVectorLength;

    var colors = gamefieldCtx.getImageData(
        player1.x + (CONSTANTS.PLAYER_RADIUS + 1) * player1.xModifier * normalizeModifierVal,
        player1.y + (CONSTANTS.PLAYER_RADIUS + 1) * player1.yModifier * normalizeModifierVal, 1, 1).data;
    if (colors[0] !== 0 || colors[2] !== 0 || colors[1] !== 0) {
        console.log(colors[0] + ' ' + colors[1] + ' ' + colors[2] + " " + colors[3]);
    }

    gamefieldCtx.fillStyle = 'green';
    gamefieldCtx.beginPath();
    gamefieldCtx.arc(player1.x, player1.y, CONSTANTS.PLAYER_RADIUS, 0, 2 * Math.PI);
    gamefieldCtx.fill();
    gamefieldCtx.closePath();

    player2.update();
    gamefieldCtx.fillStyle = 'blue';
    gamefieldCtx.beginPath();
    gamefieldCtx.arc(player2.x, player2.y, CONSTANTS.PLAYER_RADIUS, 0, 2 * Math.PI);
    gamefieldCtx.fill();
    gamefieldCtx.closePath();

    requestAnimationFrame(beginGame);
}());