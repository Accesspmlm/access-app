import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";

const AutoOrientedImage = ({ source, width }) => {
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);

  useEffect(() => {
    // Obtener las dimensiones reales de la imagen
    Image.getSize(
      source,
      (w, h) => {
        setRealWidth(w);
        setRealHeight(h);
      },
      (error) => {
        console.error("Failed to determine image dimensions:", error);
      }
    );
  }, [source]);

  // Calcular la altura proporcional basada en el ancho recibido y las dimensiones reales de la imagen
  const proportionalHeight = realWidth ? (realHeight / realWidth) * width : 0;

  return (
    <Image
      source={{ uri: source }}
      style={[
        styles.image,
        {
          width: width,
          height: proportionalHeight,
        },
      ]}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
  },
});

export default AutoOrientedImage;
