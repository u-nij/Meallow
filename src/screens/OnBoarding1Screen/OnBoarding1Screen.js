import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import OnBoardingSelected from '../../components/OnBoarding1Seleted';
import OnBoardingListFooter from '../../components/OnBoardingListFooter';

const OnBoarding1Screen = () => {
  const [items, setItems] = useState([
    { id: 0, title: '쌀', selected: false },
    { id: 1, title: '밀가루', selected: false },
    { id: 2, title: '달걀/유제품', selected: false },
    { id: 3, title: '김치', selected: false },
    { id: 4, title: '생선', selected: false },
    { id: 5, title: '해산물', selected: false },
    { id: 6, title: '소고기', selected: false },
    { id: 7, title: '돼지고기', selected: false },
    { id: 8, title: '닭고기', selected: false },
    { id: 9, title: '버섯', selected: false },
    { id: 10, title: '콩/두부', selected: false },
    { id: 11, title: '과일', selected: false },
  ]);

  const [selected, setSelected] = useState([]);

  const onBackPressed = () => {
    alert("Back");
  };

  const onNextPressed = () => {
    alert("next");
  };

  const onItemPressed = (item) => {
    items[item.id].selected = true;
    setSelected(selected => [...selected, item]);
  };

  const onSelectCancelPressed = (itemId) => {
    items[itemId].selected = false;
    setSelected(selected => selected.filter(item => item.id !== itemId))
  };

  const ItemList = ({itemList}) => {
    return (
      <ScrollView style={styles.itemListStyle} >
        {itemList.map((item) => (
          <TouchableOpacity
            onPress={() => onItemPressed(item)}
            key={item.id}
            style={styles.itemStyle}
            activeOpacity={0.7}>
            <Text style={ item.selected ? styles.itemTextStyle_SELECTED : styles.itemTextStyle}>
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
          {selected.map((item) => (
            <OnBoardingSelected key={item.id} onPress={() => onSelectCancelPressed(item.id)} text={item.title} width={42 + 13 * item.title.length} />
          ))}
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
      <ItemList itemList={items} />
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
  itemTextStyle_SELECTED: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000',
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