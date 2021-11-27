import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const steps = [
  {number: 1, text: "먼저 양파를 잘게 썰어주세요."},
  {number: 2, text: "그 다음 단호박을 손질해주세요. 단호박을 3분간 전자렌지에 돌려주면 감자칼로 껍질을 벗기기가 쉽다는 정보! 그 다음 숟가락으로 단호박 속을 퍼내서 깔끔하게 비워주세요~"},
  {number: 3, text: "그 다음 단호박이 잘 익도록 얇게 얇게 썰어주세요!"},
  {number: 4, text: "모든 준비가 끝났으면 그 다음 냄비에 기름 또는 버터를 살짝 두르고 양파가 투명해질 때까지 볶아주세요~"},
  {number: 5, text: "우유를 부어주면 끝납니다! 우유의 양은 단호박의 양을 고려해서 넣어서 끓어주다가 농도를 봐주면서 우유를 첨가해주시면 될거 같아요!"},
];

const RecipeDetail = () => {
  const navigation = useNavigation();

  const scrap_img = require('../../assets/button/scrap.png');
  const scrap_active_img = require('../../assets/button/scrap_active.png');

  const [scrap, setScrap] = useState(false);
  const onScrapPressed = () => {
      setScrap(!scrap);
  };

  const DetailHeader = () => {
    return (
      <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Image
          source={require('../../assets/arrow_back_ios_black_24dp.png')}
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>게시글</Text>
    </View>
    );
  };

  const Hashtag = ({title}) => {
    return(
      <View
        style={[
          {flexDirection: 'row'},
          {alignItems: 'center'},
          {justifyContent: 'center'},
          {backgroundColor: 'rgba(255, 144, 105, 0.25)'},
          {width: 55},
          {height: 25},
          {borderRadius: 15},
          {marginRight: '3%'},
        ]}>
        <Text style={[
          {fontWeight: 'bold'},
          {color: '#FF9069'},
        ]}>
          #{title}
        </Text>
      </View>
    );
  };

  const RecipeInfo = () => {
    return (
      <View style={styles.infoContainer}>
        <View style={styles.desc}>
          <View style={[
            {width: '100%'},
            {flexDirection: 'row'},
          ]}>
            <Text style={[
            {fontSize: 16},
            {fontWeight: 'bold'},
          ]}>달큰한 호박죽 레시피</Text>
            <TouchableOpacity
              onPress={() => onScrapPressed()}
              style={[
                {height: '100%'},
                {position: 'absolute'},
                {right: '-5%'},
              ]}>
              <Image 
                source={scrap ? scrap_active_img : scrap_img} 
                style={[
                  {height: '100%'},
                  {resizeMode: 'contain'},
                ]} />
            </TouchableOpacity>
          </View>
          <View style={[
            {flexDirection: 'row'},
            {marginVertical: '2%'},
          ]}>
            <Text style={[
            {fontSize: 12},
            {color: '#363636'},
          ]}>작성자 나</Text>
            <Text style={[
            {fontSize: 12},
            {color: '#363636'},
          ]}> | </Text>
            <Text style={[
            {fontSize: 12},
            {color: '#363636'},
          ]}>2021.11.12</Text>
          </View>
          <View style={[
            {flexDirection: 'row'},
            {paddingHorizontal: '2%'},
            {marginBottom: '3%'},
          ]}>
            <Hashtag title="건강" />
            <Hashtag title="간편" />
          </View>
        </View>
        <Text style={[
            {fontSize: 14},
            {fontWeight: 'bold'},
            {marginVertical: '2%'},
          ]}>들어가는 재료</Text>
        <Text style={[
          {fontSize: 13},
        ]}>단호박, 양배추, 당근, 양파, 표고버섯, 우유</Text>
      </View>
    );
  };

  const Step = ({number, text}) => {
    return (
      <View style={styles.step}>
        <Text style={styles.stepNumber}>{number}</Text>
        <Text style={styles.stepText}>{text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <DetailHeader />
      <ScrollView style={{overflow: 'visible'}}>
        <Image source={require('../../assets/example/mealkit_example_6.png')} style={styles.recipeImage} />
        <RecipeInfo />
        <Image source={require('../../assets/seperator.png')} style={styles.seperator} />
        <View style={styles.stepContainer}>
          <View style={[{flexDirection: 'row'}, {marginBottom: '5%'}]}>
            <Text style={[
              {fontSize: 14},
              {fontWeight: 'bold'},
            ]}>레시피</Text>
            <Image source={require('../../assets/StepFontImage.png')} style={styles.stepImage} />
          </View>
          {steps.map((step) => (
            <Step key={step.number} number={step.number} text={step.text} />
          ))}
        </View>
      </ScrollView>
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
  headerButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '3%',
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

  recipeImage: {
    height: '43%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: '3%',
  },

  infoContainer: {
    paddingHorizontal: 25,
  },
  desc: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
  },

  seperator: {
    height: '0.8%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: '3%',
  },
  stepImage: {
    width: '15%',
    height: '80%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  stepContainer: {
    paddingHorizontal: 25,
    height: '70%',
  },
  step: {
    flexDirection: 'row',
    marginBottom: '2%',
  },
  stepNumber: {
    backgroundColor: '#FF9069',
    borderRadius: 50,
    width: 18,
    height: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginRight: 6,
  },
  stepText: {
    width: '90%',
    fontWeight: 'bold',
    color: '#363636',
  },
});

export default RecipeDetail;
