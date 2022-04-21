import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { CategoriesContext } from "../contexts/CategoriesContext";
import Theme from "../Theme";

export default function HomeScreen() {
  const context = useContext(CategoriesContext);
  const navigation = useNavigation();

  function pressHandler(category) {
    context.setCurrentCategory(category);
    navigation.navigate("Stadiums", { category: category });
  }

  function renderCategory(itemData) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          android_ripple={{ color: Theme.colors.secondary }}
          onPress={() => pressHandler(itemData.item)}
        >
          <Text>{itemData.item.name}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={context.categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.name}
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
