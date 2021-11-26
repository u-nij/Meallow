import React from "react";
import styles from './MainStyles';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';

const VerticalItem = ({ items }) => (
    <View style={styles.vertical_img_layout}>
        {items.map((item) => (
            (<TouchableOpacity key={item.name} style={{marginBottom: 30}} activeOpacity={0.8}>
                <View style={styles.image_wrapper_vertical}>
                    <ImageBackground source={item.image} style={styles.item_image} />
                </View>
                <Text style={styles.item_name}>{item.name}</Text>
                <Text style={styles.item_name}>{item.price}</Text>
            </TouchableOpacity>)
        ))}
    </View>
);


export default VerticalItem;