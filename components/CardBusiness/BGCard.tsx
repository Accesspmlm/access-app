import { useState } from "react";
import { Image } from "react-native";

interface BGCardProps {
  url: string;
}

const BGCard: React.FC<BGCardProps> = ({ url }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <Image
          source={require("@/assets/loaded.png")}
          style={{
            height: 78,
            width: 78,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }}
        />
      )}
      <Image
        source={{ uri: url }}
        onLoad={() => setLoaded(true)}
        style={{
          height: 78,
          width: 78,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
          opacity: !loaded ? 0 : 1,
          position: !loaded ? "absolute" : "relative",
        }}
      />
    </>
  );
};
export default BGCard;
