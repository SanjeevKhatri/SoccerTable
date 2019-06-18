import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./components/Home";
import Name from "./components/Name";
import TotalPlayers from "./components/TotalPlayers";
import Standings from "./components/Standings";

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    TotalPlayers: {screen: TotalPlayers},
    Name: {screen: Name},
    Standings: {screen: Standings},
});

const App = createAppContainer(MainNavigator);

export default App;