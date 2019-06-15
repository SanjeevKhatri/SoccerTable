import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./components/Home";
import Name from "./components/Name";
import TotalPlayers from "./components/TotalPlayers";

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    TotalPlayers: {screen: TotalPlayers},
    Name: {screen: Name},
});

const App = createAppContainer(MainNavigator);

export default App;