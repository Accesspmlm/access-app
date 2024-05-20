import { Pressable } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";

//Stores
import { themeStore } from "@/stores";
import { Filter } from "@/screens/Home";
import React from "react";

interface ItemOptionProps {
  data: Filter;
  handleChange: (id: string) => void;
}

const ItemOption: React.FC<ItemOptionProps> = ({ data, handleChange }) => {
  const theme = themeStore((store) => store);
  return (
    <Pressable onPress={() => handleChange(data.id)}>
      <Box
        padding={7}
        paddingHorizontal={20}
        borderColor={!data.active ? theme.gray : theme.primary}
        borderWidth={1}
        borderRadius={10}
        bg={data.active ? theme.primary : theme.white}
      >
        <Text color={data.active ? theme.white : "$textDark800"}>
          {data.name}
        </Text>
      </Box>
    </Pressable>
  );
};
export default ItemOption;
