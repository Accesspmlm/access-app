import React, { useRef, useState, useEffect } from "react";
import { FlatList, Dimensions, Animated, Pressable } from "react-native";

import { Text, Box, Image } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";

//Stores
import { themeStore } from "@/stores";
import { Star } from "@/assets/icons";

const windowWidth = Dimensions.get("window").width;

const Carousel = ({ stellar }) => {
  const theme = themeStore((state) => state);

  const [currIndex, setCurrIndex] = useState(0);
  const [directionSlider, setDirectionSlider] = useState<string>("right");
  const [isPressed, setIsPressed] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPressed) {
      intervalRef.current = setInterval(() => {
        scrollTo();
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [currIndex, isPressed]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        clearInterval(intervalRef.current);
      };
    }, [])
  );

  const toRight = () => {
    slidesRef.current.scrollToIndex({ index: currIndex + 1 });
  };

  const toLeft = () => {
    slidesRef.current.scrollToIndex({ index: currIndex - 1 });
  };

  const scrollTo = () => {
    if (directionSlider == "right") {
      toRight();
    } else {
      toLeft();
    }
  };

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrIndex(viewableItems[0].index);
    if (viewableItems[0].index == 0) {
      setDirectionSlider("right");
    }
    if (viewableItems[0].index == stellar.length - 1) {
      setDirectionSlider("left");
    }
  }).current;

  return (
    <FlatList
      horizontal
      pagingEnabled
      bounces={false}
      data={stellar}
      keyExtractor={(item) => item.id}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={slidesRef}
      renderItem={({ item }) => (
        <Pressable
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <Box position="relative" w={windowWidth} height="100%">
            <Image
              zIndex={10}
              w={windowWidth}
              h="85%"
              alt="banner"
              source={{
                uri: item.url,
              }}
            />
            <LinearGradient
              colors={["transparent", `#000000b7`, `#000000`, `#000`]}
              style={{
                height: "55%",
                marginTop: -100,
                zIndex: 100,
                position: "absolute",
                bottom: 0,
                width: "100%",
              }}
            >
              <Box
                zIndex={100}
                position="absolute"
                bottom={130}
                paddingHorizontal={24}
              >
                <Text color="white" size="3xl" w={300} fontWeight="bold">
                  {item.title}
                </Text>
                <Text color={theme.neutral}>{item.desc}</Text>
                <Box flexDirection="row" mt={10} gap={10}>
                  <Text color={theme.green}> - 50% </Text>
                  <Box flexDirection="row" gap={2}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </Box>
                </Box>
                <Pressable style={{ marginTop: 16 }}>
                  <Text color={theme.primary}>Ver promoción</Text>
                </Pressable>
              </Box>
            </LinearGradient>
          </Box>
        </Pressable>
      )}
    />
  );
};
export default Carousel;
