import { BackIcon, SearchIcon } from "@/assets/icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Pressable } from "react-native";

interface HeaderProps {
  showLogo?: boolean;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showLogo = true,
  showSearch = true,
}) => {
  const navigation = useNavigation();
  return (
    <Box
      position="absolute"
      top={0}
      h={90}
      zIndex={100}
      w={"100%"}
      justifyContent="flex-end"
      paddingBottom={10}
    >
      <Box position="absolute" top={0} w="100%">
        <LinearGradient
          colors={[`#000000`, "transparent"]}
          style={{ height: 120, zIndex: 1 }}
        />
      </Box>
      <Box
        w="95%"
        alignSelf="center"
        zIndex={10}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
      >
        {showLogo ? (
          <Image
            source={require("@/assets/logo.png")}
            style={{ width: 123, height: 36 }}
          />
        ) : (
          <Pressable onPress={() => navigation.goBack()}>
            <Box flexDirection="row" alignItems="center">
              <BackIcon />
              <Text color="white" ml={10}>
                Regresar
              </Text>
            </Box>
          </Pressable>
        )}
        {showSearch && <SearchIcon size={36} />}
      </Box>
    </Box>
  );
};
export default Header;
