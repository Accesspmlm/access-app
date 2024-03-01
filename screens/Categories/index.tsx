import { Text, Box, Image, Center, FlatList } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";

//Stores
import { themeStore } from "@/stores";

interface Category {
  id: number;
  name: string;
  bg: string;
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "restaurantes",
    bg: require("@/assets/bgRestaurantes.png"),
  },
  {
    id: 2,
    name: "hoteles",
    bg: require("@/assets/bgHoteles.png"),
  },
  {
    id: 3,
    name: "transporte",
    bg: require("@/assets/bgTransporte.png"),
  },
  {
    id: 4,
    name: "tiendas",
    bg: require("@/assets/bgTiendas.png"),
  },
  {
    id: 5,
    name: "tours",
    bg: require("@/assets/bgTours.png"),
  },
];

const Categories = () => {
  const theme = themeStore((state) => state);

  return (
    <Box flex={1}>
      <Box h="65%" position="relative">
        <Image
          zIndex={10}
          w="100%"
          h="100%"
          alt="banner"
          source={{
            uri: "https://www.binniguendahuatulco.com.mx/img/index/header4.jpg",
          }}
        />
        <LinearGradient
          colors={["transparent", `${theme.bg}`]}
          style={{ height: 100, marginTop: -100, zIndex: 100 }}
        />
        <Center zIndex={10000} mt={-40}>
          <Text
            color="white"
            size="3xl"
            w={300}
            textAlign="center"
            fontWeight="bold"
          >
            HOTEL BINNIGUENDA HUATULCO
          </Text>
          <Text color={theme.neutral} w="95%" textAlign="center">
            ¡Celebre con nosotros en el Hotel Binniguenda y disfrute de una
            oferta exclusiva! Reserve su estadía de tres noches y reciba una
            cuarta noche de cortesía.
          </Text>
        </Center>
      </Box>
      <Box h="35%" position="relative" bg={theme.bg}>
        <Box position="absolute" bottom={10}>
          <FlatList
            data={CATEGORIES}
            horizontal
            renderItem={({ item }) => (
              <Box h={100} w={100} alignItems="center">
                <Image source={item.bg} h={70} w={70} alt={item.name} />
                <Text color={theme.neutral}>{item.name}</Text>
              </Box>
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Categories;
