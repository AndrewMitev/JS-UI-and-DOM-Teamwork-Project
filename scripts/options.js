var displayOptionsMenu = (function () {
    var numberOfPlayers = 0, //player0 and player1 - third and fourth player
        addPlayerButton = document.getElementById('addPlayer'),
        saveButton = document.getElementById('save'),
        backButton = document.getElementById('back'),

        form = document.getElementById('form');

    form.style.display = 'block';
    addPlayerButton.style.display = 'block';
    saveButton.style.display = 'block';
    backButton.style.display = 'block';

    var initializeForm = function (defaultName, leftKey, rightKey) {
        var formFieldsFragment = document.createDocumentFragment(),
            nameInput = document.createElement('input'),
            nameInputSpan = document.createElement('span'),
            nameSpan = document.createElement('span'),
            leftControlInputSpan = document.createElement('span'),
            leftControlSpan = document.createElement('span'),
            rightControlInputSpan = document.createElement('span'),
            rightControlSpan = document.createElement('span');

        nameInput.setAttribute('type', 'text');
        nameInput.style.display = 'none';
        nameInput.setAttribute('id', defaultName);
        nameInputSpan.setAttribute('class', 'form-input-label');
        nameInputSpan.innerHTML = defaultName;
        nameSpan.innerHTML = "Enter nickname:";

        formFieldsFragment.appendChild(nameSpan);
        formFieldsFragment.appendChild(nameInput);
        formFieldsFragment.appendChild(nameInputSpan);
        formFieldsFragment.appendChild(document.createElement('br'));

        leftControlInputSpan.setAttribute('class', 'form-input-label');
        leftControlInputSpan.innerHTML = leftKey;
        leftControlSpan.innerHTML = "Move left!";

        formFieldsFragment.appendChild(leftControlSpan);
        formFieldsFragment.appendChild(leftControlInputSpan);
        formFieldsFragment.appendChild(document.createElement('br'));

        rightControlInputSpan.setAttribute('class', 'form-input-label');
        rightControlInputSpan.innerHTML = rightKey;
        rightControlSpan.innerHTML = 'Move right!';

        formFieldsFragment.appendChild(rightControlSpan);
        formFieldsFragment.appendChild(rightControlInputSpan);
        formFieldsFragment.appendChild(document.createElement('br'));
        form.appendChild(formFieldsFragment);

        nameInputSpan.addEventListener('click', function (ev) {
            this.style.display = 'none';
            nameInput.style.display = 'inline-block';
            nameInput.setAttribute('autofocus', 'autofocus');
        }, false);

        nameInput.addEventListener('keydown', function (ev) {
            if (ev.keyCode === KEY.ENTER) { //enter is pressed!
                nameInputSpan.innerHTML = this.value;
                this.style.display = 'none';
                nameInputSpan.style.display = 'inline-block';
            }
        }, false);

    };
    initializeForm("PlayerOne", "A", "D");
    initializeForm("PlayerTwo", "Left Arrow", "Right Arrow");

    addPlayerButton.onclick = function () {
        if (numberOfPlayers === 2) {
            alert('Maximum four players allowed!');
            return;
        }

        var formFieldsFragment = document.createDocumentFragment(),
            nameInput = document.createElement('input'),
            nameInputSpan = document.createElement('span'),
            nameSpan = document.createElement('span'),
            leftControlInput = document.createElement('input'),
            leftControlInputSpan = document.createElement('span'),
            leftControlSpan = document.createElement('span'),
            rightControlInput = document.createElement('input'),
            rightControlInputSpan = document.createElement('span'),
            rightControlSpan = document.createElement('span');

        nameInput.setAttribute('type', 'text');
        nameInput.style.display = 'none';
        nameInput.setAttribute('id', 'player' + numberOfPlayers);
        nameInputSpan.setAttribute('class', 'form-input-label');
        nameInputSpan.innerHTML = 'NewPlayer';
        nameSpan.innerHTML = "Enter nickname:";

        formFieldsFragment.appendChild(nameSpan);
        formFieldsFragment.appendChild(nameInput);
        formFieldsFragment.appendChild(nameInputSpan);
        formFieldsFragment.appendChild(document.createElement('br'));

        leftControlInput.setAttribute('type', 'text');
        leftControlInput.style.display = 'none';
        leftControlInputSpan.setAttribute('id', 'leftControlPlayer' + numberOfPlayers);
        leftControlInputSpan.setAttribute('class', 'form-input-label');
        leftControlInputSpan.innerHTML = 'Enter key';
        leftControlSpan.innerHTML = "Move left!";

        formFieldsFragment.appendChild(leftControlSpan);
        formFieldsFragment.appendChild(leftControlInput);
        formFieldsFragment.appendChild(leftControlInputSpan);
        formFieldsFragment.appendChild(document.createElement('br'));

        rightControlInput.setAttribute('type', 'text');
        rightControlInput.style.display = 'none';
        rightControlInputSpan.setAttribute('id', 'rightControlPlayer' + numberOfPlayers);
        rightControlInputSpan.setAttribute('class', 'form-input-label');
        rightControlInputSpan.innerHTML = 'Enter key';
        rightControlSpan.innerHTML = 'Move right!';

        formFieldsFragment.appendChild(rightControlSpan);
        formFieldsFragment.appendChild(rightControlInput);
        formFieldsFragment.appendChild(rightControlInputSpan);
        formFieldsFragment.appendChild(document.createElement('br'));

        form.appendChild(formFieldsFragment);

        nameInputSpan.addEventListener('click', function (ev) {
            this.style.display = 'none';
            nameInput.style.display = 'inline-block';
            nameInput.setAttribute('autofocus', 'autofocus');
        }, false);

        nameInput.addEventListener('keydown', function (ev) {
            if (ev.keyCode === KEY.ENTER) { //enter is pressed!
                nameInputSpan.innerHTML = this.value;
                this.style.display = 'none';
                nameInputSpan.style.display = 'inline-block';
            }
        }, false);

        setMovementElements(leftControlInput, leftControlInputSpan, 'left');
        setMovementElements(rightControlInput, rightControlInputSpan, 'right');

        numberOfPlayers++;
    };

    backButton.onclick = function (ev) {
        form.style.display = 'none';
        addPlayerButton.style.display = 'none';
        saveButton.style.display = 'none';
        backButton.style.display = 'none';

        form.innerHTML = '';
        numberOfPlayers = 0;
        displayMenu(gameField, gameFieldCtx);
    };

    saveButton.onclick = function () {
        var isThirdPlayerExistent = Boolean(document.getElementById('player0')),
            isFourthPlayerExistent = Boolean(document.getElementById('player1'));

        saveDefaultPlayers("PlayerOne", "PlayerTwo");

        if (isThirdPlayerExistent) {
            if (!AllFieldsAreFilled(0)) {
                alert('All fields must be filled!');
                return;
            }
            InsertPlayer(0);
        }

        if (isFourthPlayerExistent) {
            if (!AllFieldsAreFilled(1)) {
                alert('All fields must be filled!');
                return;
            }

            InsertPlayer(1);
        }

        alert('Done');
    };

    function saveDefaultPlayers(playerOneId, playerTwoId) {
        var playerOneName = document.getElementById(playerOneId).parentNode[0].value || 'PlayerOne';
        var playerTwoName = document.getElementById(playerTwoId).parentNode[1].value || 'PlayerTwo';
        player1.name = playerOneName;
        player2.name = playerTwoName;
    }

    function AllFieldsAreFilled(playerId) {
        var name = document.getElementById('player' + playerId).value,
            leftControl = document.getElementById('leftControlPlayer' + playerId),
            rightControl = document.getElementById('rightControlPlayer' + playerId);

        if (leftControl.innerHTML === 'Enter key' || rightControl.innerHTML === 'Enter key') {
            return false;
        }

        return true;
    }

    function InsertPlayer(id) {
        var name = document.getElementById('player' + id).parentNode[id + 2].value ||
                document.getElementById('player' + id).parentNode[id + 4].value || 'NewPlayer',
            playerExists = playersToAdd.some(function (element) {
                return element.id === id;
            });

        if (!playerExists) {
            playersToAdd.push({
                id: id,
                name: name,
                moveLeft: controlsData.leftControls[id],
                moveRight: controlsData.rightControls[id]
            });
        }
    }

    function setMovementElements(controlInput, controlInputSpan, direction) {
        controlInput.addEventListener('keydown', function (ev) {
            controlInputSpan.innerHTML = String.fromCharCode(ev.keyCode);
            controlInputSpan.style.display = 'inline-block';
            controlInput.style.display = 'none';
            if (direction === 'left') {
                controlsData.addLeftControl(ev.keyCode);
            }
            else if (direction === 'right') {
                controlsData.addRightControl(ev.keyCode);
            }
        }, false);

        controlInputSpan.addEventListener('click', function (ev) {
            controlInputSpan.style.display = 'none';
            controlInput.style.display = 'inline-block';
            controlInput.setAttribute('autofocus', 'autofocus');
        }, false);
    }
});