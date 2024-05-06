import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Navigations
import TabNaigator from "./TabNavigation";

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabNaigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
