import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import { Categories, ListBusiness, Business, Filter } from "@/screens";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Stellar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="ListBusiness" component={ListBusiness} />
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="Filter" component={Filter} />
    </Stack.Navigator>
  );
};

export default HomeStack;
