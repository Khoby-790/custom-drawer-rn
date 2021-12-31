import {
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Details from '../screens/Details/Details';
import Home from '../screens/Home/Home';
import React from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import CustomDrawerContent from './components/CustomDrawerContent';
import Animated from 'react-native-reanimated';
import MyTabs from './AppBottomTabs';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <View style={tailwind`flex-1 bg-blue-700`}>
      <Drawer.Navigator
        initialRouteName="Feed"
        drawerContent={props => {
          return <CustomDrawerContent {...props} />;
        }}
        screenOptions={({route}) => ({
          headerShown: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            ...tailwind`bg-blue-500`,
            width: '50%',
          },
          sceneContainerStyle: {
            ...tailwind`flex-1 bg-blue-500`,
          },
        })}>
        <Drawer.Screen name="Feed">
          {props => <MyTabs {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Article" component={Details} />
      </Drawer.Navigator>
    </View>
  );
}

export default MyDrawer;
