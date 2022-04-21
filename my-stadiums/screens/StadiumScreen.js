import { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { getStaticMapUrl } from "../services/MapService";

const width = 400;
const height = 200;

export default function StadiumScreen({ route }) {
  const [mapUrl, setMapUrl] = useState(null);
  const [stadium, setStadium] = useState(route.params.stadium);

  useEffect(() => {
    const fetchedUrl = getStaticMapUrl(
      stadium,
      16,
      width,
      height,
      "red",
      "satellite"
    );
    setMapUrl(fetchedUrl);
  }, []);

  function renderTeam(itemData) {
    console.log(itemData);

    return (
      <View style={styles.teamContainer}>
        <Text style={styles.bullet}>{"\u2022"}</Text>
        <Text style={styles.teamText}>{itemData.item}</Text>
      </View>
    );
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: mapUrl }}></Image>
      <View style={styles.stadiumInfoContainer}>
        <Text style={styles.text}>Opened in {stadium.opened}</Text>
        <Text>{"Teams that call this stadium home:"}</Text>
        <FlatList
          data={stadium.teams}
          renderItem={renderTeam}
          keyExtractor={(item) => item}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginBottom: 20,
    width: width,
    height: height,
  },
  stadiumInfoContainer: {
    paddingLeft: 20,
  },
  text: {
    paddingBottom: 20,
  },
  teamText: {
    paddingLeft: 10,
    paddingTop: 5,
  },
  teamContainer: {
    flexDirection: "row",
  },
  bullet: {
    paddingTop: 5,
  },
});
