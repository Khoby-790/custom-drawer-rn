import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import tailwind from 'twrnc';
import Icon from 'react-native-vector-icons/Feather';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const icons = {
  Dashboard: 'home',
  Search: 'search',
  Settings: 'user',
  Notification: 'bell',
};

const TabBarButton = ({isFocused, options, route, navigation, label}) => {
  const sharedValue = useSharedValue(1);
  const sharedColor = useSharedValue('transparent');
  const translateY = useSharedValue(0);
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({name: route.name, merge: true});
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const flexStyle = useAnimatedStyle(() => {
    return {
      flex: sharedValue.value,
      backgroundColor: sharedColor.value,
      transform: [
        {
          translateY: translateY.value,
        },
      ],
    };
  }, [sharedValue, sharedColor]);

  useEffect(() => {
    if (isFocused) {
      sharedValue.value = withTiming(4, {duration: 600});
      sharedColor.value = withTiming('orange', {duration: 600});
      translateY.value = withDelay(300, withTiming(-5, {duration: 300}));
    } else {
      sharedValue.value = withTiming(1, {duration: 300});
      sharedColor.value = withTiming('transparent', {duration: 300});
      translateY.value = withDelay(300, withTiming(0, {duration: 300}));
    }
    return () => {
      sharedValue.value = withTiming(1, {
        duration: 300,
      });
      sharedColor.value = withTiming('white', {
        duration: 300,
      });
    };
  }, [isFocused]);

  return (
    <Animated.View
      style={[tailwind`bg-transparent rounded-full p-3`, flexStyle]}>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}>
        <Animated.View
          style={[
            tailwind.style(
              `flex flex-row items-center justify-center rounded-lg`,
            ),
            // flexStyle,
          ]}>
          <Icon
            name={icons[route.name]}
            size={20}
            color={isFocused ? 'white' : 'black'}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={tailwind.style(
                `text-center mx-2 text-white text-sm font-bold`,
              )}>
              {label}
            </Text>
          )}
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TabBarButton;
