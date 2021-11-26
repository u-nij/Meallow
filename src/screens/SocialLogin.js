import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Title from '../../assets/socialLoginTitle.png';
import BoxMockUpImage from '../../assets/BoxMockups1.png';
import KakaoLoginImage from '../../assets/KakaoLogin.png';
import NaverLoginImage from '../../assets/NaverLogin.png';
import GoogleLoginImage from '../../assets/GoogleLogin.png';

const SocialLogin = () => {
  const navigation = useNavigation();

  const onKakaoPressed = () => {
    navigation.navigate('OnBoarding1');
  };

  const onNaverPressed = () => {
    navigation.navigate('OnBoarding1');
  };

  const onGooglePressed = () => {
    navigation.navigate('OnBoarding1');
  };

  return (
    <View style={styles.container}>
      <Image source={Title} style={styles.title} />
      <Image source={BoxMockUpImage} style={styles.boxImage} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onKakaoPressed}
          activeOpacity={0.65}>
          <Image source={KakaoLoginImage} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onNaverPressed}
          activeOpacity={0.65}>
          <Image source={NaverLoginImage} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={onGooglePressed}
          activeOpacity={0.65}>
          <Image source={GoogleLoginImage} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>최초 로그인 시 <Text style={{fontWeight: 'bold'}}>이용약관, 개인정보 제공 및 수집/이용</Text>에</Text>
      <Text style={styles.text}>동의하는 것으로 간주합니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: 'rgba(255, 124, 79, 0.15)',
  },
  title: {
    width: 190,
    height: 66,
    marginTop: 90,
    marginBottom: 55,
  },
  boxImage: {
    width: 340,
    height: 220,
    alignSelf: 'center',
    marginBottom: 30,
  },

  buttonContainer: {
    height: 180,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    marginBottom: 2,
  },
  buttonImage: {
    width: 335,
    height: 60,
  },

  text: {
    marginHorizontal: 15,
    alignSelf: 'center',
    fontSize: 12,
    color: '#363636',
  },
});

export default SocialLogin;
