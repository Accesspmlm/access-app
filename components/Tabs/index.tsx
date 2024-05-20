import React, { useState } from "react";

//Externals
import { Box, Text } from "@gluestack-ui/themed";

//Stores
import { themeStore } from "@/stores";
import { Pressable } from "react-native";

interface TabsProps {
  tabs: { name: string; id: string }[];
  active: string;
  toggleTabActive: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, active, toggleTabActive }) => {
  const theme = themeStore((store) => store);

  const styleDisabled = {
    borderBottomWidth: 1,
    borderBottomColor: theme.gray,
  };
  const styleActive = {
    borderBottomWidth: 0,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: theme.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  };

  return (
    <Box flexDirection="row" w="100%">
      {tabs.map((tab, index) => (
        <Pressable key={tab.id + index} onPress={() => toggleTabActive(tab.id)}>
          <Box
            paddingHorizontal={15}
            paddingVertical={10}
            style={active == tab.id ? styleActive : styleDisabled}
          >
            <Text color={active == tab.id ? theme.primary : theme.black}>
              Establecimientos
            </Text>
          </Box>
        </Pressable>
      ))}
    </Box>
  );
};
export default Tabs;
