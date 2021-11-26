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

export default function PurchaseDetails( {content, item=item_infos} ) {
    const navigation = useNavigation();
    
    const title = '구매';
    let recommended_items = mealkits_examples;
    let review_count = 0;

    let output, item_info_font;
    switch (content) {
        case 'information':
            output = item.information == '' ? '아직 등록된 정보가 없어요' : item.information;
            break;
        case 'review':
            output = item.review == '' ? '아직 등록된 정보가 없어요' : item.review;
            break;
        case 'output':
            content = item.explain == '' ? '아직 등록된 정보가 없어요' : item.explain;
            break;
    }
    if (output == '아직 등록된 정보가 없어요') {
        item_info_font = {fontSize: 12, color: '#555', lineHeight: 18};
    } else {
        item_info_font = {fontSize: 12, color: '#000', lineHeight: 18};
    }
    const active_info_title_style = [styles.items_info_title_container, {borderBottomColor: '#777'}];

    const [scrap, setScrap] = useState(false);
    const onButtonScrap = () => {
        setScrap(!scrap);
    };

    const [clickedInfo, setClickedInfo] = useState([
       'information', 'review', 'explain'
    ]);
    const onButtonInfo = (id) => {
        content = clickedInfo[id];
    };

    return (
        <View stlye={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonBackStyle} onPress={() => {navigation.goBack();}} activeOpacity={0.7}>
                    <Image source={arrow_back} style={styles.buttonImageIconStyle}/>
                </TouchableOpacity>
                {title && <Text style={styles.title}>{title}</Text>}
                <TouchableOpacity style={styles.buttonBackStyle} onPress={() => {alert('장바구니 페이지로 이동합니다.');}} activeOpacity={0.7}>
                    <Image source={basket} style={styles.buttonImageIconStyle}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={{width: '100%', backgroundColor:'#fff'}}>
                <View style={styles.item_img_layout}>
                    <Image style={styles.item_img} source={mealkit_img} />
                </View>
                <View style={styles.item_explain}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', paddingBottom: 5}}>{item.name}</Text>
                        <TouchableOpacity style={[styles.buttonBackStyle, {position:'absolute', right:5}]} activeOpacity={0.9}
                            onPress={() => {onButtonScrap();}}>
                            <Image source={scrap ? scrap_img_active : scrap_img} style={styles.buttonImageIconStyle}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 10, color: '#999', paddingBottom: 15}}>{item.introduction}</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 10}}>{item.price}</Text>
                    <View style={{borderWidth: 0.5, borderColor: '#bbb', marginBottom: 10}} />
                    <Text style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 10}}>같은 식단에 넣으면 좋은 밀키트</Text>
                    <View style={styles.recommended_items_layout}>
                        {recommended_items.map((item) => (
                            <Image style={styles.recommended_img} source={item} />
                        ))}
                    </View>
                </View>
                <View style={styles.items_info_layout}>
                    <View style={content == 'information' ? active_info_title_style : styles.items_info_title_container}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {onButtonInfo(0);}}>
                            <Text style={content == 'information' ? {fontSize: 12, color: '#000', fontWeight: 'bold'} : {fontSize: 12, color: '#999'}}> {'상품정보'} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={content == 'review' ? active_info_title_style : styles.items_info_title_container}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {onButtonInfo(1);}}>
                            <Text style={content == 'review' ? {fontSize: 12, color: '#000', fontWeight: 'bold'} : {fontSize: 12, color: '#999'}}> {'리뷰'} {review_count} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={content == 'explain' ? active_info_title_style : styles.items_info_title_container}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => {onButtonInfo(2);}}>
                            <Text style={content == 'explain' ? {fontSize: 12, color: '#000', fontWeight: 'bold'} : {fontSize: 12, color: '#999'}}> {'상품설명'} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.items_info}>
                    <Text style={item_info_font}>{output}</Text>
                </View>
            </ScrollView>

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