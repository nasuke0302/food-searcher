import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';

const RootStack = createStackNavigator({
    Search: {
        screen: SearchScreen
    },
    ResultDetail: {
        screen: ResultDetailScreen
    },
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }

});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;