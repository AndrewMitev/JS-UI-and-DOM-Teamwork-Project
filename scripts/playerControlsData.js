var playerControlsData = (function () {
    var selectedPlayersControls = Object.create({});

    Object.defineProperty(selectedPlayersControls, 'init', {
        value: function () {
            this.leftControls = [];
            this.rightControls = [];

            return this;
        }
    });

    Object.defineProperty(selectedPlayersControls, 'addLeftControl', {
        value: function (value) {
            this.leftControls.push(value);
        }
    });

    Object.defineProperty(selectedPlayersControls, 'addRightControl', {
        value: function (value) {
            this.rightControls.push(value);
        }
    });

    return selectedPlayersControls;
}());

var controlsData = Object.create(playerControlsData).init();
