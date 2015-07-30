/**
 * Created by Niki on 30.7.2015 ã..
 */
var popup = document.getElementById('pop-up'),
    popupCtx = popup.getContext('2d');

var drawRound=function drawRound(round,button){

    popupCtx.clearRect(0,0,popup.width,popup.height);
    popupCtx.font='35px Comic Sans MS ';
    popupCtx.fillStyle='#c34301';
    popupCtx.fillText('ROUND '+round,(popup.width/3),80);
    popupCtx.strokeText('ROUND '+round,(popup.width/3),80);
    popupCtx.fillText('Press "'+button+'" to start!',(popup.width/10),130);
    popupCtx.strokeText('Press "'+button+'" to start!',(popup.width/10),130);
    pop.style.zIndex=1;

};
var drawPause=function drawPause(button){
    pop.style.zIndex=1;
    popupCtx.clearRect(0,0,popup.width,popup.height);
    popupCtx.font='35px Comic Sans MS ';
    popupCtx.fillStyle='#c34301';
    popupCtx.fillText('The game is now paused!',(popup.width/10),80);
    popupCtx.strokeText('The game is now paused!',(popup.width/10),80);
    popupCtx.fillText('Press button "'+button+'" to continue!',(popup.width/30),130);
    popupCtx.strokeText('Press button "'+button+'" to continue!',(popup.width/30),130);

};
var drawWinner=function drawWinner(player){
    popupCtx.clearRect(0,0,popup.width,popup.height);
    popupCtx.font='36px Comic Sans MS ';
    popupCtx.fillStyle='#c34301';
    popupCtx.fillText('THE WINNER IS ',(popup.width/5),80);
    popupCtx.strokeText('THE WINNER IS' ,(popup.width/5),80);
    popupCtx.fillText(player.name,(popup.width/3),130);
    popupCtx.strokeText(player.name,(popup.width/3),130);
    pop.style.zIndex=1;

};