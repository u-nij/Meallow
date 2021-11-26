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
    marginRight: 7,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9069',
    height: 30,
    borderRadius: 15,
  },
  buttonTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 5,
  },
  buttonImageIconStyle: {
    width: 15,
    height: 15,
  },
});

export default OnBoarding1Selected;
