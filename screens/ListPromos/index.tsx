import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, FlatList, Pressable, StatusBar } from "react-native";

//Externals
import {
  Box,
  Input,
  InputSlot,
  Text,
  InputField,
  InputIcon,
} from "@gluestack-ui/themed";

//Stores
import { themeStore } from "@/stores";

//Components
import {
  CardBusiness,
  CardPromo,
  ModalFilterBusiness,
  Tabs,
} from "@/components";

//Icons
import { SearchNormal1 } from "iconsax-react-native";
import { FilterIcon, Logo, RestaurantsIcon } from "@/assets/icons";
import { CompanyTypes } from "@/types";
import { Filter } from "../Home";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

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

const COMPANIES: CompanyTypes[] = [
  {
    _id: "001",
    name: "Mariscos El Capitán",
    descriptionEs:
      "Disfruta de los mejores mariscos frescos en un ambiente marinero auténtico.",
    descriptionEn:
      "Enjoy the best fresh seafood in an authentic maritime setting.",
    stars: 4,
    activePromotions: 3,
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    banner:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    country: "México",
    state: "Jalisco",
    city: "Guadalajara",
    cp: 44100,
    lat: 20.659698,
    lng: -103.349609,
    phone: 523312345678,
    whatsapp: 523312345679,
    facebook: "facebook.com/mariscoselcapitan",
    categories: ["Seafood", "Dinner"],
    openingDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    hourInit: "12:00",
    hourEnd: "22:00",
    active: true,
    industry: "Food",
    tags: ["seafood", "family", "mariscos"],
    ubication: "Avenida Revolución 123",
  },
  {
    _id: "002",
    name: "Carnitas Michoacán",
    descriptionEs:
      "Las mejores carnitas estilo Michoacán en un ambiente familiar y alegre.",
    descriptionEn:
      "The best Michoacán-style carnitas in a friendly and cheerful atmosphere.",
    stars: 5,
    activePromotions: 2,
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    banner:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    country: "México",
    state: "Michoacán",
    city: "Morelia",
    cp: 58000,
    lat: 19.70078,
    lng: -101.18443,
    phone: 524432345678,
    categories: ["Mexican", "Lunch"],
    openingDays: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    hourInit: "10:00",
    hourEnd: "20:00",
    active: true,
    industry: "Food",
    tags: ["carnitas", "family", "traditional"],
    ubication: "Boulevard García de León 676",
  },
  {
    _id: "003",
    name: "Vegan Delight",
    descriptionEs:
      "Sabores innovadores y saludables con ingredientes 100% veganos.",
    descriptionEn:
      "Innovative and healthy flavors with 100% vegan ingredients.",
    stars: 5,
    activePromotions: 1,
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    banner:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    country: "USA",
    state: "California",
    city: "San Francisco",
    cp: 94103,
    lat: 37.77493,
    lng: -122.41942,
    phone: 415123456789,
    categories: ["Vegan", "All Day"],
    openingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    hourInit: "08:00",
    hourEnd: "18:00",
    active: true,
    industry: "Food",
    tags: ["vegan", "gluten-free", "healthy"],
    ubication: "Market Street 900",
  },
  {
    _id: "004",
    name: "Pasta Passion",
    descriptionEs:
      "Una experiencia italiana auténtica con pasta fresca hecha en casa.",
    descriptionEn: "An authentic Italian experience with fresh homemade pasta.",
    stars: 4,
    activePromotions: 2,
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    banner:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    country: "Italy",
    state: "Lazio",
    city: "Rome",
    cp: 100,
    lat: 41.90278,
    lng: 12.49636,
    phone: 390612345678,
    categories: ["Italian", "Dinner"],
    openingDays: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    hourInit: "19:00",
    hourEnd: "23:00",
    active: true,
    industry: "Food",
    tags: ["pasta", "romantic", "traditional"],
    ubication: "Via Condotti 10",
  },
  {
    _id: "005",
    name: "Sushi Corner",
    descriptionEs: "El arte del sushi tradicional y fusión en un solo lugar.",
    descriptionEn: "The art of traditional and fusion sushi in one place.",
    stars: 5,
    activePromotions: 3,
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    banner:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    country: "Japan",
    state: "Tokyo",
    city: "Tokyo",
    cp: 100,
    lat: 35.6895,
    lng: 139.6917,
    phone: 813123456789,
    categories: ["Japanese", "Dinner"],
    openingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    hourInit: "17:00",
    hourEnd: "23:00",
    active: true,
    industry: "Food",
    tags: ["sushi", "luxury", "fusion"],
    ubication: "Shinjuku 160-0022",
  },
  {
    _id: "006",
    name: "Burger Joint",
    descriptionEs: "Las hamburguesas más jugosas y creativas de la ciudad.",
    descriptionEn: "The juiciest and most creative burgers in town.",
    stars: 4,
    activePromotions: 2,
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    banner:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    country: "USA",
    state: "New York",
    city: "New York",
    cp: 10001,
    lat: 40.71278,
    lng: -74.006,
    phone: 212123456789,
    categories: ["Fast Food", "Lunch"],
    openingDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    hourInit: "11:00",
    hourEnd: "22:00",
    active: true,
    industry: "Food",
    tags: ["burgers", "casual", "quick"],
    ubication: "Broadway 350",
  },
  {
    _id: "007",
    name: "La Taquería",
    descriptionEs:
      "Auténticos tacos mexicanos con una variedad de salsas caseras.",
    descriptionEn: "Authentic Mexican tacos with a variety of homemade sauces.",
    stars: 5,
    activePromotions: 1,
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-design-template-b281aeadaa832c28badd72c1f6c5caad_screen.jpg?ts=1595421543",
    banner:
      "https://www.opentable.com.mx/blog/wp-content/uploads/sites/432/2022/12/screen-shot-2022-12-08-at-4-52-50-pm.png",
    country: "México",
    state: "Ciudad de México",
    city: "Ciudad de México",
    cp: 1000,
    lat: 19.4326,
    lng: -99.1332,
    phone: 525512345678,
    categories: ["Mexican", "All Day"],
    openingDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    hourInit: "09:00",
    hourEnd: "23:00",
    active: true,
    industry: "Food",
    tags: ["tacos", "street food", "traditional"],
    ubication: "Calle Madero 123",
  },
];

