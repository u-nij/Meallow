import React from "react";
import styles from './MainStyles';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/core";

const VerticalItem = ({ items }) => {
    const navigation = useNavigation();

    return(
        <View style={styles.vertical_img_layout}>
            {items.map((item) => (
                <TouchableOpacity key={item.name} style={{marginBottom: 30}} activeOpacity={0.8} onPress={() => navigation.navigate('RecipeDetail')}>
                    <View style={styles.image_wrapper_vertical}>
                        <ImageBackground source={item.image} style={styles.item_image} />
                    </View>
                    <Text style={styles.item_name}>{item.name}</Text>
                    <View style={styles.item_info_container}>
                      <Text style={styles.item_info}>작성자 {item.writer}</Text>
                      <Text style={styles.item_info}>|</Text>
                      <Text style={styles.item_info}>{item.date}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};


export default VerticalItem;