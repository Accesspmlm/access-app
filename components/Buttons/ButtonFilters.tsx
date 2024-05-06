import React, { ReactNode } from "react";
import { Pressable } from "react-native";

import { Box, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonFiltersProps {
  primaryColor: string;
  secondaryColor: string;
  terciaryColor: string;
  header: ReactNode;
  description: string;
  isDisabled?: boolean;
  action: () => void;
  w?: number;
}

const ButtonFilters: React.FC<ButtonFiltersProps> = ({
  primaryColor,
  secondaryColor,
  terciaryColor,
  header,
  description,
  isDisabled = false,
  action,
  w = 110
}) => {
  return (
    <Pressable onPress={action}>
      <Box
        h={60}
        bg={isDisabled ? "#a8a8a8" : secondaryColor}
        alignItems="center"
        justifyContent="center"
        padding={7}
        borderRadius={10}
        position="relative"
        overflow="hidden"
        w={w}
      >
        <Box
          position="absolute"
          top={-10}
          overflow="hidden"
          borderBottomRightRadius={100}
          borderBottomLeftRadius={100}
        >
          <LinearGradient
            colors={[
              isDisabled ? `#c5c5c5` : terciaryColor,
              isDisabled ? `#656565` : primaryColor,
            ]}
            style={{ height: 60, width: w, zIndex: 100 }}
          />
        </Box>
        {header}
        <Text color="white">{description}</Text>
      </Box>
    </Pressable>
  );
};
export default ButtonFilters;
