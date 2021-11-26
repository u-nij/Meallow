import React from "react";
import { StyleSheet, View } from 'react-native';

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
            <IconButton type={types.qr_code}></IconButton>
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
        marginBottom: 10,
    },
});
  
export default Footer;