import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from 'twrnc';
import TabBarButton from './TabBarButton';

const CustomTabBarContent = ({state, descriptors, navigation}) => {
  return (
    <View style={tailwind`mb-10 mx-2 flex flex-row bg-white p-3 rounded-lg`}>
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
