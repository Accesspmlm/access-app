import { useState } from "react";
import { FlatList } from "react-native";

//Stores
import { themeStore } from "@/stores";

//Icons
import { FilterIcon } from "@/assets/icons";

//Components
import {
  ButtonFilters,
  Header,
  ModalFilterBusiness,
  CardBusiness,
  CardPromo,
} from "@/components";

//Externals
import { useQuery } from "@tanstack/react-query";
import { Box, Text } from "@gluestack-ui/themed";

//Connections
import { getCompanies } from "@/connections";
import { Company } from "@/types";

export interface Filter {
  id: string;
  name: string;
  active: boolean;
}

export interface Promos {
  id: string;
  name: string;
  banner: string;
  description: string;
  percentage: string;
}

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

const ListBusiness = ({ navigation }) => {
  const theme = themeStore((store) => store);
  const [showModal, setShowModal] = useState(false);
  const [isRestaurants, setIsRestaurants] = useState(true);
  const [filters, setFilters] = useState<Filter[]>([
    { id: "1", name: "Mariscos", active: true },
    { id: "2", name: "Comida típica", active: true },
    { id: "3", name: "Steakhouse", active: true },
  ]);

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

  const COMPANIES = restaurants || [];

  return (
    <Box bg={theme.bg} flex={1} alignItems="center">
      <Header showLogo={false} />
      <ModalFilterBusiness
        showModal={showModal}
        closeModal={closeModal}
        handleChangeFilter={handleChangeFilter}
        filters={filters}
      />
      <Box
        h={90}
        mt={85}
        w="95%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <ButtonFilters
          primaryColor="#FF0000"
          secondaryColor="#FF8484"
          terciaryColor="#ffdddd"
          description="Restaurantes"
          isDisabled={!isRestaurants}
          action={() => setIsRestaurants(true)}
          header={
            <Text color="white" size="xl" fontWeight="bold">
              120
            </Text>
          }
        />
        <ButtonFilters
          primaryColor="#FF0000"
          secondaryColor="#FF8484"
          terciaryColor="#ffdddd"
          description="Promociones"
          isDisabled={isRestaurants}
          action={() => setIsRestaurants(false)}
          header={
            <Text color="white" size="xl" fontWeight="bold">
              548
            </Text>
          }
        />
        <ButtonFilters
          primaryColor="#2991F3"
          secondaryColor="#0aabd0"
          terciaryColor="#bbf3ff"
          description="Promociones"
          header={<FilterIcon />}
          action={() => setShowModal(true)}
          w={130}
        />
      </Box>
      <Box w="95%" h="73%">
        {isRestaurants ? (
          <FlatList
            data={COMPANIES}
            renderItem={({ item }) => (
              <CardBusiness
                data={item}
                action={() => navigation.navigate("Business")}
              />
            )}
            keyExtractor={(item) => item._id}
          />
        ) : (
          <FlatList
            data={PROMOS}
            renderItem={({ item }) => <CardPromo data={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </Box>
    </Box>
  );
};
export default ListBusiness;
