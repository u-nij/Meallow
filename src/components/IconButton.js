import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const IconButton = ({type}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.button_wrapper}>
            <Image source={type} style={styles.button_image}></Image>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button_wrapper: {
        flex: 1,
        margin: 5,
        height: '50%',
        maxWidth: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_image: {
        height: '90%',
        resizeMode: 'contain',
    },
});

export default IconButton;