const TABS = [
  { id: "1", name: "Establecimientos" },
  { id: "2", name: "Promociones" },
];

const ListPromos = () => {
  const [tabActive, setTabActive] = useState("1");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState<Filter[]>([
    { id: "1", name: "Mexicana", active: false },
    { id: "2", name: "Italiana", active: false },
    { id: "3", name: "Japonesa", active: false },
  ]);

  const theme = themeStore((store) => store);
  const navigation = useNavigation();

  const toggleTabActive = (id: string) => {
    setTabActive(id);
  };

  const goToCompany = (company: CompanyTypes) => {
    navigation.navigate("Company", { company });
  };

  const handleChangeFilter = (id: string) => {
    const newFilters = filters.map((f) => {
      if (f.id == id) {
        return { ...f, active: !f.active };
      }
      return f;
    });
    setFilters(newFilters);
  };

  return (
    <Box
      bg={theme.bg}
      flex={1}
      alignItems="center"
      paddingTop={StatusBar.currentHeight + 10}
    >
      <ModalFilterBusiness
        showModal={showFilter}
        closeModal={() => setShowFilter(false)}
        filters={filters}
        handleChangeFilter={handleChangeFilter}
      />
      <Box mt={10} justifyContent="center" w={WIDTH * 0.95}>
        <Box mb={16} flexDirection="row" alignItems="center" gap={5}>
          <Logo />
          <Text color={theme.primary} fontWeight="$bold" size="lg">
            ACCESS
          </Text>
        </Box>
      </Box>
      <Box
        w={WIDTH * 0.95}
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Box w={200}>
          <Input variant="underlined" size="md">
            <InputSlot pr="$3">
              <InputIcon>
                <SearchNormal1 size="17" color={theme.gray2} />
              </InputIcon>
            </InputSlot>
            <InputField placeholder="Buscar por nombre" />
          </Input>
        </Box>
        <Pressable onPress={() => setShowFilter(true)}>
          <Box flexDirection="row" gap={5}>
            <FilterIcon color={theme.primary} />
            <Text color={theme.primary}>Filtrar</Text>
          </Box>
        </Pressable>
      </Box>
      <Box w={WIDTH * 0.95} mb={16} mt={16}>
        <Tabs
          tabs={TABS}
          active={tabActive}
          toggleTabActive={toggleTabActive}
        />
        <Box flexDirection="row" mt={8} gap={10} alignItems="center">
          <RestaurantsIcon />
          <Text
            size="lg"
            fontWeight="$medium"
            color={theme.restaurantsColor}
          >{`${tabActive == "1" ? "98" : "245"} ${
            tabActive == "1" ? "Restaurantes" : "Promociones"
          }`}</Text>
        </Box>
      </Box>
      <Box h={HEIGHT - 365}>
        {tabActive == "1" ? (
          <Box>
            <FlatList
              data={COMPANIES}
              renderItem={({ item }) => (
                <CardBusiness data={item} action={goToCompany} />
              )}
              keyExtractor={(key) => key._id}
            />
          </Box>
        ) : (
          <FlatList
            data={PROMOS}
            renderItem={({ item }) => (
              <CardPromo mb={20} autoOriented={true} data={item} />
            )}
            keyExtractor={(key) => key.id}
          />
        )}
      </Box>
    </Box>
  );
};
export default ListPromos;
