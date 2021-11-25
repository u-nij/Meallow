import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OnBoarding1Selected = ({onPress, text, width}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.buttonStyle,
          {width: width}
        ]}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonTextStyle}>
          {text}
        </Text>
        <Image
          source={require('../../../assets/close_black_24dp.png')}
          style={styles.buttonImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9069',
    height: 88,
    borderRadius: 44,
  },
  buttonTextStyle: {
    fontSize: 41,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 14,
  },
  buttonImageIconStyle: {
    width: 46.8,
    height: 46.8,
  },
});

export default OnBoarding1Selected;
