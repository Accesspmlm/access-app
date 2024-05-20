import { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

//Env
import { GOOGLE_KEY } from "@env";

//Externals
import { Box } from "@gluestack-ui/themed";

//Stores
import { themeStore } from "@/stores";

//Icons
import { ArrowLeft2 } from "iconsax-react-native";

const HowToGet = () => {
  const [route, setRoute] = useState([]);

  const theme = themeStore((store) => store);
  const navigation = useNavigation();

  const origin = { latitude: 15.7654485, longitude: -96.1389523 }; // Coordenada de inicio (Parque Central de La Crucecita)
  const destination = { latitude: 15.76249, longitude: -96.125428 }; // Coordenada de destino (Iglesia de La Crucecita)

  function decode(t, precision = 5) {
    let points = [];
    let index = 0,
      lat = 0,
      lng = 0,
      shift = 0,
      result = 0,
      byte = null;
    const coordinates = [];
    const factor = Math.pow(10, precision);

    while (index < t.length) {
      byte = null;
      shift = 0;
      result = 0;

      do {
        byte = t.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      const latitude_change = result & 1 ? ~(result >> 1) : result >> 1;
      lat += latitude_change;

      shift = result = 0;
      do {
        byte = t.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      const longitude_change = result & 1 ? ~(result >> 1) : result >> 1;
      lng += longitude_change;

      points.push({ latitude: lat / factor, longitude: lng / factor });
    }

    return points;
  }

  const fetchRoute = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${GOOGLE_KEY}`
      );
      const json = await response.json();
      if (json.routes.length) {
        setRoute(decode(json.routes[0].overview_polyline.points)); // Decodifica y establece la ruta
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRoute();
  }, []);
  return (
    <Box flex={1}>
      <Box
        h={100}
        position="absolute"
        zIndex={100}
        top={50}
        paddingHorizontal={24}
      >
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
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: Math.abs(origin.latitude - destination.latitude) * 2,
          longitudeDelta:
            Math.abs(origin.longitude - destination.longitude) * 2,
        }}
      >
        {route.length > 0 && (
          <Polyline
            coordinates={route}
            strokeColor="#289bd8" // Color de la línea
            strokeWidth={5} // Grosor de la línea
            lineDashPattern={[10, 5]}
          />
        )}
      </MapView>
    </Box>
  );
};

export default HowToGet;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
