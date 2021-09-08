import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import MiniWeather from "../components/MiniWeather";

const WeekForecast = () => {
  const [TbWeek, setTbWeek] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=41.64159&lon=42.699741&exclude=current,minutely,hourly,alerts&units=metric&appid=79566662307dfdea6889399696db5aae"
      )
      .then((res) => {
        setTbWeek(res.data.daily);
      });
  }, []);

  return (
    <ScrollView>
      <Text style={styles.pageTitle}>Tbilisi Weather For The Week</Text>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[0].dt}
            icon={TbWeek[0].weather[0].icon}
            temp={TbWeek[0].temp.day}
          />
        )}
      </View>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[1].dt}
            icon={TbWeek[1].weather[0].icon}
            temp={TbWeek[1].temp.day}
          />
        )}
      </View>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[2].dt}
            icon={TbWeek[2].weather[0].icon}
            temp={TbWeek[2].temp.day}
          />
        )}
      </View>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[3].dt}
            icon={TbWeek[3].weather[0].icon}
            temp={TbWeek[3].temp.day}
          />
        )}
      </View>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[4].dt}
            icon={TbWeek[4].weather[0].icon}
            temp={TbWeek[4].temp.day}
          />
        )}
      </View>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[5].dt}
            icon={TbWeek[5].weather[0].icon}
            temp={TbWeek[5].temp.day}
          />
        )}
      </View>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[6].dt}
            icon={TbWeek[6].weather[0].icon}
            temp={TbWeek[6].temp.day}
          />
        )}
      </View>
      <View>
        {TbWeek && (
          <MiniWeather
            time={TbWeek[7].dt}
            icon={TbWeek[7].weather[0].icon}
            temp={TbWeek[7].temp.day}
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
