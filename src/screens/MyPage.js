import React, {useState} from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../components/MainStyles';

import { useNavigation } from '@react-navigation/native';

const to_subscribe = require('../../assets/button/to_subscribe.png');

export default function MyPage( {user_name} ) {

    const navigation = useNavigation();

    let name = user_name ? user_name : '밀로';
    const informations = [
        {name: 'order_history', title: '주문 내역', count: 0},
        {name: 'delivery_status', title: '배달 상황', count: 0}, 
        {name: 'writing_review', title: '작성 리뷰', count: 0}
    ];

    const MyPage_Menu = ({title}) => {
        return (
            <TouchableOpacity style={styles.mypage_button} activeOpacity={0.7}>
                <Text style={styles.mypage_button_info}>{title}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView style={[styles.default]}>
            <View style={{paddingHorizontal: '5%'}}>
                <Text style={styles.mypage_title}>{name}</Text>
                <TouchableOpacity activeOpacity={0.7}
                    onPress={() => navigation.navigate('Subscribe')}>
                    <Image style={{marginVertical: 8}} source={to_subscribe}></Image>
                </TouchableOpacity>
                <View style={styles.mypage_info_layout}>
                    {informations.map((info) => (
                        <TouchableOpacity
                            key={info.name}
                            style={[styles.mypage_info, info.name == 'writing_review' ? {borderRightWidth:0} : {borderRightWidth:1}]}
                            activeOpacity={0.7}>
                            <Text style={styles.mypage_info_font}>{info.title}</Text>
                            <Text style={[styles.mypage_info_font, {color:'#FF9069'}]}>{info.count}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{marginVertical:10}}>
                    <Text style={styles.mypage_title}>활동</Text>
                    <MyPage_Menu title={'최근 본 상품'}/>
                    <MyPage_Menu title={'받은 쿠폰'}/>
                </View>
                <View style={{marginVertical:10}}>
                    <Text style={styles.mypage_title}>정보</Text>
                    <MyPage_Menu title={'고객센터'}/>
                    <MyPage_Menu title={'공지사항'}/>
                    <MyPage_Menu title={'개인정보 수집 및 이용'}/>
                    <MyPage_Menu title={'서비스 이용 약관'}/>
                    <MyPage_Menu title={'버전 정보'}/>
                </View>
            </View>
        </ScrollView>
    );
}
