import React, { ReactNode } from "react";

//Externals
import { Box, Text } from "@gluestack-ui/themed";

interface ChipProps {
  value: string;
  icon: ReactNode;
  bg: string;
  colorValue: string;
  opacity?: string;
}

const Chip: React.FC<ChipProps> = ({
  value,
  icon,
  bg,
  colorValue,
  opacity = "65",
}) => {
  return (
    <Box
      paddingVertical={2}
      paddingHorizontal={15}
      backgroundColor={`${bg}${opacity}`}
      borderRadius={100}
      flexDirection="row"
      alignItems="center"
      gap={5}
    >
      <Text color={colorValue}>{value}</Text>
      {icon}
    </Box>
  );
};
export default Chip;
