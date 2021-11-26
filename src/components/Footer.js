import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from './IconButton';

const types = {
    home_active:require('../../assets/button/home_active.png'),
    home:require('../../assets/button/home.png'),
    recipe_active:require('../../assets/button/recipe_active.png'),
    recipe:require('../../assets/button/recipe.png'),
    qr_code:require('../../assets/button/qr_code.png'),
    subscribe_active:require('../../assets/button/subscribe_active.png'),
    subscribe:require('../../assets/button/subscribe.png'),
    my_page:require('../../assets/button/my_page.png'),
    // my_page_active:require('../../assets/button/my_page_active.png'),

};

function Footer( {menu} ) {
    const navigation = useNavigation();

    let home = false;
    let recipe = false;
    let subscribe = false;
    let my_page = false;

    switch (menu) {
        case 'home':
            home = true;
            break;
        case 'recipe':
            recipe = true;
            break;
        case 'subscribe':
            subscribe = true;
            break;
        case 'my_page':
            my_page = true;
            break;
    }
    
    return (
        <View style={styles.footer}>
            {!home && <IconButton type={types.home} onPress={() => navigation.navigate('MainRecommended')}></IconButton>}
            {home && <IconButton type={types.home_active} onPress={() => navigation.navigate('MainRecommended')}></IconButton>}
            {!recipe && <IconButton type={types.recipe} onPress={() => navigation.navigate('Recipe')}></IconButton>}
            {recipe && <IconButton type={types.recipe_active} onPress={() => navigation.navigate('Recipe')}></IconButton>}
            <TouchableOpacity activeOpacity={0.8} style={styles.button_wrapper}>
              <Image source={types.qr_code} style={styles.button_image}></Image>
            </TouchableOpacity>
            <IconButton></IconButton>
            {!subscribe && <IconButton type={types.subscribe}></IconButton>}
            {subscribe && <IconButton type={types.subscribe_active}></IconButton>}
            {!my_page && <IconButton type={types.my_page}></IconButton>}
            {/* {my_page && <IconButton type={types.my_page_active}></IconButton>} */}
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