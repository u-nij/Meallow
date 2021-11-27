import React, {useState} from 'react';
import { View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../components/MainStyles';

import { useNavigation } from '@react-navigation/native';

const bannerImg = require('../../assets/main_banner.png');

const recommended_items = [
    { name:'고소한 수육', price:'18,900원', image:require('../../assets/example/mealkit_example_1.png')},
    { name:'아침 샐러드', price:'12,000원', image:require('../../assets/example/mealkit_example_2.png')},
    { name:'소고기 퀴노아 샐러드', price:'20,500원', image:require('../../assets/example/mealkit_example_3.png')}, 
    { name:'아보카도 샌드위치', price:'16,500원', image:require('../../assets/example/mealkit_example_4.png')},
    { name:'치즈 닭가슴살 커틀렛', price:'8,600원', image:require('../../assets/example/mealkit_example_5.png')}
];
const best_items = [
    { name:'치즈 닭가슴살 커틀렛', price:'8,600원', image:require('../../assets/example/mealkit_example_5.png')},
    { name:'고소한 수육', price:'18,900원', image:require('../../assets/example/mealkit_example_1.png')},
    { name:'소고기 퀴노아 샐러드', price:'20,500원', image:require('../../assets/example/mealkit_example_3.png')}, 
    { name:'아보카도 샌드위치', price:'16,500원', image:require('../../assets/example/mealkit_example_4.png')},
    { name:'아침 샐러드', price:'12,000원', image:require('../../assets/example/mealkit_example_2.png')}
];

export default function Home( {user_name} ) {

    const navigation = useNavigation();
    
    const [recommended, setRecommended] = useState(1);
    const onRecommendedButton = () => {
        setRecommended(recommended => recommended > 0 ? recommended : recommended + 1);
    };
    const onBestButton = () => {
        setRecommended(recommended => recommended <= 0 ? recommended : recommended - 1);
    };

    const name = user_name ? user_name : '밀로';
    const button_type = user_name ? '식단 받기' : '시작하기';
    const items = recommended ? recommended_items : best_items;

    return (
        <ScrollView style={styles.default}>
            <ImageBackground source={bannerImg} style={styles.banner_img}>
                <TouchableOpacity onPress={() => navigation.navigate('SocialLogin')} style={styles.banner_button}>
                    <Text style={[styles.item_name, {color:'#fff'}]}> {button_type} </Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={{height: 5, backgroundColor: '#F1F1F1'}}></View>
            
            <View style={styles.component_layout}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => {onRecommendedButton();}}>
                        <Text style={[styles.layout_title, recommended && {color:'#000', borderBottomWidth: 3}]}> {'추천'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => {onBestButton();}}>
                        <Text style={[styles.layout_title, !recommended && {color:'#000', borderBottomWidth: 2}]}> {'베스트'} </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', marginVertical: 30}}>
                        {items.map((item) => (
                            <TouchableOpacity key={item.name} style={{marginRight: 30}} activeOpacity={0.8}
                            onPress={() => navigation.navigate('PurchaseDetails')}>
                                <View style={styles.image_wrapper}>
                                    <ImageBackground source={item.image} style={styles.item_image} />
                                </View>
                                <Text style={styles.item_name}>{item.name}</Text>
                                <Text style={styles.item_name}>{item.price}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            <View style={styles.component_layout}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.layout_title, {color:'#000'}]}> {name}님을 위한 식단 </Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: 'row', marginVertical: 30}}>
                        {recommended_items.map((item) => (
                            <TouchableOpacity key={item.name} style={{marginRight: 30}} activeOpacity={0.8}
                            onPress={() => navigation.navigate('PurchaseDetails')}>
                                <View style={styles.image_wrapper}>
                                    <ImageBackground source={item.image} style={styles.item_image} />
                                </View>
                                <Text style={styles.item_name}>{item.name}</Text>
                                <Text style={styles.item_name}>{item.price}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}
