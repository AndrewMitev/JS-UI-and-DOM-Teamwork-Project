var render = (function animationFrame() {
    var modifierVectorLength = Math.sqrt(Math.abs(player1.xModifier, player1.yModifier));
    var modifierNormalizer = 1 / modifierVectorLength;

    var colors = gameFieldCtx.getImageData(
        player1.x + (CONSTANTS.PLAYER_RADIUS + 1) * player1.xModifier * modifierNormalizer,
        player1.y + (CONSTANTS.PLAYER_RADIUS + 1) * player1.yModifier * modifierNormalizer, 1, 1).data;
    if (colors[0] !== 0 || colors[2] !== 0 || colors[1] !== 0) {
        console.log(colors[0] + ' ' + colors[1] + ' ' + colors[2] + " " + colors[3]);
    }

    player1.update();
    player2.update();
    drawPath(player1, 'green');
    drawPath(player2, 'blue');

    requestAnimationFrame(animationFrame);
}());