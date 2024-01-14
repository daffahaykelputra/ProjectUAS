const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./screens/HomePage";
import Aset2 from "./screens/Aset2";
import Aset from "./screens/Aset";
import Kategori2 from "./screens/Kategori2";
import Kategori from "./screens/Kategori";
import LoadingScreen from "./screens/LoadingScreen";
import Total2 from "./screens/Total2";
import Total from "./screens/Total";
import Setting from "./screens/Setting";
import AddMemo from "./screens/AddMemo";
import Memo1 from "./screens/Memo1";
import TahunanUangKeluar from "./screens/TahunanUangKeluar";
import TahunanUangMasuk from "./screens/TahunanUangMasuk";
import UangKeluar from "./screens/UangKeluar";
import UangMasuk from "./screens/UangMasuk";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Aset2"
              component={Aset2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Aset"
              component={Aset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Kategori2"
              component={Kategori2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Kategori"
              component={Kategori}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Total2"
              component={Total2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Total"
              component={Total}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddMemo"
              component={AddMemo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Memo1"
              component={Memo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TahunanUangKeluar"
              component={TahunanUangKeluar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TahunanUangMasuk"
              component={TahunanUangMasuk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UangKeluar"
              component={UangKeluar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UangMasuk"
              component={UangMasuk}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
