import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import styles from '../components/MainStyles';
import { useNavigation } from '@react-navigation/native';

const subscribe_tmp = require('../../assets/subscribe_tmp.png');

export default function Subscribe() {
    
    const navigation = useNavigation();
    let price = '0'

    return (
        <ScrollView style={{width: '90%', backgroundColor: '#fff'}}>
            <View>
                <Text style={styles.subscribe_font}>매달 구독비</Text>
                <View style={{flexDirection: 'row', alignItems:'flex-end', height: 44}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.subscribe_price2}> {price} </Text>
                        <Text style={styles.subscribe_price}> {price} </Text>
                    </View>
                    <Text style={styles.subscribe_font}>  원</Text>
                </View>
            </View>
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <Image source={subscribe_tmp} style={styles.subscribe_tmp}></Image>
                <Text style={styles.subscribe_font2}>하루 한 끼 건강한 집밥을</Text>
                <Text style={styles.subscribe_font2}>도전해보세요~!</Text>
                <Text style={[styles.subscribe_font, {marginTop: 10, alignSelf: 'center'}]}>배달음식은 이제 그만! 집밥을 구독하세요~</Text>
            </View>
            <TouchableOpacity style={styles.subscribe_start_button} activeOpacity={0.8}
                            onPress={() => navigation.navigate('SubscribeDetails')}>
                <Text style={styles.subscribe_start_button_font}>+  구독 시작해보기</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};