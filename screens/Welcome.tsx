import React, { useRef, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

//Externals
import { Box, Text, Center, Button, ButtonText } from "@gluestack-ui/themed";

//Animations
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
import {
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App({ navigation }) {
  const animation = useRef(null);
  const bottomBGW = useSharedValue(-500);
  const opacityContent = useSharedValue(0);

  const [fontsLoaded] = useFonts({
    regular: require("../assets/fonts/Kodchasan/Kodchasan-Light.ttf"),
    bold: require("../assets/fonts/Kodchasan/Kodchasan-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      bottomBGW.value = withTiming(bottomBGW.value + windowHeight / 2);
    }, 2600);
    return () => clearTimeout(timeOutId);
  }, []);

  useEffect(() => {
    const timeOutI = setTimeout(() => {
      opacityContent.value = withSpring(1, {
        duration: 500,
      });
    }, 3000);
    return () => clearTimeout(timeOutI);
  }, []);

  if (!fontsLoaded) return null;
  
  const TOP_MAN = (windowHeight / 4) - 10;
  const WIDTH_MAN = (windowWidth / 3) * 2;
  const LEFT_MAN = (windowWidth / 2) - WIDTH_MAN / 2; 

  return (
    <View
      onLayout={onLayout}
      style={{
        flex: 1,
      }}
    >
      <Box mt={35} position="absolute">
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: windowWidth,
            height: (windowHeight / 3) * 2,
          }}
          source={require("../assets/logoAnimated.json")}
          loop={false}
          duration={2500}
        />
      </Box>
      <Animated.Image
        source={require("../assets/man.jpg")}
        style={{
          width: WIDTH_MAN,
          position: "absolute",
          top: TOP_MAN,
          left: LEFT_MAN,
          opacity: opacityContent
        }}
      />
      <Animated.Image
        source={require("../assets/bgWelcome.png")}
        style={{
          width: windowWidth,
          position: "absolute",
          bottom: bottomBGW,
        }}
      />
      <Animated.View
        style={{ position: "absolute", bottom: 0, opacity: opacityContent }}
      >
        <Center w={windowWidth} paddingBottom={40}>
          <Text
            mb={15}
            color="white"
            size="2xl"
            textAlign="center"
            fontFamily="bold"
          >
            Empieza a explorar tus beneficios
          </Text>
          <Text color="white" w="90%" textAlign="center">
            Revolucionamos la forma que te permite acceder a una amplia variedad
            de servicios disponibles en todo el mundo.
          </Text>
          <Button mt={24} action="primary" bg="$primary" onPress={() => navigation.navigate("Home")}>
            <ButtonText fontFamily="regular">Acceder</ButtonText>
          </Button>
        </Center>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}
