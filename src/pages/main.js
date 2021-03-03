import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/header';
import Info from '../components/info';
import Week from '../components/week';
import { getCurrentCondition, getCurrentSunrise, getCurrentSunset } from '../redux/forecast/forecast-selector';
import { getBackgroundColorByCondition } from '../utils/common';

export default function Main() {
  const condition = useSelector(getCurrentCondition);
  const sunset = useSelector(getCurrentSunset);
  const sunrise = useSelector(getCurrentSunrise);
  const activeBackgroundColor = getBackgroundColorByCondition(condition, sunset, sunrise);

  return (
    <View style={{ flex: 1, backgroundColor: `${activeBackgroundColor}` }}>
      <Header />
      <Week />
      <ScrollView>
        <Info />
      </ScrollView>
    </View>
  );
};
