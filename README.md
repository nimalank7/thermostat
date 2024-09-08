# How the application works

From https://github.com/makersacademy/course/blob/main/thermostat_es6/README.md

Application is a thermostat which uses browser's DOM functions to retrieve the temperature from `api.openweathermap.org`.

- `index.html` is our view that contains the HTML for our thermostat.
- `thermostat.js` is the model that contains the business logic for our thermostat
- `events.js` sets up event listeners, creates the thermostat and fetches the temperature from the API.

Flow of interaction:

**User input -> Event Listener -> Update model -> Update view to reflect change in model**

## Run the application

Open `index.html` in Chrome.

## Tests

Open `SpecRunner.html` in Chrome.