import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, onPress } from 'react-native';

const RecipeHashtag = ({onPress, text, pressed, width}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          pressed ? styles.buttonStyle_SELECTED : styles.buttonStyle,
          pressed ? {width: width} : {}
        ]}
        activeOpacity={0.7}
      >
        <Text style={pressed ? styles.buttonTextStyle_SELECTED : styles.buttonTextStyle}>
          #{text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },

  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 15,
  },
  buttonTextStyle: {
    fontSize: 13,
    color: '#C4C4C4',
  },

  buttonStyle_SELECTED: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9069',
    height: 30,
    borderRadius: 15,
  },
  buttonTextStyle_SELECTED: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default RecipeHashtag;
