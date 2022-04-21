import { useEffect, useState, useContext } from "react";
import { View, FlatList, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getStadiums } from "../services/StadiumService";
import Theme from "../Theme";
import { StadiumContext } from "../contexts/StadiumContext";

export default function StadiumsScreen({ route }) {
  const category = route.params.category.name;
  const [stadiums, setStadiums] = useState([]);
  const context = useContext(StadiumContext);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchedStadiums = getStadiums(category);
    setStadiums(fetchedStadiums);
  }, []);

  function pressHandler(stadium) {
    context.setCurrentStadium(stadium);
    navigation.navigate("Stadium", { stadium: stadium });
  }

  function renderStadium(itemData) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          android_ripple={{ color: Theme.colors.secondary }}
          onPress={() => pressHandler(itemData.item)}
        >
          <Text>{itemData.item.name}</Text>
          <Text>{itemData.item.location}</Text>
          {itemData.item.teams.map((team, _index) => {
            <Text>{team}</Text>;
          })}
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={stadiums}
        renderItem={renderStadium}
        keyExtractor={(item) => item.Id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: Theme.colors.primary,
    padding: 20,
    margin: 20,
    elevation: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
