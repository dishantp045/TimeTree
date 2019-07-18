import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import Loading from "../components/Loading";

const appNavigator = createStackNavigator({
  Home: { screen: SearchScreen },
  Loading: {screen: Loading}
});

export default createAppContainer(appNavigator);