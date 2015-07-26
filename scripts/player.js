var player = (function () {
    function changeMovementAngle(player) {
        if (player.isRightPressed) {
            player.movementAngle += CONSTANTS.MOVEMENT_ANGLE_CHANGE;
        } else if (player.isLeftPressed) {
            player.movementAngle -= CONSTANTS.MOVEMENT_ANGLE_CHANGE;
        }
    }

    function changeModifiers(player) {
        if (0 <= player.movementAngle && player.movementAngle <= 90) {
            player.yModifier = player.movementAngle / 90;
            player.xModifier = (90 - player.movementAngle) / 90;
        } else if (90 < player.movementAngle && player.movementAngle <= 180) {
            player.yModifier = (180 - player.movementAngle) / 90;
            player.xModifier = (90 - player.movementAngle) / 90;
        } else if (180 < player.movementAngle && player.movementAngle <= 270) {
            player.yModifier = (180 - player.movementAngle) / 90;
            player.xModifier = (player.movementAngle - 270) / 90;
        } else {
            player.yModifier = (player.movementAngle - 360) / 90;
            player.xModifier = (player.movementAngle - 270) / 90;
        }
    }

    function changePosition(player) {
        player.x += 2 * player.xModifier;
        player.y += 2 * player.yModifier;
		if(player.y < 0) player.y = fieldHeight;
		if(player.y > fieldHeight) player.y = 0;
		if(player.x < 0) player.x = fieldWidth;
		if(player.x > fieldWidth) player.x = 0;
    }

    function drawPath(player) {
        gameFieldCtx.fillStyle = player.fillStyle;
        gameFieldCtx.beginPath();
        gameFieldCtx.arc(player.x, player.y, CONSTANTS.PLAYER_RADIUS, 0, 2 * Math.PI);
        gameFieldCtx.fill();
        gameFieldCtx.closePath();
    }

    var currentId = 0,
        fieldWidth = parseInt(gameField.getAttribute('width')),
        fieldHeight = parseInt(gameField.getAttribute('height')),
        player = Object.create({});

    Object.defineProperty(player, 'init', {
        value: function (name) {
            this.x = parseInt(Math.random() * fieldWidth);
            this.y = parseInt(Math.random() * fieldHeight);
            this.xModifier = 1;
            this.yModifier = 0;
            this.id = ++currentId;
            this.name = name;
            this.fillStyle = '#'+Math.random().toString(16).substr(-6);
            this.movementAngle = 0;
            this.isLeftPressed = false;
            this.isRightPressed = false;
            return this;
        }
    });

    Object.defineProperty(player, 'movementAngle', {
        get: function () {
            return this._movementAngle;
        },
        set: function (value) {
            if (value < 0) {
                this._movementAngle = 360 - CONSTANTS.MOVEMENT_ANGLE_CHANGE;
            } else if (value > 360) {
                this._movementAngle = CONSTANTS.MOVEMENT_ANGLE_CHANGE;
            } else {
                this._movementAngle = value;
            }
        }
    });

    Object.defineProperty(player, 'move', {
        value: function () {
            changeMovementAngle(this);
            changeModifiers(this);
            changePosition(this);
            drawPath(this);
        }
    });

    return player;
}());

var player1 = Object.create(player).init('PlayerOne');
var player2 = Object.create(player).init('PlayerTwo');