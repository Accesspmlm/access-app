//Navigations
import Navigation from "./routes";

//Externals
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

//I18n
import "@/translations";

//React query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </GluestackUIProvider>
  );
};
export default App;
