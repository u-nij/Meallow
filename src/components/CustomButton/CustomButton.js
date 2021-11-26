import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';

const CustomButton = ({onPress, text, fontSize, bgColor, fgColor, width, height}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        bgColor ? {backgroundColor: bgColor} : {},
        {width: width},
        {height: height},
      ]}>
      <Text
        style={[
          styles.text,
          fgColor ? {color: fgColor} : {},
          {fontSize: fontSize}
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default CustomButton;