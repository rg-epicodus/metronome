$(document).ready(function() {

  var count = parseInt(prompt("Please enter your max number:"));
  var bpm = parseInt(prompt("please enter tempo '1000 is 60 beats per minute'"));
  var colors = ["black", "yellow"];

  var colorsCounter = 0;
  var interval = setInterval(function() {
    $(".circleBase").css("background-color", colors[colorsCounter]);
    for (var i = 0; i < count; i++) {
      if(colorsCounter === count) {
        clearInterval(interval);
      } else if (colorsCounter === 1) {
        colorsCounter = 0;
      } else {
        colorsCounter += 1;
      }
    };
}, bpm); //cant get css to flash when less than 1000//

var soundFile = 'audio/tick.mp3';
playSound(soundFile);
setInterval(function () {
    playSound(soundFile);
}, bpm);

function playSound(audio) {
    var soundElement = '<audio style="display:none; width: 0px; height: 0px;" id="audioNotifier" src="' + audio + '" controls preload="auto" autobuffer></audio>';
    $('#audioContainer').html(soundElement);
    $('#audioNotifier')[0].play();
}

for (var i=0;i<=count;i++) {
   (function(tick) {
       setTimeout(function() {
       $("#ticker").text(tick);
     }, bpm * (tick+1) );
   })(i);
}
});
