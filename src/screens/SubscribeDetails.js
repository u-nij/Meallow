import React, {useState} from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';

const arrow_back = require('../../assets/arrow_back_ios_black_24dp.png');
const basket = require('../../assets/button/basket.png');
const scrap_img = require('../../assets/button/scrap.png');
const scrap_img_active = require('../../assets/button/scrap_active.png');

const mealkit_img = require('../../assets/mealkit_example.png')
const mealkit_example_1 = require('../../assets/example/mealkit_example_1.png');
const mealkit_example_2 = require('../../assets/example/mealkit_example_2.png');
const mealkit_example_3 = require('../../assets/example/mealkit_example_3.png');
const mealkit_example_4 = require('../../assets/example/mealkit_example_4.png');

const mealkits_examples = [ mealkit_example_1, mealkit_example_2, mealkit_example_3, mealkit_example_4 ];
const item_infos = {
    name: '고소한 수육 밀키트',
    introduction: '육식 집밥러들을 위한 간단한 밀키트 박스',
    price: '18,900원 ~',
    information: '제품명: 고소한 수육 밀키트\n용량: 650g\n유통기한: 제조일로부터 냉장 5일\n원재료명 및 함량: 돼지고기53.4%(국내산),양파(국내산),된장7.6%[대두(국내산),천일염(호주산),주정,종국],대파(국내산),유기농설탕3%,프락토올리고당,마늘(국내산),요리맛샘(대두,밀,굴),참기름(국내산),후추가루/돼지고기,대두,밀,굴 함유\n보관방법(취급방법): 0~10℃(냉장보관)\n식품의 유형: 식육함유가공품\n',
    review: '',
    explain: '한끼 든든하게 먹기 좋은 담백한 수육. 남녀노소 모두가 좋아하는 반찬, 수육. 이번엔 색다르게 된장 양념을 이용한 한돈 된장수육을 준비했어요. 구수하게 단맛 나는 된장 양념이 고기에 스며들어 특유의 잡내는 줄이고 더욱 부드러워진 식감을 자랑합니다. 조리하실 땐 양념이 쉽게 탈 수 있어 물을 조금 넣고 볶으시면 더욱 맛있게 드실 수 있어요.\n 된장 특유의 구수한 맛이 쏙쏙 베어 있고 한끼 반찬으로 먹기에 든든하게 구성되어 있어요.'
};

export default function SubscribeDetails( ) {
    const navigation = useNavigation();
    
    const [scrap, setScrap] = useState(false);
    const onButton = () => {
        setScrap(!scrap);
    };

    return (
        <View stlye={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonBackStyle} onPress={() => {navigation.goBack();}} activeOpacity={0.7}>
                    <Image source={arrow_back} style={styles.buttonImageIconStyle}/>
                </TouchableOpacity>
                <Text style={styles.title}>구독</Text>
            </View>

            <View style={{width:'100%', height: '50%', backgroundColor: '#fff', alignItems: 'center', paddingHorizontal: '5%', paddingVertical: 10}}>
                <TouchableOpacity TouchableOpacity style={[styles.purchase_button, {backgroundColor: '#000'}]}
                    onPress={() => {alert('상품 구매 페이지로 이동합니다.');}} activeOpacity={0.7}>
                    <Text style={styles.button_font}>상품 구매하기</Text>
                </TouchableOpacity>
                <TouchableOpacity TouchableOpacity style={[styles.purchase_button, {backgroundColor: 'coral'}]}
                    onPress={() => {}} activeOpacity={0.7}>
                    <Text style={styles.button_font}>밀키트 구독하기</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='auto' />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    buttonImageIconStyle: {
        width: 23,
        height: 23,
    },
    title: {
        fontSize: 20,
    },
    item_img_layout: {
        backgroundColor: '#fff',
        height: 250,
        width: '100%',
    },
    item_img: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    item_explain: {
        width: '100%',
        resizeMode: 'cover',
        backgroundColor: '#fff',
        paddingHorizontal: '5%',
        marginVertical: 30,
    },
    recommended_items_layout: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    recommended_img: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        alignSelf: 'center',
    },
    items_info_layout: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        justifyContent: 'space-around',
    },
    items_info_title_container: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },
    items_info: {
        padding: '5%', 
    },
    purchase_button: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        marginVertical: 5,
    },
    button_font: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});