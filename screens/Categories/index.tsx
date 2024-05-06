import { FlatList, Pressable } from "react-native";
import { Box } from "@gluestack-ui/themed";

//Stores
import { themeStore } from "@/stores";

//Sections
import ItemCategory from "./ItemCategory";

//Components
import { Carousel } from "@/components";
export interface Category {
  id: string;
  name: string;
  bg: string;
}

interface Hero {
  id: string;
  url: string;
  title: string;
  desc: string;
}

const HEROS: Hero[] = [
  {
    id: "1",
    url: "https://www.binniguendahuatulco.com.mx/img/index/header4.jpg",
    title: "BINNIGUENDA",
    desc: "¡Celebre con nosotros en el Hotel Binniguenda y disfrute de una oferta exclusiva! Reserve su estadía de tres noches y reciba una cuarta noche de cortesía.",
  },
  {
    id: "2",
    url: "https://www.elindependiente.com/wp-content/uploads/2022/02/palladium-hotel-ibiza-656x368.jpg",
    title: "HOTEL BINNIGUENDA",
    desc: "¡Celebre con nosotros en el Hotel Binniguenda y disfrute de una oferta exclusiva! Reserve su estadía de tres noches y reciba una cuarta noche de cortesía.",
  },
  {
    id: "3",
    url: "https://www.binniguendahuatulco.com.mx/img/index/header4.jpg",
    title: "BINNIGUENDA",
    desc: "¡Celebre con nosotros en el Hotel Binniguenda y disfrute de una oferta exclusiva! Reserve su estadía de tres noches y reciba una cuarta noche de cortesía.",
  },
];

const Categories = ({ navigation }) => {
  const theme = themeStore((state) => state);

  const handleNavigate = async () => {
    navigation.navigate("ListBusiness");
  };

  return (
    <Box flex={1}>
      <Carousel stellar={HEROS} />
    </Box>
  );
};
export default Categories;
