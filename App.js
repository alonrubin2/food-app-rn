import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResturantScreen from './src/screens/ResturantScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Restaurant: ResturantScreen

},
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  });


  export default createAppContainer(navigator);