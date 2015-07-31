var sound = (function (getSound) {
    var btnPressed = new Audio('audio/btnPressed.ogg'),
        btnReleased = new Audio('audio/btnReleased.ogg'),
        menuUp = new Audio('audio/menuUp.ogg'),
        menuDown = new Audio('audio/menuDown.ogg');

    switch (getSound) {
        case 'btnPressed':
            return btnPressed;
        case 'btnReleased':
            return btnReleased;
        case 'menuUp':
            return menuUp;
        case 'menuDown':
            return menuDown;
    }
});