var addEventListener = (function (playerNumber, keyState, keyCodeLeft, keyCodeRight) {
    var isKeyPressed;

    if (keyState === 'keydown') {
        isKeyPressed = true;
    } else if (keyState === 'keyup') {
        isKeyPressed = false;
    }

    document.addEventListener(keyState, function (ev) {
        if (ev.keyCode === keyCodeLeft) {
            playerNumber.isLeftPressed = isKeyPressed;
        } else if (ev.keyCode === keyCodeRight) {
            playerNumber.isRightPressed = isKeyPressed;
        }
    }, false);
});

addEventListener(player1, 'keydown', 65, 68);
addEventListener(player1, 'keyup', 65, 68);
addEventListener(player2, 'keydown', 37, 39);
addEventListener(player2, 'keyup', 37, 39);