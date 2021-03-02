export default class Api {
  static _checkStatus = async (response) => {
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  static async _apiGET(url, headers) {
    try {
      const response = await fetch(url);
      return this._checkStatus(response);
    } catch (error) {
      throw error;
    }
  }

  static async fetchForecastData(lat, lon) {
    console.log(lat, lon)
    try {
      return await this._apiGET(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=7bec40103ce21d5342466aba6282e18f&units=metric`);
    } catch (error) {
      throw error
    }
  }
}