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
          {/* 기본 123 -> 한 글자마다 + 40 */}
          <OnBoardingSelected onPress={onSelectCancelPressed} text="쌀" width={163} />
          <OnBoardingSelected onPress={onSelectCancelPressed} text="돼지고기" width={283} />
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
    marginTop: 128,
    marginHorizontal: 73,
  },

  itemListStyle: {
    height: 1200,
  },

  itemStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginBottom: 40,
  },
  itemTextStyle: {
    flex: 1,
    fontSize: 52.68,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
  itemImageIconStyle: {
    width: 50,
    height: 50,
  },

  headerStyle: {
    width: '100%',
    height: 723,
  },
  headerBarContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 126,
    marginBottom: 135,
  },
  headerBarStyle: {
    width: 275.12,
    height: 11,
    flex: 0.33,
    borderRadius: 1,
    marginHorizontal: 6.5,
    backgroundColor: '#F1F1F1',
  },

  textStepStyle: {
    fontSize: 46.83,
    fontWeight: 'bold',
    color: '#FF9069',
    marginBottom: 27,
  },
  textDescriptionStyle: {
    fontSize: 58.54,
    fontWeight: 'bold',
  },
  SeletedContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
  },
});

export default OnBoarding1Screen;