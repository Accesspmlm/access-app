import { NavigationContainer } from "@react-navigation/native";

//Navigations
import StackNavigation from "./StackNavigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
