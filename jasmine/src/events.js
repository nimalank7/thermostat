$( document ).ready(function() {
  var thermostat = new Thermostat();
  var api = "http://api.openweathermap.org/data/2.5/weather"
  var city = "?q=London,uk"
  var units = "&units=metric"
  var apikey = "&APPID=1a399910755d200872938695ed0eb968"
  function updateUsage() {
    if (thermostat.usage() == "high-usage"){
      console.log(thermostat.usage());
      $( "#useage").css({"backgroundColor":"red"});
    } else if(thermostat.usage() == "medium-usage"){
      console.log(thermostat.usage());
      $( "#useage").css({"backgroundColor":"black"});
    } else if(thermostat.usage() == "low-usage"){
      console.log(thermostat.usage());
      $( "#useage").css({"backgroundColor":"green"});
    }
  }
  $( "#current_temp")[0].innerText = thermostat.temperature;
  // console.log(thermostat.temperature) outputs to console on page load

  $( "#up" ).click(function( event ) {
    console.log( "Temperature increased by 1" );
    thermostat.up(1);
    $( "#current_temp")[0].innerText = thermostat.temperature;
    updateUsage();
  });

  $( "#down" ).click(function( event ) {
    console.log( "Temperature decreased by 1" );
    thermostat.down(1);
    $( "#current_temp")[0].innerText = thermostat.temperature;
    updateUsage();
  });
  $( "#reset" ).click(function( event ) {
    console.log( "Temperature reset to 20" );
    thermostat.reset();
    $( "#current_temp")[0].innerText = thermostat.temperature;
    updateUsage();
  });
  $( "#power_mode" ).click(function( event ) {
    console.log( "Power mode turned on" );
    thermostat.switchesPowerSaving();

    $( "#current_power_mode")[0].innerText = (thermostat.powerSaving) ? "On" : "Off";
  });

    $.ajax({

      // The URL for the request


      url: api + city + apikey + units,
      //url: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1a399910755d200872938695ed0eb968",

      // The data to send (will be converted to a query string)


      // Whether this is a POST or GET request
      type: "GET",

      // The type of data we expect back
      dataType : "json",
  })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function( json ) {
       console.log(json)
       console.log(json.main.temp)
       $( "#temp_in_london")[0].innerText = json.main.temp;
    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function( xhr, status, errorThrown ) {
      console.log( "Error: " + errorThrown );
      console.log( "Status: " + status );
      console.dir( xhr );
    })
    // Code to run regardless of success or failure;
    .always(function( xhr, status ) {
      console.log( "The request is completed regardless of failure/success!" );
    });
});
