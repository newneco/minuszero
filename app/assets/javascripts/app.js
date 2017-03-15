$(document).ready(function(){
  // Set the date we're counting down to
var countDownDate = new Date("April 7, 2017 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



  window.myWidgetParam = {
      id: 12,
      cityid: 5241643,
      appid: '62bfa8521c1ad8c8e4c86669209ee8d0',
      containerid: 'openweathermap-widget',
  };
  (function() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'http://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(script, s);
  })();

  $('.dropdown-toggle').dropdown()


$('#collapseOne').collapse("hide");
$('#accordion').collapse({hide: true})
});