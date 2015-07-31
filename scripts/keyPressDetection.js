var addEventListener = (function (playerNumber, keyState, keyCodeLeft, keyCodeRight) {
    var isKeyPressed,
        isHandled = false;

    if (keyState === 'keydown') {
        isKeyPressed = true;
        isHandled = true;
    } else if (keyState === 'keyup') {
        isKeyPressed = false;
        isHandled = false;
    }

    document.addEventListener(keyState, function (ev) {
        if (ev.keyCode === keyCodeLeft) {
            playerNumber.isLeftPressed = isKeyPressed;
        } else if (ev.keyCode === keyCodeRight) {
            playerNumber.isRightPressed = isKeyPressed;
        }
        // Prevent space and arrow keys from scrolling the page
        if (isHandled && (ev.keyCode === KEY.SPACE || ev.keyCode === KEY.UP || ev.keyCode === KEY.DOWN)) {
            ev.preventDefault();
        }
    }, false);
});

addEventListener(player1, 'keydown', KEY.A, KEY.D);
addEventListener(player1, 'keyup', KEY.A, KEY.D);
addEventListener(player2, 'keydown', KEY.LEFT, KEY.RIGHT);
addEventListener(player2, 'keyup', KEY.LEFT, KEY.RIGHT);

//Pause game with button "P"
function addInGameListeners() {
    document.addEventListener('keydown', function Pause(ev) {

        if (ev.keyCode === KEY.P) {
            if (isPaused) {
                pop.style.display = 'none';
                requestAnimationFrame(render);
            }
            isPaused = !isPaused;
        }
    }, false);

    document.addEventListener('keydown', function Start(ev) {

        if (ev.keyCode === KEY.SPACE) {
            isStarted = true;
            render();
        }
    }, false);
}