import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

//Screens
import { MapScreen } from "@/screens";

export type RootStackHomeParamList = {
  MapScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackHomeParamList>();

const MapStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default MapStack;
