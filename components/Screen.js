import React from 'react';
import {View, Text} from 'react-native';
import tailwind from 'twrnc';
import Header from './Header';

const Screen = ({children}) => {
  return (
    <View style={tailwind`flex-1 `}>
      <Header />
      {children}
    </View>
  );
};

export default Screen;
