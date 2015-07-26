var gameField = document.getElementById('game-field'),
    gameFieldCtx = gameField.getContext('2d'),
    i,

    drawDashedLine = (function (fromX, fromY, toX, toY, numberOfLines, direction) {
        for (i = 0; i < numberOfLines; i += 1) {
            gameFieldCtx.beginPath();
            gameFieldCtx.setLineDash([10, 1]);

            if (direction === 'horizontal') {
                gameFieldCtx.moveTo(fromX, fromY + (i * fromY));
                gameFieldCtx.lineTo(toX, toY + (i * toY));
            } else if (direction === 'vertical') {
                gameFieldCtx.moveTo(fromX + (i * fromX), fromY);
                gameFieldCtx.lineTo(toX + (i * toX), toY);
            }

            gameFieldCtx.strokeStyle = '#f5f5f5';
            gameFieldCtx.stroke();
            gameFieldCtx.closePath();
        }
    });

