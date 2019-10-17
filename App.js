import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

const RootStack = createStackNavigator({
    Search: {
        screen: SearchScreen
    }
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }

});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;