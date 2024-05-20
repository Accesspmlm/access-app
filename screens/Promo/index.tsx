import { Dimensions, Image, Pressable, StyleSheet } from "react-native";
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
import { Chip, MenuOptions } from "@/components";

//Stores
import { themeStore } from "@/stores";

//Icons
import { Like, Scan, Star } from "@/assets/icons";
import { useEffect, useState } from "react";
import { ArrowLeft2, CloseSquare } from "iconsax-react-native";

type PromoScreenRouteProp = RouteProp<RootStackHomeParamList>;

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const Promo = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [showScan, setShowScan] = useState(false);
  const [data, setData] = useState("");

  const route = useRoute<PromoScreenRouteProp>();
  const theme = themeStore((store) => store);
  const { promo } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setShowScan(false);
    setData(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  return (
    <Box position="relative" h={"100%"}>
      {showScan && (
        <Box
          position="absolute"
          w={WIDTH}
          h={HEIGHT}
          zIndex={100}
          backgroundColor="red"
        >
          <Box flex={1}>
            <Camera
              style={styles.camera}
              type={CameraType.back}
              onBarCodeScanned={handleBarCodeScanned}
            >
              <Box flex={1} position="relative">
                <Box
                  position="absolute"
                  bottom={200}
                  w={WIDTH}
                  alignItems="center"
                >
                  <Pressable onPress={() => setShowScan(false)}>
                    <Box alignItems="center">
                      <CloseSquare color={theme.red} size={50} />
                      <Text color={theme.white}>Cancelar</Text>
                    </Box>
                  </Pressable>
                </Box>
                <Box style={styles.buttonContainer}>
                  <Box>
                    <Text
                      fontWeight="$bold"
                      color={"#c2c2c2"}
                      textAlign="center"
                      size="lg"
                      mt={24}
                    >
                      Escanea el QR para validar tu descuento
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Camera>
          </Box>
        </Box>
      )}
      {!showScan && (
        <>
          <Box zIndex={100} position="absolute" top={50} paddingHorizontal={24}>
            <Pressable onPress={() => navigation.goBack()}>
              <Box
                flexDirection="row"
                gap={5}
                backgroundColor={theme.primary}
                borderRadius={8}
                paddingHorizontal={8}
                paddingVertical={6}
              >
                <ArrowLeft2 color={theme.white} />
              </Box>
            </Pressable>
          </Box>
        </>
      )}
      <Image
        source={{ uri: promo.banner }}
        style={{ height: HEIGHT * 0.45, width: WIDTH }}
      />
      <LinearGradient
        colors={[
          "transparent",
          "transparent",
          "transparent",
          "transparent",
          "transparent",
          `#000000b9`,
          `#000000c3`,
        ]}
        start={{ x: 1, y: -1 }}
        end={{ x: 0, y: 1 }}
        style={{
          height: HEIGHT * 0.45,
          position: "absolute",
          top: 0,
          width: WIDTH,
        }}
      />
      <MenuOptions />
      <Box
        height={HEIGHT * 0.36}
        width={WIDTH}
        position="absolute"
        top={0}
        justifyContent="flex-end"
      >
        <Box paddingHorizontal={24}>
          <Text size="2xl" color={theme.white} fontWeight="$bold">
            {promo.name}
          </Text>
          <Box mt={16} flexDirection="row" gap={5}>
            <Chip
              bg={theme.white}
              colorValue={theme.white}
              value="110"
              icon={<Scan size={15} />}
            />
            <Chip
              bg={theme.primary}
              colorValue={theme.white}
              value="80"
              icon={<Like size={18} color={theme.white} />}
            />
            <Chip
              bg={theme.yellow}
              colorValue={theme.white}
              value="110"
              icon={<Star size={18} />}
            />
          </Box>
        </Box>
      </Box>
      <Box
        height={HEIGHT * 0.5}
        backgroundColor={theme.white}
        width={WIDTH}
        position="absolute"
        bottom={0}
        borderTopRightRadius={50}
        borderTopLeftRadius={50}
        paddingHorizontal={24}
      >
        <Text size="xl" textAlign="center" fontWeight="$bold" mt={16}>
          Nombre empresa
        </Text>
        <Box>
          <Text mt={8}>{promo.description}</Text>
          <Text mt={16} textAlign="center" color={theme.green}>
            En la compra de un T-Bone te llevas un T-Bone gratis.
          </Text>
          <Box flexDirection="row" justifyContent="space-between" mt={16}>
            <Box w={110} gap={5} alignItems="center">
              <Text>Precio</Text>
              <Text fontWeight="$bold" fontSize="$lg">
                $ 120.00
              </Text>
            </Box>
            <Box w={110} gap={5} alignItems="center">
              <Text>con Access</Text>
              <Text fontWeight="$bold" fontSize="$lg">
                $ 0.00
              </Text>
            </Box>
            <Box w={110} gap={5} alignItems="center">
              <Text>Ahorras</Text>
              <Text fontWeight="$bold" fontSize="$lg">
                $ 120.00
              </Text>
            </Box>
          </Box>
          <Box>
            <Button
              size="lg"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              backgroundColor={theme.primary}
              mt={32}
              onPress={() => setShowScan(true)}
            >
              <ButtonText>Adquirir descuento</ButtonText>
            </Button>
          </Box>
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

export default Promo;
