import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import tailwind from 'twrnc';

const ScreenWrapper = ({children}) => {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  const animatedStyle = {
    transform: [{scale}],
    borderRadius,
  };
  return (
    <Animated.View
      style={tailwind.style(`bg-white flex-1 flex overflow-hidden`, {
        ...animatedStyle,
      })}>
      {children}
    </Animated.View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({});
