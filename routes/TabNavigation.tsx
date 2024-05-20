import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens

//Components
import { CustomTabBar } from "@/components";
import { View } from "@gluestack-ui/themed";

//Icons
import { HomeIcon } from "@/assets/icons";

//Navigators
import HomeStack from "./HomeStack";
import MapStack from "./MapStack";
import { Map } from "iconsax-react-native";

const Tab = createBottomTabNavigator();

const PlaceholderScreen = () => {
  return <View style={{ flex: 1, backgroundColor: "#604AE6" }} />;
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ tabBarIcon: () => <HomeIcon /> }}
      />
      <Tab.Screen
        name="MapStack"
        component={MapStack}
        options={{
          tabBarIcon: () => <Map size={22} color={"#fff"} />,
        }}
      />
      <Tab.Screen name="Chat" component={PlaceholderScreen} />
      <Tab.Screen name="Settings" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
