document.addEventListener('keydown', function (ev) {
    if (ev.keyCode == 68) {
        player1.isRightPressed = true;
    } else if (ev.keyCode == 65) {
        player1.isLeftPressed = true;
    }
}, false);

document.addEventListener('keyup', function (ev) {
    if (ev.keyCode == 68) {
        player1.isRightPressed = false;
    } else if (ev.keyCode == 65) {
        player1.isLeftPressed = false;
    }
}, false);

document.addEventListener('keydown', function (ev) {
    if (ev.keyCode == 39) {
        player2.isRightPressed = true;
    } else if (ev.keyCode == 37) {
        player2.isLeftPressed = true;
    }
}, false);

document.addEventListener('keyup', function (ev) {
    if (ev.keyCode == 39) {
        player2.isRightPressed = false;
    } else if (ev.keyCode == 37) {
        player2.isLeftPressed = false;
    }
}, false);