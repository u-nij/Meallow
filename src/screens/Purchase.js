import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/core';

const Purchase = () => {
  const navigation = useNavigation();

  const PurchaseHeader = () => {
    return (
      <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerButtonBack}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Image
          source={require('../../assets/arrow_back_ios_black_24dp.png')}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>결제</Text>
      <TouchableOpacity
        style={styles.headerButtonCart}
        onPress={() => navigation.navigate('Purchase')}
        activeOpacity={0.7}
      >
        <Image
          source={require('../../assets/shopping_cart_black_24dp.png')}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
    </View>
    );
  };

  const PurchaseFooter = () => {
    return (
      <View style={styles.footer}>
        <CustomButton
          onPress={() => navigation.navigate('MainRecommended')}
          text="메인으로 돌아가기"
          fontSize={16}
          bgColor="#363636"
          width={320}
          height={50}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PurchaseHeader />
      <Image
          source={require('../../assets/cryingPerson.png')}
          style={styles.mainImage}/>
      <Text style={styles.text}>죄송합니다. 아직 상품 준비중입니다ㅠㅠ!</Text>
      <Text style={styles.text}>빠른 시일내에 준비하겠습니다~</Text>
      <PurchaseFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: '12%',
    borderTopWidth: 35, 
    borderTopColor: '#FFFFFF',
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headerButtonBack: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '3%',
    top: '7%',
  },
  headerButtonCart: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '3%',
    top: '7%',
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#363636',
    fontWeight: 'bold',
  },

  mainImage: {
    height: '30%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '35%',
    marginBottom: '10%',
  },

  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16.5,
    color: '#363636',
  },

  footer: {
    position: 'absolute',
    bottom: '5%',
    alignItems: 'center',
    width: '100%',
  },
});

export default Purchase;
