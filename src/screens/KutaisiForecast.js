import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import MiniWeather from "../components/MiniWeather";

const WeekForecast = () => {
  const [KtWeek, setKtWeek] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=42.249611&lon=42.699741&exclude=current,minutely,hourly,alerts&units=metric&appid=79566662307dfdea6889399696db5aae"
      )
      .then((res) => {
        setKtWeek(res.data.daily);
      });
  }, []);
  return (
    <ScrollView>
      <Text style={styles.pageTitle}>Kutaisi Weather For The Week</Text>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[0].dt}
            icon={KtWeek[0].weather[0].icon}
            temp={KtWeek[0].temp.day}
          />
        )}
      </View>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[1].dt}
            icon={KtWeek[1].weather[0].icon}
            temp={KtWeek[1].temp.day}
          />
        )}
      </View>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[2].dt}
            icon={KtWeek[2].weather[0].icon}
            temp={KtWeek[2].temp.day}
          />
        )}
      </View>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[3].dt}
            icon={KtWeek[3].weather[0].icon}
            temp={KtWeek[3].temp.day}
          />
        )}
      </View>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[4].dt}
            icon={KtWeek[4].weather[0].icon}
            temp={KtWeek[4].temp.day}
          />
        )}
      </View>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[5].dt}
            icon={KtWeek[5].weather[0].icon}
            temp={KtWeek[5].temp.day}
          />
        )}
      </View>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[6].dt}
            icon={KtWeek[6].weather[0].icon}
            temp={KtWeek[6].temp.day}
          />
        )}
      </View>
      <View>
        {KtWeek && (
          <MiniWeather
            time={KtWeek[7].dt}
            icon={KtWeek[7].weather[0].icon}
            temp={KtWeek[7].temp.day}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#02579B",
    fontWeight: "bold",
  },
});

export default WeekForecast;
