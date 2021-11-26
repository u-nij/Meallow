import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from '../components/MainStyles';
import { useNavigation } from '@react-navigation/core';
import RecipeHashtag from '../components/RecipeHashtag';

const bannerImg = require('../../assets/recipe_banner.png');

const recipes1 = [
    { name:'아보카도 샌드위치', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_4.png')},
    { name:'아침 샐러드', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_2.png')},
    { name:'달큰한 호박죽', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_6.png')},
    { name:'치즈 닭가슴살 커틀렛', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_5.png')},
    { name:'고소한 수육', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_1.png')},
    { name:'소고기 퀴노아 샐러드', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_3.png')}
];

const recipes2 = [
  { name:'치즈 닭가슴살 커틀렛', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_5.png')},
  { name:'달큰한 호박죽', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_6.png')},
  { name:'고소한 수육', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_1.png')},
  { name:'소고기 퀴노아 샐러드', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_3.png')}, 
  { name:'아보카도 샌드위치', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_4.png')},
  { name:'아침 샐러드', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_2.png')}
];

const hashtags = [
  {id: 0, name: '간편'},
  {id: 1, name: '건강'},
  {id: 2, name: '홈트식단'},
  {id: 3, name: '비건'},
  {id: 4, name: '틱톡인기'}
];

export default function Recipe() {
    
    const navigation = useNavigation();

    const [selected, setSelected] = useState(0);

    const onHashtagPressed = (hashtagId) => {
      if(selected !== hashtagId)
        setSelected(selected => hashtagId);
    };
  
    const recipes = selected ? recipes2 : recipes1;

    return (
        <ScrollView style={styles.default}>
            <Image source={bannerImg} style={styles.banner_img_recipe} />
            <ScrollView style={styles.hashtag_container} horizontal={true}>
                {hashtags.map((hashtag) => (
                    <RecipeHashtag key={hashtag.id} onPress={() => onHashtagPressed(hashtag.id)} pressed={selected === hashtag.id} text={hashtag.name} width={35 + 13 * hashtag.name.length} />
                ))}
             </ScrollView>
            <View style={[styles.component_layout, {margin: 20}]}>
                <View style={styles.vertical_img_layout}>
                    {recipes.map((item) => (
                        (<TouchableOpacity key={item.name} style={{marginBottom: 30}} activeOpacity={0.8}
                            onPress={() => alert('레시피 상세 페이지로 이동합니다.')}>
                            <View style={styles.image_wrapper_vertical}>
                                <ImageBackground source={item.image} style={styles.item_image} />
                            </View>
                            <Text style={styles.item_name}>{item.name}</Text>
                            <Text style={styles.item_name}>{item.price}</Text>
                        </TouchableOpacity>)
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}