var displayMenu = (function (canvas, cntx) {
    var color = 'rgba(215, 40, 40, 0.9)',
        normalFont = 'bold 20px verdana',
        fontSelected = 'bold 28px verdana',
        startGameTextHeight = canvas.height / 4,
        optionsTextHeight = canvas.height / 2.5,
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
        }
    }

    document.addEventListener('keydown', function changeMenuOption(ev) {
        cntx.clearRect(0, 0, canvas.width, canvas.height);

        if (ev.keyCode === 38) { //switch menu items
            drawText(fontSelected, color, startGameText, startGameTextHeight);
            drawText(normalFont, color, optionsText, optionsTextHeight);
            selectedOptions = false;
        }
        else if (ev.keyCode === 40) { //switch menu items
            drawText(normalFont, color, startGameText, startGameTextHeight);
            drawText(fontSelected, color, optionsText, optionsTextHeight);
            selectedOptions = true;
        }
        else if (ev.keyCode === 13) { //Enter is pressed
            document.removeEventListener('keydown', changeMenuOption);

            if (selectedOptions) {
                displayOptionsMenu();
            }
            else {
                document.removeEventListener('keydown', changeMenuOption);
                AddPlayers();
                drawScoreboard(players);
                drawRound(round,'Space');
                render();
            }
        }
    });
});