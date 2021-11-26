import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnBoardingListFooter from '../components/OnBoardingListFooter';
import ItemImage1 from '../../assets/OnBoardingStep2(1).png';
import ItemImage2 from '../../assets/OnBoardingStep2(2).png';
import ItemImage3 from '../../assets/OnBoardingStep2(3).png';
import ItemImageGray1 from '../../assets/OnBoardingStep2(1)_Gray.png';
import ItemImageGray2 from '../../assets/OnBoardingStep2(2)_Gray.png';
import ItemImageGray3 from '../../assets/OnBoardingStep2(3)_Gray.png';

const OnBoarding2Screen = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([
    { id: 0, title: '영양가득 집밥', description: '영양소 균형이 잘 잡힌 건강집밥', img: ItemImage1,  img_gray: ItemImageGray1 },
    { id: 1, title: '든든한 집밥', description: '먹으면 헛배부리지 않는 든든집밥', img: ItemImage2, img_gray: ItemImageGray2 },
    { id: 2, title: '간편한 집밥', description: '쉽고 빠르게 먹을 수 있는 간편집밥', img: ItemImage3, img_gray: ItemImageGray3 },
  ]);

  const [selected, setSelected] = useState([]);

  const onBackPressed = () => {
    navigation.navigate('OnBoarding1');
  };

  const onNextPressed = () => {
    navigation.navigate('OnBoarding3');
  };

  const onItemPressed = (itemId) => {
    if(selected.indexOf(itemId) > -1)
      setSelected(selected => selected.filter(selectedId => selectedId !== itemId));
    else
      setSelected(selected => [...selected, itemId]);
  };

  const ItemList = ({itemList}) => {
    return (
      <ScrollView style={styles.itemListStyle} >
        {itemList.map((item) => (
          <TouchableOpacity
            onPress={() => onItemPressed(item.id)}
            key={item.id}
            style={selected.indexOf(item.id) > -1 ? styles.itemStyle_SELECTED : styles.itemStyle}
            activeOpacity={0.7}>
            <Image
              source={selected.indexOf(item.id) > -1 ? item.img : item.img_gray}
              style={styles.itemImageIconStyle}
            />
            <View>
              <Text style={selected.indexOf(item.id) > -1 ? styles.itemTitleTextStyle_SELECTED : styles.itemTitleTextStyle}>
                {item.title}
              </Text>
              <Text style={selected.indexOf(item.id) > -1 ? styles.itemDescTextStyle_SELECTED : styles.itemDescTextStyle}>
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const ListHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <View style={styles.headerBarContainerStyle}>
          <View style={styles.headerBarStyle} />
          <View style={[
            styles.headerBarStyle,
            {backgroundColor: '#363636'},
          ]} />
          <View style={styles.headerBarStyle} />
        </View>
        <Text style={styles.textStepStyle}>Step2</Text>
        <Text style={styles.textDescriptionStyle}>'밀로'님이 선호하는</Text>
        <Text style={styles.textDescriptionStyle}>집밥 스타일은 무엇인가요?</Text>
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
  },

  itemStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginBottom: 15,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 15,
  },
  itemStyle_SELECTED: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    marginBottom: 15,
    paddingLeft: 25,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 15,
    backgroundColor: '#FF9069',
  },
  itemTitleTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#AAAAAA',
    marginBottom: 3,
  },
  itemTitleTextStyle_SELECTED: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#363636',
    marginBottom: 3,
  },
  itemDescTextStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
  itemDescTextStyle_SELECTED: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#363636',
  },
  itemImageIconStyle: {
    width: 45,
    height: 45,
    marginRight: 20,
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

export default OnBoarding2Screen;