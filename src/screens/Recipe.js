import * as React from 'react';
import { View, ScrollView, Image, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from '../components/MainStyles';
import { useNavigation } from '@react-navigation/native';
import VerticalItem from '../components/VerticalItem';

const bannerImg = require('../../assets/recipe_banner.png');

const recipes = [
    { name:'치즈 닭가슴살 커틀렛', price:'8,600원', image:require('../../assets/example/mealkit_example_5.png')},
    { name:'고소한 수육', price:'18,900원', image:require('../../assets/example/mealkit_example_1.png')},
    { name:'소고기 퀴노아 샐러드', price:'20,500원', image:require('../../assets/example/mealkit_example_3.png')}, 
    { name:'아보카도 샌드위치', price:'16,500원', image:require('../../assets/example/mealkit_example_4.png')},
    { name:'아침 샐러드', price:'12,000원', image:require('../../assets/example/mealkit_example_2.png')}
];

export default function Recipe() {
    
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.default}>
            <Image source={bannerImg} style={styles.banner_img_recipe} />
            
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