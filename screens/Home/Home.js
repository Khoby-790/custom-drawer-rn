import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'twrnc';
import ScreenWrapper from '../../components/ScreenWrapper';
import MyTabs from '../../navigators/AppBottomTabs';

const Home = ({drawerAnimatedStyle, navigation}) => {
  return (
    <ScreenWrapper>
      <MyTabs />
    </ScreenWrapper>
  );
};

export default Home;
