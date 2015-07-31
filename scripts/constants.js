var gameField = document.getElementById('game-field'),
    gameFieldCtx = gameField.getContext('2d'),
    popup = document.getElementById('pop-up'),
    popupCtx = popup.getContext('2d'),

    GAMEFIELD = {
        WIDTH: parseInt(gameField.getAttribute('width')),
        HEIGHT: parseInt(gameField.getAttribute('height'))
    },

    PLAYER = {
        RADIUS: 12,
        MOVEMENT_ANGLE_CHANGE: 4
    },

    KEY = {
        SPACE: 32,
        ENTER: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        A: 65,
        D: 68,
        P: 80
    };