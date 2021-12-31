import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import tailwind from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Animated from 'react-native-reanimated';

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled
      contentContainerStyle={tailwind`flex-1`}>
      {/* Close Button */}
      <View style={tailwind`flex flex-row px-2`}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Icon name="close" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Content */}
      <View style={tailwind`flex flex-row mt-4 px-2`}>
        <View style={tailwind`h-11 w-11`}>
          <Image
            style={tailwind`h-11 w-11 rounded-full`}
            source={{
              uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            }}
          />
        </View>
        <View style={tailwind`flex-1 ml-2`}>
          <Text style={tailwind`text-white text-sm font-medium`}>John Doe</Text>
          <Text style={tailwind`text-white text-xs font-light`}>
            Ui/Ux Designer
          </Text>
        </View>
      </View>

      {/* Drawer Content */}
      <View style={tailwind`flex flex-col flex-1 mt-4 px-2`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Feed')}
          style={tailwind`flex flex-row items-center px-2`}>
          <Icon name="home" size={20} color="#fff" />
          <Text style={tailwind`text-white my-4 text-sm ml-2`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Article')}
          style={tailwind`flex flex-row items-center px-2`}>
          <Icon name="file-document-outline" size={20} color="#fff" />
          <Text style={tailwind`text-white text-sm ml-2`}>Article</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
