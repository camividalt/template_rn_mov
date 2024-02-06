
/* -------------- Libraries - React ------------- */
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
/* -------------- Global Components ------------- */
import { Label } from '../../../componentes/label/Label';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, BLUE } from '../../../assets/styles/Colors';
import { isIosPlatform } from '../../../../aplicacion/proxy/utiles/Platform';
import { IMAGES } from '../../../assets/Assets';

export const Home = () => {
  return (
    <>
      <View style={{ marginTop: 30 }}>
        <View style={{ marginVertical: 4 }} />
        <Label text="Template Movistar" size={32} font='regular' />
        <View style={{ marginVertical: 4 }} />
        <Label text={`React Native \n React Native Web`} size={20} font='bold' />
        <View style={{ marginVertical: 20 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={IMAGES.reactNative}
            style={styles.logoReactNative}
            resizeMode='stretch'
          />
        </View>
        <View style={{ marginVertical: 20 }} />
        {
          isIosPlatform() ? (
            <Image
              source={IMAGES.iosBlack}
              style={styles.logoApple}
              resizeMode='stretch'
            />
          ) : (
            <Image
              source={IMAGES.androidBlack}
              style={styles.logoReactNative}
              resizeMode='stretch'
            />
          )
        }
        <View style={{ marginVertical: 20 }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaStyle: {
    backgroundColor: COLORS(BLUE.MOVISTAR, 1),
  },
  logoReactNative: {
    width: 110,
    height: 100,
    alignSelf: 'center'
  },
  logoApple: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});

