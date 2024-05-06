import { Image, ImageBackground } from "react-native";

import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Promos } from "@/screens/ListBusiness";
import React from "react";
import { themeStore } from "@/stores";
import { StarIcon, StarIconEmpty } from "@/assets/icons";
import { ButtonGroup } from "@gluestack-ui/themed";

interface CardPromosProps {
  data: Promos;
}

const CardPromo: React.FC<CardPromosProps> = ({ data }) => {
  const theme = themeStore((store) => store);
  return (
    <Box
      flexDirection="row"
      h={172}
      mb={32}
      borderRadius={15}
      overflow="hidden"
      bg={theme.gray2}
    >
      <Box w="50%" padding={10}>
        <Box>
          <Text size="xl" fontWeight="bold" color={theme.white}>
            {data.name}
          </Text>
          <Text size="sm" color={theme.secondaryText}>
            {data.description}
          </Text>
        </Box>
        <Box>
          <Button mt={8} variant="outline" borderColor={theme.primary}>
            <Text color={theme.primary}>Adquirir promo</Text>
          </Button>
          <ButtonText mt={8} color={theme.blue}>
            Ver más
          </ButtonText>
        </Box>
      </Box>
      <Box
        position="relative"
        h={172}
        bg="red"
        w="50%"
        borderBottomLeftRadius={80}
        overflow="hidden"
      >
        <ImageBackground
          source={{ uri: data.banner }}
          style={{ height: "88%" }}
        ></ImageBackground>
        <Box
          position="absolute"
          alignItems="flex-end"
          paddingHorizontal={5}
          justifyContent="center"
          h={40}
          bottom={0}
          w="100%"
          bg={theme.green}
        >
          <Text color={theme.white}>{data.percentage}</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default CardPromo;
