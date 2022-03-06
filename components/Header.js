import {useDrawerProgress, useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import tailwind from 'twrnc';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Header = ({title = 'Title'}) => {
  const progress = useSharedValue(30);
  const navigation = useNavigation();
  const drawerStatus = useDrawerStatus();

  useEffect(() => {
    if (drawerStatus === 'open') {
      progress.value = withTiming(0, {duration: 300});
    } else {
      progress.value = withTiming(30, {duration: 300});
    }
    return () => {
      progress.value = withTiming(30, {duration: 300});
    };
  }, [drawerStatus]);

  const styles = useAnimatedStyle(() => {
    return {
      marginTop: progress.value,
    };
  });

  return (
    <Animated.View
      style={[tailwind.style('bg-white p-2 flex flex-row'), styles]}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={tailwind` border border-gray-100 p-1`}>
        <Icon name="menu" size={30} />
      </TouchableOpacity>
      <View style={tailwind`flex flex-row items-center justify-center w-auto`}>
        <Text style={tailwind`text-center font-bold text-lg`}>{title}</Text>
      </View>
      <View></View>
    </Animated.View>
  );
};

export default Header;
