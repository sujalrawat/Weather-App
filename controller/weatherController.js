import { WEATHER_API } from "../app.js";

export async function getWeatherInfo(req, res) {
  try {
    const url = WEATHER_API.replace("<location>", req.params.location);
    const response = await fetch(url);
    // console.log(response)

    if (!response.ok) {
      throw new Error(`Error: fetching weather info: ${response.statusText}`);
    }

    const weatherObj = await response.json();
    // console.log(weatherObj);
    res.status(200).json({
      status: "success",
      data: {
        location: weatherObj.resolvedAddress,
        timeZone: weatherObj.timezone,
        description: weatherObj.description,
        date: weatherObj.days[0].datetime,
        temperature:weatherObj.days[0].temp+" F",
        maxTemperature:weatherObj.days[0].tempmax+" F",
        minTemperature:weatherObj.days[0].tempmin+" F"
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
}
