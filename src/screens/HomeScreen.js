import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import City from "../components/CityWeather";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  const [TbToday, setTbToday] = useState(null);
  const [BtToday, setBtToday] = useState(null);
  const [KtToday, setKtToday] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=41.64159&lon=42.699741&exclude=minutely,hourly,daily,alerts&units=metric&appid=79566662307dfdea6889399696db5aae"
      )
      .then((res) => {
        setTbToday(res.data.current);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=41.64159&lon=41.635929&exclude=minutely,hourly,daily,alerts&units=metric&appid=79566662307dfdea6889399696db5aae"
      )
      .then((res) => {
        setBtToday(res.data.current);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=42.249611&lon=42.699741&exclude=minutely,hourly,daily,alerts&units=metric&appid=79566662307dfdea6889399696db5aae"
      )
      .then((res) => {
        setKtToday(res.data.current);
      });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#E1E9EB" }}>
      <Text style={styles.pageTitle}>Current Weather Forecast</Text>
      {TbToday && (
        <City
          navigation={props.navigation}
          style={styles.container}
          title="Tbilisi"
          temp={TbToday.temp}
          icon={TbToday.weather[0].icon}
          wind={TbToday.wind_speed}
          humidity={TbToday.humidity}
          time={TbToday.dt}
        />
      )}
      {BtToday && (
        <City
          navigation={props.navigation}
          style={styles.container}
          title="Batumi"
          temp={BtToday.temp}
          icon={BtToday.weather[0].icon}
          wind={BtToday.wind_speed}
          humidity={BtToday.humidity}
          time={BtToday.dt}
        />
      )}
      {KtToday && (
        <City
          navigation={props.navigation}
          title="Kutaisi"
          temp={KtToday.temp}
          icon={KtToday.weather[0].icon}
          wind={KtToday.wind_speed}
          humidity={KtToday.humidity}
          time={KtToday.dt}
        />
      )}
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

export default HomeScreen;
