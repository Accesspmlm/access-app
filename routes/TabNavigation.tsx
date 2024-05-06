import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens


//Components
import { CustomTabBar } from "@/components";
import { View } from "@gluestack-ui/themed";

//Icons
import { HomeIcon } from "@/assets/icons";

//Navigators
import HomeStack from "./HomeStack" 

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
        name="Stellar"
        component={HomeStack}
        options={{tabBarIcon: () => <HomeIcon /> }}
      />
      <Tab.Screen name="Upload" component={PlaceholderScreen} />
      <Tab.Screen name="Chat" component={PlaceholderScreen} />
      <Tab.Screen name="Settings" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
