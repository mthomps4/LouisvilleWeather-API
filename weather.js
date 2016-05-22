$(document).ready(function() {

  var weatherAPI = "http://api.openweathermap.org/data/2.5/weather";
  var data = {
    q : "Louisville,KY",
    units : "imperial",
    APPID : "3e102b406893685d95c8ea1bb867228e"
  };
  function showWeather(weatherReport) {
    $('#temperature').text(weatherReport.main.temp);
  }

  $.getJSON(weatherAPI, data, showWeather);
});
