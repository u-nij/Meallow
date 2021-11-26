import * as React from 'react';
import { View, ScrollView, Image } from 'react-native';
import styles from '../components/MainStyles';
import { useNavigation } from '@react-navigation/native';
import VerticalItem from '../components/VerticalItem';

const bannerImg = require('../../assets/recipe_banner.png');

const recipes = [
    { name:'치즈 닭가슴살 커틀렛', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_5.png')},
    { name:'고소한 수육', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_1.png')},
    { name:'소고기 퀴노아 샐러드', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_3.png')}, 
    { name:'아보카도 샌드위치', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_4.png')},
    { name:'아침 샐러드', writer: '나', date: '2021.11.12', image:require('../../assets/example/mealkit_example_2.png')}
];

export default function Recipe() {
    
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.default}>
            <Image source={bannerImg} style={styles.banner_img_recipe} />
            
            <View style={[styles.component_layout, {margin: 20}]}>
                <VerticalItem items={recipes}></VerticalItem>
            </View>
        </ScrollView>
    );
}