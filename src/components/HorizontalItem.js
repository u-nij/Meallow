import React from "react";
import styles from './MainStyles';
import { View, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';

const HorizontalItem = ({ items }) => (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginVertical: 30}}>
            {items.map((item) => (
                <TouchableOpacity key={item.name} style={{marginRight: 30}} activeOpacity={0.8}>
                    <View style={styles.image_wrapper}>
                        <ImageBackground source={item.image} style={styles.item_image} />
                    </View>
                    <Text style={styles.item_name}>{item.name}</Text>
                    <Text style={styles.item_name}>{item.price}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </ScrollView>
);

export default HorizontalItem;