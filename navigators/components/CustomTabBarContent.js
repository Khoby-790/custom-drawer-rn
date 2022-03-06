import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from 'twrnc';
import TabBarButton from './TabBarButton';

const CustomTabBarContent = ({state, descriptors, navigation}) => {
  return (
    <View style={tailwind`mb-3  flex flex-row  p-2 `}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        return (
          <TabBarButton
            key={index}
            {...{route, navigation, isFocused, options, label}}
          />
        );
      })}
    </View>
  );
};

export default CustomTabBarContent;
