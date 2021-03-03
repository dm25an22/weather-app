const weatherCondition = {
  thunderstorm: "#1b262c",
  drizzle: "#4b5d67",
  rain: "#4b5d67",
  snow: "#84a9ac",
  mist: "'#7e8a97",
  clear: "rgba(34, 167, 240, 1)",
  clouds: "#a6b1e1",
  atmosphere: "#333333"
}

const nightBackground = "#0d335d";

export function getBackgroundColorByCondition(payload, sunset) {
  const condition = payload.toLowerCase();
  if (condition in weatherCondition) {
    return weatherCondition[condition];
  }
  return weatherCondition[atmosphere]
}


export function convertWindSpeedFromMstoKm(ms) {
  const metrsInMinute = ms * 60;
  const metrPerHour = metrsInMinute * 60;
  return (metrPerHour / 1000).toFixed(1);
}

export function getWindDirection(deg) {
  switch (true) {
    case deg >= 11.25 && deg < 33.75:
      return "NNE";

    case deg >= 33.75 && deg < 56.25:
      return "NE";

    case deg >= 56.25 && deg < 78.75:
      return "ENE";

    case deg >= 78.75 && deg < 101.25:
      return "E";

    case deg >= 101.25 && deg < 123.75:
      return "ESE";

    case deg >= 123.75 && deg < 146.25:
      return "SE";

    case deg >= 146.25 && deg < 168.75:
      return "SSE";

    case deg >= 168.75 && deg < 191.25:
      return "S";

    case deg >= 191.25 && deg < 213.75:
      return "SSW";

    case deg >= 213.75 && deg < 236.25:
      return "SW";

    case deg >= 236.25 && deg < 258.75:
      return "WSW";

    case deg >= 258.75 && deg < 281.25:
      return "W";

    case deg >= 281.25 && deg < 303.75:
      return "WNW";

    case deg >= 303.75 && deg < 326.25:
      return "NW";

    case deg >= 326.25 && deg < 348.75:
      return "NNW";

    default:
      "Not correct degrees";
  }
};

export function roundFloor(obj) {
  const cloneObj = { ...obj };
  for (const [key, value] of Object.entries(cloneObj)) {
    cloneObj[key] = Math.floor(value);
  }
  return cloneObj;
}