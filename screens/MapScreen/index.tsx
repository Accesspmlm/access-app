import React from "react";
import MapView from "react-native-maps";

//Externals
import { Box } from "@gluestack-ui/themed";

//Components
import { MarkerCompany } from "@/components";

const MapScreen = () => {
  return (
    <Box flex={1}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 15.7654485,
          longitude: -96.1389523,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <MarkerCompany />
      </MapView>
    </Box>
  );
};

export default MapScreen;
