import React, {useState} from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const arrow_back = require('../../assets/arrow_back_ios_black_24dp.png');
const favorite_1 = require('../../assets/button/favorite_1.png');
const favorite_2 = require('../../assets/button/favorite_2.png');
const favorite_3 = require('../../assets/button/favorite_3.png');
const favorite_1_active = require('../../assets/button/favorite_1_active.png');
const favorite_2_active = require('../../assets/button/favorite_2_active.png');
const favorite_3_active = require('../../assets/button/favorite_3_active.png');

export default function SubscribeDetails( ) {
    const navigation = useNavigation();
    
    const [days, setDay] = useState([
        { id: 0, title: '월', selected: false },
        { id: 1, title: '화', selected: false },
        { id: 2, title: '수', selected: false },
        { id: 3, title: '목', selected: false },
        { id: 4, title: '금', selected: false },
        { id: 5, title: '토', selected: false },
        { id: 6, title: '일', selected: false },
    ]);

    const [meals, setMeal] = useState([
        { id: 0, title: '아침', selected: false },
        { id: 1, title: '점심', selected: false },
        { id: 2, title: '저녁', selected: false },
    ]);

    const [like_styles, setLikeStyle] = useState([
        { id: 0, title: '영양가득_집밥', selected: false, img:favorite_1_active, img_gray:favorite_1 },
        { id: 1, title: '든든한_집밥', selected: false, img:favorite_2_active, img_gray:favorite_2 },
        { id: 2, title: '간편한_집밥', selected: false, img:favorite_3_active, img_gray:favorite_3},
    ]);

    const [selected, setSelected] = useState([]);

    const onItemPressed = (item, items) => {
        if (items[item.id].selected) {
            items[item.id].selected = false;
            setSelected(selected => selected.filter(item => selected.id !== item.id))
        } else {
            items[item.id].selected = true;
            setSelected(selected => [...selected, item]);
        }
    };

    return (
        <View stlye={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonImageIconStyle} onPress={() => {navigation.goBack();}} activeOpacity={0.7}>
                    <Image source={arrow_back} style={styles.buttonImageIconStyle}/>
                </TouchableOpacity>
                <Text style={styles.title}>구독</Text>
                <Text style={styles.buttonImageIconStyle}></Text>
            </View>

            <ScrollView style={styles.main_layout}>
                <View>
                    <Text style={styles.subtitle}>식단 요일</Text>
                    <View style={styles.days_layout}>
                        {days.map((item) => (
                            <TouchableOpacity
                                onPress={() => onItemPressed(item, days)}
                                style={item.selected ? [styles.days_button, {borderColor: '#FF9069', backgroundColor: '#FF9069'}] : styles.days_button}
                                activeOpacity={0.7} key={item.id}>
                                <Text style={ item.selected ? [styles.button_font, {color: '#fff'}] : styles.button_font}> {item.title} </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitle}>구독 끼니</Text>
                    <View style={styles.meals_layout}>
                        {meals.map((item) => (
                            <TouchableOpacity
                                onPress={() => onItemPressed(item, meals)}
                                style={item.selected ? [styles.meals_button, {borderColor: '#FF9069', backgroundColor: '#FF9069'}] : styles.meals_button}
                                activeOpacity={0.7} key={item.id}>
                                <Text style={ item.selected ? [styles.button_font, {color: '#fff'}] : styles.button_font}> {item.title} </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.subtitle}>선호 집밥 스타일</Text>
                    <View style={styles.like_styles_layout}>
                        {like_styles.map((item) => (
                            <TouchableOpacity
                                onPress={() => onItemPressed(item, like_styles)}
                                activeOpacity={0.7} key={item.id}>
                                <Image style={styles.like_styles_img} source={item.selected ? item.img : item.img_gray}></Image>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footerStyle}>
                <CustomButton
                    onPress={() => {alert('다음 페이지로 이동합니다');}}
                    text="다음"
                    fontSize={16}
                    bgColor="#363636"
                    width='100%'
                    height={50}
                />
            </View>
            <StatusBar style='auto' />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        height: '100%',
    },
    header: {
        width: '100%',
        height: 80,
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonBackStyle: {
        backgroundColor: '#C4C4C4',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 13,
    },
    buttonImageIconStyle: {
        width: 20,
        height: 20,
    },
    main_layout: {
        width: '100%',
        height: '89%',
        alignSelf:'stretch',
        backgroundColor: '#fff',
        padding:'5%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#363636',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#363636',
    },
    days_layout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 30,
        borderColor: '#fff',
    },
    days_button: {
        width: 40,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        backgroundColor: '#fff',
    },
    meals_layout: {
        flexDirection: 'row',
        borderBottomWidth: 30,
        borderColor: '#fff',
    },
    meals_button: {
        width: 80,
        height: 35,
        justifyContent: 'center',
        marginRight: 7,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        backgroundColor: '#fff',
    },
    like_styles_layout: {
        flexDirection: 'column',
        height: 255,
        justifyContent: 'space-between',
        width: '100%',
    },
    like_styles_img: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
    },
    next_button: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        marginVertical: 5,
        color: '#363636',
    },
    button_font: {
        fontSize: 16,
        color: '#aaaaaa',
        alignSelf: 'center',
    },
    footerStyle: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        bottom: 0,
        paddingHorizontal: '5%',
        paddingVertical: 10,
      },
      buttonBackStyle: {
        backgroundColor: '#C4C4C4',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 13,
      },
      buttonImageIconStyle: {
        width: 20,
        height: 20,
      },
});