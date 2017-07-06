var count = prompt("Please enter your max number:");

for (var i=0;i<=count;i++) {
   (function(tick) {
       setTimeout(function() {
       $("#ticker").append(tick);
       }, 1000 * (tick+1) );
   })(i);
}
