var displayMenu =  (function(canvas, cntx){
    var color = 'rgba(215, 40, 40, 0.9)',
        normalFont = 'bold 20px verdana',
        fontSelected = 'bold 28px verdana',
        startGameTextHeight = canvas.height / 4,
        optionsTextHeight = canvas.height / 2.5,
        selectedOptions = false;

    drawText(fontSelected, color, 'Start Game',startGameTextHeight);
    drawText(normalFont, color, 'Options',optionsTextHeight);

    function drawText(font, fillstyle, optionName, height) {
        cntx.font = font;
        cntx.fillStyle = fillstyle;
        positionText(cntx, optionName, height);

        function positionText(ctx, text, y) {
            var measurement = ctx.measureText(text);
            var x = (ctx.canvas.width - measurement.width) / 2;
            ctx.fillText(text, x, y);
        }
    };

    document.addEventListener('keydown', function changeMenuOption(ev){
        cntx.clearRect(0, 0, canvas.width, canvas.height);

        if(ev.keyCode === 38) {
            drawText(fontSelected, color, 'Start Game',startGameTextHeight);
            drawText(normalFont, color, 'Options',optionsTextHeight);
            selectedOptions = false;
        }
        else if(ev.keyCode === 40){
            drawText(normalFont, color, 'Start Game',startGameTextHeight);
            drawText(fontSelected, color, 'Options',optionsTextHeight);
            selectedOptions = true;
        }
        else if(ev.keyCode === 13){
            if(selectedOptions){
                //Options
            }
            else{
                document.removeEventListener('keydown', changeMenuOption);
                //drawScoreboard(players);
                render();
            }
        }

    });
});