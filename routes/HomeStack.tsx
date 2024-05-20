import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

//Screens
import {
  Home,
  Business,
  Filter,
  Promo,
  HowToGet,
  Company,
  ListPromos,
} from "@/screens";
import { CompanyTypes, PromoTypes } from "@/types";

export type RootStackHomeParamList = {
  Home: undefined;
  Promo: { promo: PromoTypes };
  Business: undefined;
  Filter: undefined;
  HowToGet: undefined;
  Company: { company: CompanyTypes };
  ListPromos: undefined;
};

const Stack = createNativeStackNavigator<RootStackHomeParamList>();

const HomeStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Promo" component={Promo} />
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="HowToGet" component={HowToGet} />
      <Stack.Screen name="Company" component={Company} />
      <Stack.Screen name="ListPromos" component={ListPromos} />
    </Stack.Navigator>
  );
};

export default HomeStack;
