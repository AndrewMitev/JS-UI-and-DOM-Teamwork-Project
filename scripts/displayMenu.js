var displayMenu =  (function(canvas, cntx){
    var color = 'rgba(255, 50, 50, 0.6)',
        normalFont = '20px verdana',
        fontSelected = '28px verdana',
        startGameTextHeight = canvas.height / 4,
        optionsTextHeight = canvas.height / 2.5,
        selectedOption = false;

    drawText(fontSelected, color, 'Start Game',startGameTextHeight);
    drawText(normalFont, color, 'Option',optionsTextHeight);

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
        if(ev.keyCode === 38) {
            cntx.clearRect(0, 0, canvas.width, canvas.height);
            drawText(fontSelected, color, 'Start Game',startGameTextHeight);
            drawText(normalFont, color, 'Option',optionsTextHeight);
            selectedOption = true;
        }
        else if(ev.keyCode === 40){
            cntx.clearRect(0, 0, canvas.width, canvas.height);
            drawText(normalFont, color, 'Start Game',startGameTextHeight);
            drawText(fontSelected, color, 'Option',optionsTextHeight);
            selectedOption = false;
        }
        else if(ev.keyCode === 13){
            if(selectedOption){
                cntx.clearRect(0, 0, canvas.width, canvas.height);
                document.removeEventListener('keydown', changeMenuOption);
                render();
            }
            else{
                //Options
            }
        }
    });
});