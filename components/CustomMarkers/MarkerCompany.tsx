import React, { memo } from "react";
import { Marker } from "react-native-maps";
import { Box } from "@gluestack-ui/themed";
import { Image } from "react-native";

const CustomMarkerContent = memo(() => (
  <Box
    backgroundColor="red"
    borderRadius={100}
    h={55}
    w={55}
    justifyContent="center"
    alignItems="center"
  >
    <Image
      source={{
        uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
      }}
      style={{ height: 50, width: 50, borderRadius: 100 }}
    />
  </Box>
));

const MarkerCompany = memo(() => (
  <Marker coordinate={{ latitude: 15.7654485, longitude: -96.1389523 }}>
    <CustomMarkerContent />
  </Marker>
));

export default MarkerCompany;
