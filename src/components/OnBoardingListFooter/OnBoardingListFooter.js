import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CustomButton from '../CustomButton';

const OnBoardingListFooter = ({onBackPressed, onNextPressed}) => {
  return (
    <View style={styles.footerStyle}>
      <TouchableOpacity
        style={styles.buttonBackStyle}
        onPress={onBackPressed}
        activeOpacity={0.7}
      >
        <Image
          source={require('../../../assets/arrow_back_ios_black_24dp.png')}
          style={styles.buttonImageIconStyle}
        />
      </TouchableOpacity>
      <CustomButton
        onPress={onNextPressed}
        text="다음"
        fontSize={16}
        bgColor="#363636"
        width={250}
        height={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBackStyle: {
    backgroundColor: '#C4C4C4',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 13,
  },
  buttonImageIconStyle: {
    width: 20,
    height: 20,
  },
});

export default OnBoardingListFooter;
