var displayMenu = (function (canvas, cntx) {
    var color = '#c34301',
        normalFont = 'bold 28px verdana, sans-serif',
        fontSelected = 'bold 36px verdana, sans-serif',
        startGameTextHeight = canvas.height / 3,
        optionsTextHeight = canvas.height / 2.3,
        selectedOptions = false,
        startGameText = 'Start Game',
        optionsText = 'Options';

    drawText(fontSelected, color, startGameText, startGameTextHeight);
    drawText(normalFont, color, optionsText, optionsTextHeight);

    function drawText(font, fillstyle, optionName, height) {
        cntx.font = font;
        cntx.fillStyle = fillstyle;
        positionText(cntx, optionName, height);

        function positionText(ctx, text, y) {
            var measurement = ctx.measureText(text);
            var x = (ctx.canvas.width - measurement.width) / 2;
            ctx.fillText(text, x, y);
            ctx.strokeText(text, x, y);
        }
    }

    document.addEventListener('keydown', function changeMenuOption(ev) {
        if (ev.keyCode === KEY.UP) {
            cntx.clearRect(0, 0, canvas.width, canvas.height);
            drawText(fontSelected, color, startGameText, startGameTextHeight);
            drawText(normalFont, color, optionsText, optionsTextHeight);
            sound('menuDown').play();
            selectedOptions = false;
        }
        else if (ev.keyCode === KEY.DOWN) {
            cntx.clearRect(0, 0, canvas.width, canvas.height);
            drawText(normalFont, color, startGameText, startGameTextHeight);
            drawText(fontSelected, color, optionsText, optionsTextHeight);
            sound('menuUp').play();
            selectedOptions = true;
        }
        else if (ev.keyCode === KEY.ENTER) {
            cntx.clearRect(0, 0, canvas.width, canvas.height);
            document.removeEventListener('keydown', changeMenuOption);

            if (selectedOptions) {
                displayOptionsMenu();
            } else {
                document.removeEventListener('keydown', changeMenuOption);
                AddPlayers();
                drawScoreBoard(players);
                addInGameListeners();
                render();
            }
        }
    });
});

displayMenu(gameField, gameFieldCtx);
