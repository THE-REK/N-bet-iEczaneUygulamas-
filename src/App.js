import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { City, Pharmacy } from "./pages";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Şehirler" component={City} />
        <Stack.Screen name="Nöbetçi Eczaneler" component={Pharmacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
