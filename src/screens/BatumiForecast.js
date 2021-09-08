import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import MiniWeather from "../components/MiniWeather";

const WeekForecast = () => {
  const [BtWeek, setBtWeek] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=41.64159&lon=41.635929&exclude=current,minutely,hourly,alerts&units=metric&appid=79566662307dfdea6889399696db5aae"
      )
      .then((res) => {
        setBtWeek(res.data.daily);
      });
  }, []);

  return (
    <ScrollView>
      <Text style={styles.pageTitle}>Batumi Weather For The Week</Text>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[0].dt}
            icon={BtWeek[0].weather[0].icon}
            temp={BtWeek[0].temp.day}
          />
        )}
      </View>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[1].dt}
            icon={BtWeek[1].weather[0].icon}
            temp={BtWeek[1].temp.day}
          />
        )}
      </View>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[2].dt}
            icon={BtWeek[2].weather[0].icon}
            temp={BtWeek[2].temp.day}
          />
        )}
      </View>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[3].dt}
            icon={BtWeek[3].weather[0].icon}
            temp={BtWeek[3].temp.day}
          />
        )}
      </View>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[4].dt}
            icon={BtWeek[4].weather[0].icon}
            temp={BtWeek[4].temp.day}
          />
        )}
      </View>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[5].dt}
            icon={BtWeek[5].weather[0].icon}
            temp={BtWeek[5].temp.day}
          />
        )}
      </View>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[6].dt}
            icon={BtWeek[6].weather[0].icon}
            temp={BtWeek[6].temp.day}
          />
        )}
      </View>
      <View>
        {BtWeek && (
          <MiniWeather
            time={BtWeek[7].dt}
            icon={BtWeek[7].weather[0].icon}
            temp={BtWeek[7].temp.day}
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
