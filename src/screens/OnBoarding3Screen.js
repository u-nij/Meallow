import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnBoardingListFooter from '../components/OnBoardingListFooter';
import ItemImage from '../../assets/OnBoardingStep3.png';
import ItemImageGray from '../../assets/OnBoardingStep3_Gray.png';

const OnBoarding3Screen = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([
    { id: 0, title: '아침' },
    { id: 1, title: '점심' },
    { id: 2, title: '저녁' },
  ]);

  const [selected, setSelected] = useState([]);

  const onBackPressed = () => {
    navigation.navigate('OnBoarding2');
  };

  const onNextPressed = () => {
    navigation.navigate('MainRecommended');
  };

  const onItemPressed = (itemId) => {
    if(selected.indexOf(itemId) > -1)
      setSelected(selected => selected.filter(selectedId => selectedId !== itemId));
    else
      setSelected(selected => [...selected, itemId]);
  };

  const ItemList = ({itemList}) => {
    return (
      <View style={styles.itemListStyle} >
        {itemList.map((item) => (
          <TouchableOpacity
            onPress={() => onItemPressed(item.id)}
            key={item.id}
            style={selected.indexOf(item.id) > -1 ? styles.itemStyle_SELECTED : styles.itemStyle}
            activeOpacity={0.7}>
            <Image
              source={selected.indexOf(item.id) > -1 ? ItemImage : ItemImageGray}
              style={styles.itemImageIconStyle}
            />
            <Text style={selected.indexOf(item.id) > -1 ? styles.itemTextStyle_SELECTED : styles.itemTextStyle}>
                {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const ListHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <View style={styles.headerBarContainerStyle}>
          <View style={styles.headerBarStyle} />
          <View style={styles.headerBarStyle} />
          <View style={[
            styles.headerBarStyle,
            {backgroundColor: '#363636'},
          ]} />
        </View>
        <Text style={styles.textStepStyle}>Step3</Text>
        <Text style={styles.textDescriptionStyle}>'밀로'님이 챙기고 싶은</Text>
        <Text style={styles.textDescriptionStyle}>끼니는 언제인가요?</Text>
      </View>
    );
  };

  const ListFooter = () => {
    return (
      <OnBoardingListFooter onBackPressed={onBackPressed} onNextPressed={onNextPressed} />
    );
  };

  return (
    <View style={styles.container}>
      <ListHeader />
      <ItemList itemList={items} />
      <ListFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
  },

  itemListStyle: {
    height: 365,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 100,
  },

  itemStyle: {
    flex: 0.3,
    alignItems: 'center',
    height: 160,
  },
  itemStyle_SELECTED: {
    flex: 0.3,
    alignItems: 'center',
    height: 160,
  },
  itemTextStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#AAAAAA',
    marginBottom: 3,
  },
  itemTextStyle_SELECTED: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FF9069',
    marginBottom: 3,
  },
  itemImageIconStyle: {
    width: 30,
    height: 71.4,
    marginBottom: 20,
  },

  headerStyle: {
    width: '100%',
    height: 250,
  },
  headerBarContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 45,
  },
  headerBarStyle: {
    height: 4,
    flex: 0.3,
    borderRadius: 1,
    backgroundColor: '#F1F1F1',
  },

  textStepStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FF9069',
    marginBottom: 10,
  },
  textDescriptionStyle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  SeletedContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
});

export default OnBoarding3Screen;