import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import { Colors, Spacing, Radius, Typography } from '../../styles';
import { NavCard } from '_organisms';
import { CubeSticker } from '../../components/atoms';
import { CubePiece } from '../../components/molecules';

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: Colors.BACKGROUND,
    height: '100%',
    padding: Spacing.BASE,
  },
  navCardContainer: {
    borderRadius: Radius.REGULAR,
    overflow: 'hidden',
    marginBottom: Spacing.BASE
  },
  bigText: {
    fontSize: 68,
    color: Colors.BLACK
  }
});

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.homeScreen}>
        {/* <Text style={styles.newFont}>Home</Text> */}
        {/* <TouchableHighlight onPress={() => navigation.navigate('EdgeLTC')}>
          <Text>Edge Letter to Colors</Text>
        </TouchableHighlight> */}
        <TouchableHighlight
          style={styles.navCardContainer}
          onPress={() => navigation.navigate('EdgeLTC')}
        >
          <NavCard title={'Edge'.toUpperCase()} desc={'Letter to Colors'}>
            <Text style={styles.bigText}>A</Text>
          </NavCard>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.navCardContainer}
          onPress={() => navigation.navigate('EdgeCTL')}
        >
          <NavCard title={'Edge'.toUpperCase()} desc={'Colors to Letter'}>
            {/* <CubeSticker color={'red'} type={'main'} size={120}></CubeSticker> */}
            <CubePiece type='edge' letter='H' subPosition='right' stickerSize={50}></CubePiece>
          </NavCard>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.navCardContainer}
        >
          <NavCard title={'Corner'.toUpperCase()} desc={'Letter to Colors'}>
            <Text style={styles.bigText}>A</Text>
          </NavCard>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.navCardContainer}
        >
          <NavCard title={'Corner'.toUpperCase()} desc={'Colors to Letter'}>
            {/* <CubeSticker color={'red'} type={'main'} size={120}></CubeSticker> */}
            <CubePiece type='corner' letter='T' subPosition='right' stickerSize={50}></CubePiece>
          </NavCard>
        </TouchableHighlight>
        {/* <CubePiece></CubePiece> */}
      </View>
    </View>
  );

}

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Home',
});

export default HomeScreen;