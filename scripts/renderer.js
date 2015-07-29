var isActive = true;
var render = (function animationFrame() {
    if (isActive) {
        for (var currentPlayer in players) {
            players[currentPlayer].move();
        }
        //player1.move();
        //player2.move();
        requestAnimationFrame(animationFrame);
    } else {
        window.alert('The game is now paused! Press button "p" to continue!')
    }
});
//render is called in displayMenu()
displayMenu(gameField, gameFieldCtx);
//Pause game with button "P"
document.addEventListener('keydown', function Pause(ev) {

    if (ev.keyCode == 80) {
        if (!isActive) {
            requestAnimationFrame(render);
        }
        isActive = !isActive;
    }
}, false);
