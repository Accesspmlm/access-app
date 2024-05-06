import React, { useState } from "react";
import { ImageBackground, Pressable } from "react-native";

//Externals
import { Box, Text, Spinner } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

//Stores
import { themeStore } from "@/stores";

//Icons
import { StarIcon, StarIconEmpty } from "@/assets/icons";

//Types
import { Company } from "@/types";

//Sections
import BGCard from "./BGCard";
import { Gallery } from "iconsax-react-native";

interface CardBusinessProps {
  data: Company;
  action: (id: string) => void;
}

const CardBusiness: React.FC<CardBusinessProps> = ({ data, action }) => {
  const theme = themeStore((store) => store);

  const [loadedBG, setLoadedBG] = useState(false);

  return (
    <Pressable onPress={() => action(data._id)}>
      <Box h={172} mb={32} borderRadius={15} overflow="hidden">
        <ImageBackground
          source={{ uri: data.banner }}
          style={{ height: "100%" }}
          onLoad={() => setLoadedBG(true)}
        >
          {loadedBG ? (
            <Box position="relative" h="100%" w="100%">
              <Box position="absolute" style={{ zIndex: 1000 }}>
                <BGCard url={data.logo} />
              </Box>
              <Box
                padding={10}
                position="absolute"
                right={0}
                bottom={60}
                bg={theme.green}
                zIndex={1000}
                borderTopLeftRadius={10}
                borderBottomLeftRadius={10}
              >
                <Text
                  color="$white"
                  size="xs"
                >{`${data.activePromotions} Promociones activas`}</Text>
              </Box>
              <Box
                padding={10}
                position="absolute"
                right={-2}
                bottom={-2}
                zIndex={1000}
                borderWidth={1}
                borderColor="$white"
                borderTopLeftRadius={10}
                flexDirection="row"
              >
                {Array.from({ length: 5 }, (_, index) => {
                  if (index + 1 <= data.stars) {
                    return <StarIcon key={index} />;
                  } else {
                    return <StarIconEmpty key={index} />;
                  }
                })}
              </Box>
              <Box
                w={1}
                h={60}
                bg="$amber100"
                position="absolute"
                left={10}
                top={90}
                zIndex={1000}
              ></Box>
              <Box
                w={20}
                h={1}
                bg="$amber100"
                position="absolute"
                left={10}
                top={150}
                zIndex={1000}
              ></Box>
              <Text
                size="xl"
                color="$white"
                position="absolute"
                top={133}
                left={40}
                zIndex={1000}
              >
                {data.name}
              </Text>
              <LinearGradient
                colors={["transparent", "#000000"]}
                style={{
                  height: 110,
                  zIndex: 100,
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                }}
              />
              <LinearGradient
                colors={["transparent", "#000000"]}
                end={{ x: 0, y: 0.5 }}
                start={{ x: 1, y: 0.5 }}
                style={{
                  height: "100%",
                  zIndex: 100,
                  position: "absolute",
                  width: 80,
                  top: 0,
                  left: 0,
                }}
              />
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
    </Pressable>
  );
};
export default CardBusiness;
