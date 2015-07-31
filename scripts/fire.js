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

    var burn = new Image();

    Object.defineProperty(burn, 'init', {
        value: function () {
            var self = burn;
            self._x = parseInt(Math.random() * gameField.width);
            self._y = parseInt(Math.random() * gameField.height);
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