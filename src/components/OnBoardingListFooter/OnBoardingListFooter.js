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
        fontSize={46.83}
        bgColor="#363636"
        width={749.27}
        height={152}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    width: '100%',
    height: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBackStyle: {
    backgroundColor: '#C4C4C4',
    width: 152,
    height: 152,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    marginRight: 32,
  },
  buttonImageIconStyle: {
    width: 58.54,
    height: 58.54,
  },
});

export default OnBoardingListFooter;
