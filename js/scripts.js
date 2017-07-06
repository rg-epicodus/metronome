$(document).ready(function() {
  var number = 0;
  setInterval(function() {
    $("#display").text(number);
    if (number === 9) {
      number = 0;
    } else {
      number += 1;
    }
  }, 1000);
});
