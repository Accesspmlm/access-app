import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import { Welcome } from "@/screens";

//Navigations
import TabNaigator from "./TabNavigation";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const Example = () => <Text>sdfdsf</Text>;

const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HomeTab" component={TabNaigator} />
      <Stack.Screen name="Other" component={Example} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
