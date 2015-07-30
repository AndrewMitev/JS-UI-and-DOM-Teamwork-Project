var fire = (function () {
    function changePosition(flame) {
        function range() {
            return (Math.round(Math.random()) * 2 - 1) * 2;
        }

        var self = flame;
        self._x += range();
        self._y += range();
        self.onload = function () {
            gameFieldCtx.drawImage(self, self._x + range(), self._y + range());
        };
        self.src = 'svg/fire.svg';
        return self;
    }

    var fieldWidth = parseInt(gameField.getAttribute('width')),
        fieldHeight = parseInt(gameField.getAttribute('height')),
        burn = new Image();

    Object.defineProperty(burn, 'init', {
        value: function () {
            var self = burn;
            self._x = parseInt(Math.random() * fieldWidth);
            self._y = parseInt(Math.random() * fieldHeight);
            return self;
        }
    });

    Object.defineProperty(burn, 'moveRandomly', {
        value: function () {
            changePosition(this);
            return this;
        }
    });

    return burn;
}());

var flame = Object.create(fire).init();