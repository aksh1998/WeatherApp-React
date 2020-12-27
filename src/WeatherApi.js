
export const WeatherApi = {
  key: "3fe71c66a17773f8b69808bf3e79aeea",
  base: "https://api.openweathermap.org/data/2.5/"
}


export const FetchDataFromApi = async (query) => {
  var response = await fetch(`${WeatherApi.base}weather?q=${query}&units=metric&APPID=${WeatherApi.key}`);
  return (response.json());
}
export const FetchDataFromCoordinateApi = async (lat, long) => {

  var res = await fetch(`${WeatherApi.base}weather?lat=${lat}&lon=${long}&APPID=${WeatherApi.key}`);
  console.log(`${WeatherApi.base}weather?lat=${lat}&lon=${long}&APPID=${WeatherApi.key}`, lat, long, res)
  return res.json();
}