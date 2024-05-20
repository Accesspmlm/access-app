import { useNavigation } from "@react-navigation/native";

//Icons
import {
  FacebookIcon,
  LocationIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/assets/icons";

//Externals
import { Box } from "@gluestack-ui/themed";
import { Dimensions, Pressable } from "react-native";

//Types
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackHomeParamList } from "@/routes/HomeStack";

const HEIGHT = Dimensions.get("screen").height;

type NavigationType = NativeStackNavigationProp<RootStackHomeParamList>;

interface MenuOptionsProps {
  h: number;
}

const MenuOptions = ({ h = HEIGHT * 0.45 }) => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Box
      w={50}
      h={h}
      backgroundColor="rgba(0,0,0,0.3)"
      position="absolute"
      right={0}
      justifyContent="center"
      alignItems="center"
      gap={15}
      //   zIndex={10}
    >
      <Pressable onPress={() => navigation.navigate("HowToGet")}>
        <LocationIcon />
      </Pressable>
      <Pressable>
        <FacebookIcon />
      </Pressable>
      <Pressable>
        <WhatsAppIcon />
      </Pressable>
      <Pressable>
        <PhoneIcon />
      </Pressable>
    </Box>
  );
};
export default MenuOptions;
