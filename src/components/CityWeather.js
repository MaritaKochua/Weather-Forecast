import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import currentDate from "./GetDate";

const City = (props) => {
  return (
    <View style={styles.cityContainer}>
      <View style={styles.flex}>
        <Text style={styles.cityName}>{props.title}</Text>
        <Text style={styles.whiteFont}>
          {currentDate(props.time).month + " " + currentDate(props.time).day}
        </Text>
      </View>
      <Text style={styles.weekDay}>{currentDate(props.time).weekday}</Text>
      <View style={styles.flex}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
          }}
        />
        <Text style={styles.temp}>{Math.round(props.temp)}°</Text>
        <View style={styles.tempOther}>
          <Text style={styles.winds}>
            Wind: {Math.round(props.wind)}km/h{"\n"}
            Humidity: {props.humidity}%
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(`${props.title}Forecast`)}
      >
        <Text style={styles.seeMore}>See forecast for 7 days</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cityContainer: {
    backgroundColor: "#037691",
    borderColor: "#00657D",
    borderWidth: 3,
    borderRadius: 7,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
  cityName: {
    color: "#fff",
    fontSize: 18,
  },
  whiteFont: {
    color: "#fff",
  },
  weekDay: {
    color: "#fff",
    fontSize: 14,
    backgroundColor: "#00657D",
    width: "100%",
    padding: 10,
  },
  winds: {
    color: "#fff",
    fontSize: 10,
    position: "absolute",
    bottom: "25%",
    right: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  temp: {
    color: "#fff",
    fontSize: 40,
    width: 100,
    height: 100,
    textAlign: "center",
    textAlignVertical: "center",
  },
  tempOther: {
    width: 80,
    height: 100,
    position: "relative",
  },
  seeMore: {
    fontSize: 10,
    color: "#fff",
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default City;
