document.addEventListener("DOMContentLoaded", () => {
  var thermostat = new Thermostat();
  const apiKey = "";
  
  function updateUsage() {
    document.querySelector('#current_temp').innerText = thermostat.temperature;
    document.querySelector('#current_temp').className = thermostat.usage();
  }

  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temp').innerText = data.main.temp;
      })
  }

  document.querySelector('#current-city').addEventListener('change', (event) => {
    const city = event.target.value;

    displayWeather(city);
  });

  document.querySelector('#up').addEventListener('click', (event) => {
    console.log("Temperature increased by 1");
    thermostat.up(1);
    document.querySelector('#current_temp').innerText = thermostat.temperature;
    updateUsage();
  });

  document.querySelector('#down').addEventListener('click', (event) => {
    console.log("Temperature decreased by 1");
    thermostat.down(1);
    document.querySelector('#current_temp').innerText = thermostat.temperature;
    updateUsage();
  });

  document.querySelector('#reset').addEventListener('click', (event) => {
    console.log("Temperature reset to 20");
    thermostat.reset();
    document.querySelector('#current_temp').innerText = thermostat.temperature;
    updateUsage();
  });

  document.querySelector('#power_mode').addEventListener('click', (event) => {
    console.log("Power mode turned on");
    thermostat.switchesPowerSaving();
    document.querySelector('#current_temp').innerText = (thermostat.powerSaving) ? "On" : "Off";
    updateUsage();
  });
});
