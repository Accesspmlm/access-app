import { FacebookIcon, LocationIcon, WhatsAppIcon, PhoneIcon } from "@/assets/icons";
import { CardPromo, Header } from "@/components";
import { themeStore } from "@/stores";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";

const PROMOS = [
  {
    id: "1",
    name: "T-Bone Royale",
    banner:
      "https://i0.wp.com/www.brasasysabores.com/wp-content/uploads/2020/04/T-bone-steak-a-la-parrilla-con-sal-pimienta-y-romero-scaled-1.jpg",
    description: "600 gr. de un jugoso filete de res de primera calidad.",
    percentage: "40% de descuento",
  },
  {
    id: "2",
    name: "T-Bone Royale",
    banner:
      "https://i0.wp.com/www.brasasysabores.com/wp-content/uploads/2020/04/T-bone-steak-a-la-parrilla-con-sal-pimienta-y-romero-scaled-1.jpg",
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
const Business = ({ navigation }) => {
  const theme = themeStore((store) => store);
  return (
    <Box flex={1} bg={theme.bg} position="relative">
      <Header showLogo={false} showSearch={false} />
      <Box
        position="absolute"
        w={60}
        bg="rgba(0,0,0,0.6)"
        zIndex={1000}
        right={0}
        top={50}
        borderTopLeftRadius={10}
        borderBottomLeftRadius={10}
        gap={10} 
        justifyContent="center"
        alignItems="center"
        paddingVertical={10}
      >
       <LocationIcon />
       <FacebookIcon />
       <WhatsAppIcon />
       <PhoneIcon /> 
      </Box>
      <Image
        source={{
          uri: "https://cdn.foodandwineespanol.com/2021/11/Lorenza.jpg",
        }}
        h="35%"
        w={"100%"}
        zIndex={10}
        alt="banner"
      />
      <LinearGradient
        colors={["transparent", `${theme.bg}`]}
        style={{ height: 100, marginTop: -100, zIndex: 100 }}
      />
      <Box mt={-150} zIndex={1000} alignItems="center">
        <Image
          source={{
            uri: "https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg",
          }}
          h={80}
          w={80}
          alt="logo"
          borderRadius={100}
        />
        <Text size="2xl" fontWeight="bold" color={theme.white}>
          Che Dieguito
        </Text>
        <Text size="xl" color={theme.primary}>
          Restaurante argentino
        </Text>
        <Text color={theme.neutral} textAlign="center">
          Sumérgete en una exquisita variedad de cortes argentinos a la
          parrilla.
        </Text>
      </Box>
      <Box mt={24} w="95%" alignSelf="center" h="60%">
        <FlatList
          data={PROMOS}
          renderItem={({ item }) => <CardPromo data={item} />}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
};
export default Business;
