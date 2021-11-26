import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import IconButton from './IconButton';

const types = {
    home:require('../../assets/button/home.png'),
    recipe:require('../../assets/button/recipe.png'),
    qr_code:require('../../assets/button/qr_code.png'),
    subscribe:require('../../assets/button/subscribe.png'),
    my_page:require('../../assets/button/my_page.png'),
};

function Footer() {
    return (
        <View style={styles.footer}>
            <IconButton type={types.home}></IconButton>
            <IconButton type={types.recipe}></IconButton>
            <TouchableOpacity activeOpacity={0.8} style={styles.button_wrapper}>
              <Image source={types.qr_code} style={styles.button_image}></Image>
            </TouchableOpacity>
            <IconButton></IconButton>
            <IconButton type={types.subscribe}></IconButton>
            <IconButton type={types.my_page}></IconButton>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        borderTopWidth: 1,
        borderColor: '#bbb',
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button_wrapper: {
      flex: 1,
      margin: 5,
      height: '60%',
      maxWidth: '20%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-25%',
      left: '45%',
    },
    button_image: {
        height: '100%',
        resizeMode: 'contain',
    },
});
  
export default Footer;