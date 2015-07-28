var numberOfPlayers = 0;

var displayOptionsMenu = (function(){
    var addPlayerButton = document.getElementById('addPlayer'),
        saveButton = document.getElementById('save'),
        backButton = document.getElementById('back');

    var form = document.getElementById('form');

    form.style.display = 'block';
    addPlayerButton.style.display = 'block';
    saveButton.style.display = 'block';
    backButton.style.display = 'block';

    addPlayerButton.onclick = function(){
        if(numberOfPlayers === 2){
            return;
        }

        var nameInput = document.createElement('input'),
            nameSpan = document.createElement('span'),
            leftControllInput = document.createElement('input'),
            leftControllSpan = document.createElement('span'),
            rightControllInput = document.createElement('input'),
            rightControllSpan = document.createElement('span');

        nameInput.setAttribute('type', 'text');
        nameSpan.innerHTML = "Please enter nickname.";


        form.appendChild(nameInput);
        form.appendChild(nameSpan);
        form.appendChild(document.createElement('br'));

        leftControllInput.setAttribute('type', 'text');
        leftControllSpan.innerHTML = "Enter left key!";

        form.appendChild(leftControllInput);
        form.appendChild(leftControllSpan);
        form.appendChild(document.createElement('br'));

        rightControllInput.setAttribute('type', 'text');
        rightControllSpan.innerHTML = 'Enter right key!';

        form.appendChild(rightControllInput);
        form.appendChild(rightControllSpan);
        form.appendChild(document.createElement('br'));

        numberOfPlayers++;
    }

    backButton.onclick = function(ev){
        form.style.display = 'none';
        addPlayerButton.style.display = 'none';
        saveButton.style.display = 'none';
        backButton.style.display = 'none';

        form.innerHTML = '';
        numberOfPlayers = 0;
        displayMenu(gameField, gameFieldCtx);
    };
});