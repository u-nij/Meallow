import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';

function Header( {title} ) {
    return (
        <View style={styles.header}>
            {title && <Text style={styles.title}>{title}</Text>}
            {!title && <Image source={require('../../assets/meallow_logo.png')} style={styles.logo}/>}
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
    title: {
        alignSelf: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: "#000",
        borderBottomWidth: self.width,
    }
});
  
export default Header;