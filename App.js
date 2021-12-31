import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import tailwind from 'twrnc';
import AppStack from './navigators/AppStack';

const App = () => {
  return (
    <View style={tailwind`bg-blue-600 flex-1`}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
