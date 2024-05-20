import { Image, StatusBar, Animated } from "react-native";
import { Box, Text } from "@gluestack-ui/themed";
//Stores
import { themeStore } from "@/stores";

//Components
import { Carousel } from "@/components";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";

export interface Category {
  id: string;
  name: string;
  bg: string;
}

interface Hero {
  id: string;
  url: string;
  title: string;
  desc: string;
}

const HEROS: Hero[] = [
  {
    id: "1",
    url: "https://www.binniguendahuatulco.com.mx/img/index/header4.jpg",
    title: "BINNIGUENDA",
    desc: "¡Celebre con nosotros en el Hotel Binniguenda y disfrute de una oferta exclusiva! Reserve su estadía de tres noches y reciba una cuarta noche de cortesía.",
  },
  {
    id: "2",
    url: "https://www.elindependiente.com/wp-content/uploads/2022/02/palladium-hotel-ibiza-656x368.jpg",
    title: "HOTEL BINNIGUENDA",
    desc: "¡Celebre con nosotros en el Hotel Binniguenda y disfrute de una oferta exclusiva! Reserve su estadía de tres noches y reciba una cuarta noche de cortesía.",
  },
  {
    id: "3",
    url: "https://www.binniguendahuatulco.com.mx/img/index/header4.jpg",
    title: "BINNIGUENDA",
    desc: "¡Celebre con nosotros en el Hotel Binniguenda y disfrute de una oferta exclusiva! Reserve su estadía de tres noches y reciba una cuarta noche de cortesía.",
  },
];

const Categories = ({ navigation }) => {
  const theme = themeStore((state) => state);

  const translateX = new Animated.Value(0);

  const handleNavigate = async () => {
    navigation.navigate("HomeTab");
  };

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(translateX, {
        toValue: 0, // Vuelve a la posición inicial o ajusta según la necesidad
        bounciness: 10,
        useNativeDriver: true,
      }).start();

      // Verifica si el círculo ha llegado al extremo derecho
      if (event.nativeEvent.translationX >= 70) {
        // Ajusta este valor según el ancho de tu contenedor
        handleNavigate(); // Función que quieres ejecutar
      }
    }
  };

  return (
    <Box flex={1} position="relative">
      <Box
        position="absolute"
        padding={24}
        paddingTop={0}
        h={90}
        w="100%"
        zIndex={100}
      >
        <Image
          source={require("@/assets/logo.png")}
          style={{
            width: 123,
            height: 36,
            marginTop: StatusBar.currentHeight + 10,
          }}
        />
      </Box>
      <Carousel stellar={HEROS} />
      <Box
        bottom={30}
        right={24}
        w="100%"
        alignItems="flex-end"
        position="absolute"
      >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Box
            backgroundColor={theme.white}
            h={70}
            w={150}
            borderRadius={100}
            padding={5}
          >
            <PanGestureHandler
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHandlerStateChange}
            >
              <Animated.View
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: theme.primary,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ translateX }],
                }}
              >
                <Text color={theme.white}>Iniciar</Text>
              </Animated.View>
            </PanGestureHandler>
          </Box>
        </GestureHandlerRootView>
      </Box>
    </Box>
  );
};
export default Categories;
