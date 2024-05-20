import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Camera, CameraType } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

//Externals
import { Box, Text, ButtonText, Button } from "@gluestack-ui/themed";

//Types
import { RouteProp } from "@react-navigation/native";
import { RootStackHomeParamList } from "@/routes/HomeStack";

//Components
import { CardPromo, Chip, MenuOptions } from "@/components";

//Stores
import { themeStore } from "@/stores";

//Icons
import { Like, Scan, Star } from "@/assets/icons";
import { useEffect, useState } from "react";
import { ArrowLeft2, CloseSquare } from "iconsax-react-native";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

type PromoScreenRouteProp = RouteProp<RootStackHomeParamList>;

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

const Company = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [showScan, setShowScan] = useState(false);
  const [data, setData] = useState("");

  const route = useRoute<PromoScreenRouteProp>();
  const { company } = route.params;
  const theme = themeStore((store) => store);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <Box position="relative" h={"100%"}>
      <Image
        source={{ uri: company.banner }}
        style={{ height: HEIGHT * 0.32, width: WIDTH }}
      />

      <MenuOptions h={HEIGHT * 0.32} />
      <Box
        height={HEIGHT * 0.32}
        width={WIDTH}
        position="absolute"
        top={0}
        justifyContent="flex-end"
      >
        <LinearGradient
          colors={["transparent", `#ffffff`]}
          style={{
            height: 100,
            position: "absolute",
            bottom: 0,
            width: WIDTH,
          }}
        />
        <Box
          paddingHorizontal={24}
          justifyContent="center"
          alignItems="center"
          position="absolute"
          w={WIDTH}
          bottom={-40}
          zIndex={100}
        >
          <Box>
            <Image
              source={{ uri: company.logo }}
              style={{ height: 80, width: 80, borderRadius: 100 }}
            />
          </Box>
          <Text
            size="2xl"
            fontWeight="$bold"
            textAlign="center"
            color={theme.black}
          >
            {company.name}
          </Text>
          <Text textAlign="center" color={theme.secondaryText}>
            {company.descriptionEs}
          </Text>
        </Box>
      </Box>
      <Box
        height={HEIGHT * 0.6}
        backgroundColor={theme.white}
        width={WIDTH}
        bottom={0}
        paddingHorizontal={24}
      >
        <Box mt={65} flexDirection="row" gap={5} justifyContent="center">
          <Chip
            bg={theme.primary}
            colorValue={theme.white}
            value="80"
            icon={<Like size={18} color={theme.white} />}
            opacity="ff"
          />
          <Chip
            bg={theme.yellow}
            colorValue={theme.white}
            value="110"
            icon={<Star size={18} color={theme.white} />}
            opacity="ff"
          />
        </Box>
        <Box mt={16} h={HEIGHT - 500}>
          <FlatList
            data={PROMOS}
            renderItem={({ item }) => (
              <CardPromo mb={20} autoOriented={true} data={item} />
            )}
            keyExtractor={(key) => key.id}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: 160,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});

export default Company;
