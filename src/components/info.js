import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { getDayInfoBySelectedDay } from '../redux/app-state/app-state-selector';
import { convertWindSpeedFromMstoKm, getWindDirection, roundFloor } from '../utils/common';
import { getTime } from '../utils/date-helper';
import InfoItem from "./info-item";

export default function Info() {
  const dayInfo = useSelector(getDayInfoBySelectedDay);
  const { pressure, humidity, clouds, uvi, pop, weather, windSpeed, windDeg } = dayInfo;
  const { morn, day, eve, night, min, max } = roundFloor(dayInfo.temp);
  const { morn: mornFl, day: dayFl, eve: eveFL, night: nightFl } = roundFloor(dayInfo.feelsLike);

  const sunrise = getTime(new Date(dayInfo.sunrise * 1000));
  const sunset = getTime(new Date(dayInfo.sunset * 1000));

  const windSpeedInKm = convertWindSpeedFromMstoKm(windSpeed);
  const windDirection = getWindDirection(windDeg);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <InfoItem title={"Morning temperature"} info={`${morn}${'\u00b0'}`}>
          <Text style={styles.additionalText}>Feels like {mornFl}{'\u00b0'}</Text>
        </InfoItem>
        <InfoItem title={"Day temperature"} info={`${day}${'\u00b0'}`}>
          <Text style={styles.additionalText}>Feels like {dayFl}{'\u00b0'}</Text>
        </InfoItem>
      </View>
      <View style={styles.infoContainer}>
        <InfoItem title={"Evening temperature"} info={`${eve}${'\u00b0'}`}>
          <Text style={styles.additionalText}>Feels like {eveFL}{'\u00b0'}</Text>
        </InfoItem>
        <InfoItem title={"Night temperature"} info={`${night}${'\u00b0'}`}>
          <Text style={styles.additionalText}>Feels like {nightFl}{'\u00b0'}</Text>
        </InfoItem>
      </View>
      <View style={styles.infoContainer}>
        <InfoItem title={"Min daily temperature"} info={`${min}${'\u00b0'}`} />
        <InfoItem title={"Max daily temperature"} info={`${max}${'\u00b0'}`} />
      </View>
      <View style={styles.infoContainer}>
        <InfoItem title={"Sunrise"} info={sunrise} />
        <InfoItem title={"Sunset"} info={sunset} />
      </View>
      <View style={styles.infoContainer}>
        <InfoItem title={"Atmospheric pressure"} info={`${pressure} RH`} />
        <InfoItem title={"Humidity"} info={`${humidity} %`} />
      </View>
      <View style={styles.infoContainer}>
        <InfoItem title={"Cloudiness"} info={`${clouds} %`} />
        <InfoItem title={"UV index"} info={uvi} />
      </View>
      <View style={styles.infoContainer}>
        <InfoItem title={"Probability of precipitation"} info={`${pop} %`} />
        <InfoItem title={"Weather condition per day"}>
          <View style={styles.iconContainer}>
            {weather.map((it, index) => (
              <Image key={index} style={styles.icon} source={{
                uri: `http://openweathermap.org/img/wn/${it.icon}@2x.png`,
              }} />
            ))}
          </View>
        </InfoItem>
      </View>
      <View style={styles.infoContainer}>
        <InfoItem title={"Wind speed"} info={`${windSpeedInKm} Km/h`} />
        <InfoItem title={"Wind direction"} info={windDirection} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },

  infoContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: 'rgba(228, 241, 254, 0.7)',
  },

  additionalText: {
    color: "#fff",
    opacity: 0.7,
    fontSize: 14,
  },

  iconContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  icon: {
    width: 40,
    height: 40,
  }
});
