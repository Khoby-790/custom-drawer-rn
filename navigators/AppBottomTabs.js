import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/Dashboard';
import Notification from '../screens/Notification/Notification';
import Search from '../screens/Search/Search';
import Settings from '../screens/Settings/Settings';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import CustomTabBarContent from './components/CustomTabBarContent';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <ScreenWrapper>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <CustomTabBarContent {...props} />}>
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </ScreenWrapper>
  );
}

export default MyTabs;
