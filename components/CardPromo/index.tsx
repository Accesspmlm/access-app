import React from "react";
import { Dimensions, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Box, Text } from "@gluestack-ui/themed";

//Components
import AutoOrientedImage from "../AutoOrientedImage";

//Icons
import { Like, Scan, Star } from "@/assets/icons";

//Stores
import { themeStore } from "@/stores";

//Types
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackHomeParamList } from "@/routes/HomeStack";
import { PromoTypes } from "@/types";
import Chip from "../Chip";

const widthScreen = Dimensions.get("screen").width;
type NavigationType = NativeStackNavigationProp<RootStackHomeParamList>;

interface CardPromosProps {
  data: PromoTypes;
  autoOriented?: boolean;
  hImage?: number;
  wImage?: number;
  mb?: number;
  mr?: number;
}

const CardPromo: React.FC<CardPromosProps> = ({
  data,
  autoOriented = false,
  hImage = 100,
  wImage = 100,
  mb = 32,
  mr = 0,
}) => {
  const theme = themeStore((store) => store);
  const navigation = useNavigation<NavigationType>();
  return (
    <Pressable onPress={() => navigation.navigate("Promo", { promo: data })}>
      <Box
        mb={mb}
        mr={mr}
        borderRadius={8}
        bg={theme.white}
        overflow="hidden"
        position="relative"
      >
        {autoOriented ? (
          <AutoOrientedImage source={data.banner} width={widthScreen * 0.95} />
        ) : (
          <Image
            source={{ uri: data.banner }}
            style={{ height: hImage, width: wImage }}
          />
        )}
        <LinearGradient
          colors={[
            "transparent",
            "transparent",
            "transparent",
            `#0000004a`,
            `#000000c3`,
          ]}
          start={{ x: 1, y: -1 }}
          end={{ x: 0, y: 1 }}
          style={{
            height: "100%",
            marginTop: -100,
            zIndex: 100,
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Box
            paddingVertical={2}
            paddingHorizontal={15}
            backgroundColor={`${theme.green}95`}
            borderRadius={100}
            position="absolute"
            top={10}
            left={10}
            zIndex={1000}
          >
            <Text color={theme.white}>Gratis</Text>
          </Box>
          <Box position="absolute" bottom={10} left={10}>
            <Text color={theme.white} fontWeight="$bold" mb={8}>
              Nombre de promo demaciado largo
            </Text>
            <Box flexDirection="row" gap={5}>
              <Chip
                bg={theme.white}
                colorValue={theme.white}
                value="110"
                icon={<Scan size={15} />}
              />
              <Chip
                bg={theme.primary}
                colorValue={theme.white}
                value="80"
                icon={<Like size={18} color={theme.white} />}
              />
              <Chip
                bg={theme.yellow}
                colorValue={theme.white}
                value="110"
                icon={<Star size={18} />}
              />
            </Box>
          </Box>
        </LinearGradient>
      </Box>
    </Pressable>
  );
};
export default CardPromo;
