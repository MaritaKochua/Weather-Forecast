import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import TbilisiForecast from "./src/screens/TbilisiForecast";
import BatumiForecast from "./src/screens/BatumiForecast";
import KutaisiForecast from "./src/screens/KutaisiForecast";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    TbilisiForecast: TbilisiForecast,
    BatumiForecast: BatumiForecast,
    KutaisiForecast: KutaisiForecast,
  },
  {
    initialRouteParams: "HomeScreen",
    defaultNavigationOptions: {
      title: "Weather Forecast",
    },
  }
);

export default createAppContainer(navigator);
