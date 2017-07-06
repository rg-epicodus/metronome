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
}, bpm); //cant get css to flash when less than 1000 in firefox//


for (var i=0;i<=count;i++) {
   (function(tick) {
       setTimeout(function() {
       $("#ticker").text(tick);
     }, bpm * (tick+1) );
   })(i);
}
});
