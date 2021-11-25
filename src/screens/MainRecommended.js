import React from "react";
import { View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../components/MainStyles';
import HorizontalItem from '../components/HorizontalItem';

const bannerImg = require('../../assets/main_banner.png');

const recommended_items = [
    { name:'고소한 수육', price:'18,900원', image:require('../../assets/example/mealkit_example_1.png')},
    { name:'아침 샐러드', price:'12,000원', image:require('../../assets/example/mealkit_example_2.png')},
    { name:'소고기 퀴노아 샐러드', price:'20,500원', image:require('../../assets/example/mealkit_example_3.png')}, 
    { name:'아보카도 샌드위치', price:'16,500원', image:require('../../assets/example/mealkit_example_4.png')},
    { name:'치즈 닭가슴살 커틀렛', price:'8,600원', image:require('../../assets/example/mealkit_example_5.png')}
];

export default function MainRecommended( {user_name} ) {
    return (
        <ScrollView style={styles.default}>
            <View>
                <ImageBackground source={bannerImg} style={styles.banner_img} />
            </View>

            <View style={{height: 15, backgroundColor: '#bbb'}}></View>
            
            <View style={styles.component_layout}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity={0.8} style={{borderBottomWidth: 5}}>
                        <Text style={[styles.layout_title, {color:'#000'}]}> {'추천'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.layout_title}> {'베스트'} </Text>
                    </TouchableOpacity>
                </View>
                <HorizontalItem items={recommended_items}></HorizontalItem>
            </View>

            <View style={styles.component_layout}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.layout_title, {color:'#000'}]}> {user_name}님을 위한 식단 </Text>
                </View>
                <HorizontalItem items={recommended_items}></HorizontalItem>
            </View>
        </ScrollView>
    );
}
