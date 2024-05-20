import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";

//Stores
import { themeStore } from "@/stores";

//Components
import { ModalFilterBusiness, CardPromo } from "@/components";

//Externals
import { useQuery } from "@tanstack/react-query";
import { Box, Text } from "@gluestack-ui/themed";

//Connections
import { getCompanies } from "@/connections";
import {
  HoltelsIcon,
  Logo,
  RestaurantsIcon,
  ShopIcon,
  ToursIcon,
  TransportIcon,
} from "@/assets/icons";

const height = Dimensions.get("screen").height;

export interface Filter {
  id: string;
  name: string;
  active: boolean;
}

const PROMOS = [
  {
    id: "1",
    name: "T-Bone Royale",
    banner:
      "https://cdn0.bodas.com.mx/article-vendor/4616/original/1280/jpeg/b4ef90fe-608b-4268-8ee0-87a9ee677bda_5_134616.jpeg",
    description: "600 gr. de un jugoso filete de res de primera calidad.",
    percentage: "40% de descuento",
  },
  {
    id: "2",
    name: "T-Bone Royale",
    banner:
      "https://cdn.shopify.com/s/files/1/0078/5730/7737/files/unnamed_12_480x480.jpg?v=1694039772",
    description: "600 gr. de un jugoso filete de res de primera calidad.",
    percentage: "40% de descuento",
  },
  {
    id: "3",
    name: "T-Bone Royale",
    banner:
      "https://i0.wp.com/www.brasasysabores.com/wp-content/uploads/2020/04/T-bone-steak-a-la-parrilla-con-sal-pimienta-y-romero-scaled-1.jpg",
    description: "600 gr. de un jugoso filete de res de primera calidad.",
    percentage: "40% de descuento",
  },
  {
    id: "4",
    name: "T-Bone Royale",
    banner:
      "https://i0.wp.com/www.brasasysabores.com/wp-content/uploads/2020/04/T-bone-steak-a-la-parrilla-con-sal-pimienta-y-romero-scaled-1.jpg",
    description: "600 gr. de un jugoso filete de res de primera calidad.",
    percentage: "40% de descuento",
  },
  {
    id: "5",
    name: "T-Bone Royale",
    banner:
      "https://i0.wp.com/www.brasasysabores.com/wp-content/uploads/2020/04/T-bone-steak-a-la-parrilla-con-sal-pimienta-y-romero-scaled-1.jpg",
    description: "600 gr. de un jugoso filete de res de primera calidad.",
    percentage: "40% de descuento",
  },
];

const Home = ({ navigation }) => {
  const theme = themeStore((store) => store);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState<Filter[]>([
    { id: "1", name: "Mariscos", active: true },
    { id: "2", name: "Comida típica", active: true },
    { id: "3", name: "Steakhouse", active: true },
  ]);
  const CATEGORIES = [
    {
      id: "2",
      title: "Restaurantes",
      icon: <RestaurantsIcon size={30} />,
      bgColor: theme.restaurantsColor,
    },
    {
      id: "1",
      title: "Hoteles",
      icon: (
        <Box ml={5}>
          <HoltelsIcon size={30} />
        </Box>
      ),
      bgColor: theme.hotelsColor,
    },
    {
      id: "3",
      title: "Transporte",
      icon: <TransportIcon size={30} />,
      bgColor: theme.transportColor,
    },
    {
      id: "4",
      title: "Tiendas",
      icon: <ShopIcon size={30} />,
      bgColor: theme.shopColor,
    },
    {
      id: "5",
      title: "Tours",
      icon: (
        <Box ml={15}>
          <ToursIcon size={30} />
        </Box>
      ),
      bgColor: theme.toursColor,
    },
  ];

  const { data: restaurants } = useQuery({
    queryKey: ["example"],
    queryFn: getCompanies,
  });
  const handleChangeFilter = (id: string) => {
    const newFilter = filters.map((f) =>
      f.id == id ? { ...f, active: !f.active } : f
    );
    setFilters(newFilter);
  };

  const closeModal = async () => {
    setShowModal(false);
  };

  const goToPromo = () => {
    navigation.navigate("Promo");
  };

  const COMPANIES = restaurants || [];

  return (
    <Box
      bg={theme.bg}
      flex={1}
      alignItems="center"
      paddingTop={StatusBar.currentHeight + 10}
    >
      <ModalFilterBusiness
        showModal={showModal}
        closeModal={closeModal}
        handleChangeFilter={handleChangeFilter}
        filters={filters}
      />
      <Box w={"95%"}>
        <Box h={120}>
          <Box mb={16} flexDirection="row" alignItems="center" gap={5}>
            <Logo />
            <Text color={theme.primary} fontWeight="$bold" size="lg">
              ACCESS
            </Text>
          </Box>
          <Box flexDirection="column">
            <Box flexDirection="row" gap={5}>
              <Text size="xl" fontWeight="bold" color={theme.black}>
                Más de
              </Text>
              <Text size="xl" fontWeight="bold" color={theme.primary}>
                $82,000
              </Text>
            </Box>
            <Text>En descuentos</Text>
          </Box>
        </Box>
        <Box>
          <FlatList
            data={CATEGORIES}
            horizontal
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate("ListPromos")}>
                <Box alignItems="center" w={100} mb={10} pb={5}>
                  <Box
                    height={60}
                    w={60}
                    borderRadius={8}
                    backgroundColor={`${item.bgColor}50`}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>{item.icon}</Box>
                  </Box>
                  <Text fontWeight="$bold">{item.title}</Text>
                </Box>
              </Pressable>
            )}
          />
        </Box>
        <ScrollView style={{ height: height - 370 }}>
          <Box>
            <Text size="lg" fontWeight="$bold" color={theme.black} mb={10}>
              Recomendados 
            </Text>
            <FlatList
              data={PROMOS}
              renderItem={({ item }) => (
                <CardPromo
                  mb={10}
                  mr={25}
                  wImage={250}
                  hImage={200}
                  data={item}
                />
              )}
              keyExtractor={(key) => key.id}
              horizontal
            />
          </Box>
          <Box mt={10}>
            <Text size="lg" fontWeight="$bold" color={theme.black} mb={10}>
              En tendencia
            </Text>
            <CardPromo mb={10} data={PROMOS[0]} autoOriented={true} />
          </Box>
          <Box mt={10} mb={20}>
            <Text size="lg" fontWeight="$bold" color={theme.black} mb={10}>
              Los más escaneados
            </Text>
            <FlatList
              data={PROMOS}
              renderItem={({ item }) => (
                <CardPromo
                  mb={10}
                  mr={25}
                  wImage={250}
                  hImage={200}
                  data={item}
                />
              )}
              keyExtractor={(key) => key.id}
              horizontal
            />
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};
export default Home;
