import React from "react";
import { StyleSheet, View, Image } from 'react-native';

function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../../assets/meallow_logo.png')} style={styles.logo}/>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        top: 5,
        alignSelf: 'center',
        resizeMode: 'contain',
        height: '70%',
        maxWidth: '30%',
    },
    header: {
        width: '100%',
        height: 80,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
});
  
export default Header;