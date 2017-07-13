$(document).ready(function() {

  var count = parseInt(prompt("Please enter your max number"));
  var bpm = parseInt(prompt("Enter Tempo in Beats per Minute'"));
  var tempo = 60000/bpm;
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
}, tempo); //cant get css to flash when less than 1000 all the time//


// $("#stop").click(function() {
//   window.stop();
//   clearInterval();
//   clearTimeout();
// });


for (var i=0;i<=count;i++) {
   (function(tick) {
       setTimeout(function() {
       $("#ticker").text(tick);
     }, tempo * (tick+1) );
   })(i);
}
});
