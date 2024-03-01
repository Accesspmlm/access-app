import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import { Welcome } from "@/screens";

//Navigations
import TabNaigator from "./TabNavigation"

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={TabNaigator} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
