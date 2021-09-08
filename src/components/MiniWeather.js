import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import currentDate from "./GetDate";

const MiniWeather = (props) => {
  return (
    <View style={styles.miniForecast}>
      <Text style={styles.text}>{currentDate(props.time).short}</Text>
      <Image
        style={{ width: 75, height: 75 }}
        source={{
          uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
        }}
      />
      <Text style={styles.text}>{Math.round(props.temp)}°</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  miniForecast: {
    height: 80,
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 10,
    backgroundColor: "#037691",
    borderColor: "#00657D",
    borderWidth: 3,
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    width: "30%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default MiniWeather;
