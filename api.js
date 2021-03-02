export default class Api {
  static _checkStatus = async (response) => {
    if (response.status >= 200 && response.status < 300) {
      return await response.json();
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  static async _apiGET(url, headers) {
    try {
      const response = await fetch(url, {
        "method": "GET",
        headers
      });
      return this._checkStatus(response);
    } catch (error) {
      throw error;
    }
  }

  static async fetchForecastData() {
    try {
      return await this._apiGET(`https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus`, {
        "x-rapidapi-key": "0861a540bbmsh9ef63039d5fd203p1883bejsn220d1c3c7cd8",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
      });
    } catch (error) {
      throw error
    }
  }
}