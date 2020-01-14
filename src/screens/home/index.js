import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableHighlight onPress={() => navigation.navigate('EdgeLTC')}>
        <Text>Edge Letter to Colors</Text>
      </TouchableHighlight>
    </View>
  );

}

export default HomeScreen;