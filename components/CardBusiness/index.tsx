import React, { useState } from "react";
import { Dimensions, ImageBackground, Pressable } from "react-native";

//Externals
import { Box, Text, Spinner } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

//Stores
import { themeStore } from "@/stores";

//Icons
import { Star, Like } from "@/assets/icons";

//Types
import { CompanyTypes } from "@/types";

//Sections
import BGCard from "./BGCard";
import { Gallery } from "iconsax-react-native";
import Chip from "../Chip";

const WIDTH = Dimensions.get("screen").width;

interface CardBusinessProps {
  data: CompanyTypes;
  action: (company: CompanyTypes) => void;
}

const CardBusiness: React.FC<CardBusinessProps> = ({ data, action }) => {
  const theme = themeStore((store) => store);

  const [loadedBG, setLoadedBG] = useState(false);

  return (
    <Pressable
      onPress={() => action(data)}
      style={{
        marginBottom: 24,
        elevation: 6,
        backgroundColor: theme.white,
        borderRadius: 8,
        overflow: "hidden",
        width: WIDTH * 0.95,
      }}
    >
      <Box>
        <Box h={172} borderRadius={15}>
          <ImageBackground
            source={{ uri: data.banner }}
            onLoad={() => setLoadedBG(true)}
          >
            {loadedBG ? (
              <Box position="relative" h="100%" w="100%">
                <Box position="absolute" style={{ zIndex: 1000 }}>
                  <BGCard url={data.logo} />
                </Box>
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
                    position="absolute"
                    bottom={10}
                    paddingHorizontal={24}
                    flexDirection="row"
                    gap={5}
                  >
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
                    <Chip
                      bg={theme.green}
                      colorValue={theme.white}
                      value="11 Promociones"
                      icon={<Text></Text>}
                    />
                  </Box>
                </LinearGradient>
              </Box>
            ) : (
              <Box
                justifyContent="center"
                alignItems="center"
                h="100%"
                w="100%"
                bg="#96b2ca"
                gap={10}
              >
                <Gallery size="32" color="#ffffff" />
                <Spinner size="large" color="#ffffff" />
              </Box>
            )}
          </ImageBackground>
        </Box>
        <Box paddingHorizontal={24} paddingVertical={8}>
          <Text size="lg" fontWeight="$medium" color={theme.black}>
            {data.name}
          </Text>
          <Box flexDirection="row">
            {data.tags.map((tag, index) => (
              <Text key={index + tag} size="sm" color={theme.secondaryText}>
                {`${tag}${index + 1 != data.tags.length ? ", " : ""}`}
              </Text>
            ))}
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};
export default CardBusiness;
