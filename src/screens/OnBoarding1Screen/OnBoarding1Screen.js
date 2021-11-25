import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import OnBoardingSelected from '../../components/OnBoarding1Seleted';
import OnBoardingListFooter from '../../components/OnBoardingListFooter';

const OnBoarding1Screen = () => {
  const [dataSource, setDataSource] = useState([
    { id: 1, title: '쌀' },
    { id: 2, title: '밀가루' },
    { id: 3, title: '달걀/유제품' },
    { id: 4, title: '김치' },
    { id: 5, title: '생선' },
    { id: 6, title: '해산물' },
    { id: 7, title: '소고기' },
    { id: 8, title: '돼지고기' },
    { id: 9, title: '닭고기' },
    { id: 10, title: '버섯' },
    { id: 11, title: '콩/두부' },
    { id: 12, title: '과일' },
  ]);

  const onBackPressed = () => {
    alert("Back");
  };

  const onNextPressed = () => {
    alert("next");
  };

  const onSelectCancelPressed = () => {
    alert("cancel");
  };

  const getItem = (item) => {
    alert(item.title);
  };

  const ItemList = ({itemList}) => {
    return (
      <ScrollView style={styles.itemListStyle} >
        {itemList.map( (item) => (
          <TouchableOpacity
            onPress={() => getItem(item)}
            style={styles.itemStyle}
            activeOpacity={0.7}>
            <Text style={styles.itemTextStyle}>
              {item.title}
            </Text>
            <Image
              source={require('../../../assets/done_black_24dp.png')}
              style={styles.itemImageIconStyle}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const ListHeader = () => {
    return (
      <View style={styles.headerStyle}>
        <View style={styles.headerBarContainerStyle}>
          <View style={[
            styles.headerBarStyle,
            {backgroundColor: '#363636'},
          ]} />
          <View style={styles.headerBarStyle} />
          <View style={styles.headerBarStyle} />
        </View>
        <Text style={styles.textStepStyle}>Step1</Text>
        <Text style={styles.textDescriptionStyle}>'밀로'님이 선호하는</Text>
        <Text style={styles.textDescriptionStyle}>집밥 메뉴는 어떤건가요? (최대 3개)</Text>
        <View style={styles.SeletedContainerStyle}>
          {/* 기본 42 -> 한 글자마다 + 13 */}
          <OnBoardingSelected onPress={onSelectCancelPressed} text="쌀" width={55} />
          <OnBoardingSelected onPress={onSelectCancelPressed} text="돼지고기" width={94} />
        </View>
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
      <ItemList itemList={dataSource} />
      <ListFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginHorizontal: 25,
  },

  itemListStyle: {
    height: 365,
  },

  itemStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    marginBottom: 10,
  },
  itemTextStyle: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
  itemImageIconStyle: {
    width: 17,
    height: 17,
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

export default OnBoarding1Screen;