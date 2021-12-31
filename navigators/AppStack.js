import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../screens/Details/Details';
import Home from '../screens/Home/Home';
import MyDrawer from './AppDrawer';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        headerShown: false
      }} name="Home" component={MyDrawer} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppStack;
