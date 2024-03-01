//Navigations
import Navigation from "./routes";

//Externals
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <Navigation />
    </GluestackUIProvider>
  );
};
export default App;
