import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import StadiumsScreen from "./screens/StadiumsScreen";
import StadiumScreen from "./screens/StadiumScreen";
import CategoriesContextProvider from "./contexts/CategoriesContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CategoriesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "My Stadiums",
                headerShown: true,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="Stadiums"
              component={StadiumsScreen}
              options={({ route }) => ({
                title: route.params.category.name + " Stadiums",
              })}
            ></Stack.Screen>
            <Stack.Screen
              name="Stadium"
              component={StadiumScreen}
              options={({ route }) => ({
                title: route.params.stadium.name,
              })}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </CategoriesContextProvider>
    </>
  );
}
