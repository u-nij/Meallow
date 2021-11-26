import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';
import Footer from './Footer';
import MainRecommended from '../screens/MainRecommended';
import MainBest from '../screens/MainBest';
import Recipe from '../screens/Recipe';

const MainLayout = ( {user_name, header, footer, best, recommended, recipe} ) => {
    
    let title = null;
    let menu = '';
    if (recipe) {
        title = '레시피';
        menu = 'recipe';
    } else if (best || recommended) {
        menu = 'home';
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            {header && <Header title={title}/>}
            {recommended && <MainRecommended user_name={user_name} />}
            {best && <MainBest user_name={user_name} />}
            {recipe && <Recipe />}
            {footer && <Footer menu={menu} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default MainLayout;