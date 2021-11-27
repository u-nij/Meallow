import React, {useState} from 'react';
import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../components/MainStyles';

import { useNavigation } from '@react-navigation/native';

const my_page = require('../../assets/my_page.png');

export default function MainRecommended( {user_name} ) {

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.default}>
            <Image source={my_page} style={styles.my_page_img}>
            </Image>
        </ScrollView>
    );
}
