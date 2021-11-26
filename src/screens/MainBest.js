import * as React from 'react';
import { View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../components/MainStyles';
import HorizontalItem from '../components/HorizontalItem';

import { useNavigation } from '@react-navigation/native';

const bannerImg = require('../../assets/main_banner.png');

const best_items = [
    { name:'치즈 닭가슴살 커틀렛', price:'8,600원', image:require('../../assets/example/mealkit_example_5.png')},
    { name:'고소한 수육', price:'18,900원', image:require('../../assets/example/mealkit_example_1.png')},
    { name:'소고기 퀴노아 샐러드', price:'20,500원', image:require('../../assets/example/mealkit_example_3.png')}, 
    { name:'아보카도 샌드위치', price:'16,500원', image:require('../../assets/example/mealkit_example_4.png')},
    { name:'아침 샐러드', price:'12,000원', image:require('../../assets/example/mealkit_example_2.png')}
];


export default function MainBest( {user_name} ) {

    const navigation = useNavigation();
    const name = user_name ? user_name : '밀로';
    const button_type = user_name ? '식단 받기' : '시작하기';

    return (
        <ScrollView style={styles.default}>
            <ImageBackground source={bannerImg} style={styles.banner_img}>
                <TouchableOpacity onPress={() => navigation.navigate('SocialLogin')} style={styles.banner_button}>
                    <Text style={[styles.item_name, {color:'#fff'}]}> {button_type} </Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={{height: 5, backgroundColor: '#bbb'}}></View>
            
            <View style={styles.component_layout}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => navigation.navigate('MainRecommended', {name})}>
                        <Text style={styles.layout_title}> {'추천'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{borderBottomWidth: 2}}>
                        <Text style={[styles.layout_title, {color:'#000'}]}> {'베스트'} </Text>
                    </TouchableOpacity>
                </View>
                <HorizontalItem items={best_items}></HorizontalItem>
            </View>

            <View style={styles.component_layout}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.layout_title, {color:'#000'}]}> {name}님을 위한 식단 </Text>
                </View>
                <HorizontalItem items={best_items}></HorizontalItem>
            </View>
        </ScrollView>
    );
}
