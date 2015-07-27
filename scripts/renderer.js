var render = (function animationFrame() {
    player1.move();
    player2.move();
    requestAnimationFrame(animationFrame);
});
//render is called in displayMenu()
displayMenu(gameField, gameFieldCtx);