import React from "react";
import { Text, Box, Image } from "@gluestack-ui/themed";

//Stores
import { themeStore } from "@/stores";

//Translations
import { useTranslation } from "react-i18next";

//Types
import { Category } from ".";

const ItemCategory: React.FC<{ item: Category }> = ({ item }) => {
  const { t } = useTranslation();
  const theme = themeStore((state) => state);
  return (
    <Box h={100} w={100} alignItems="center">
      <Image source={item.bg} h={70} w={70} alt={item.name} />
      <Text color={theme.neutral}>{t(item.name)}</Text>
    </Box>
  );
};

export default ItemCategory;
