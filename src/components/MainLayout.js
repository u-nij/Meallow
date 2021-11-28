import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Home from '../screens/Home';
import Recipe from '../screens/Recipe';
import Subscribe from '../screens/Subscribe';
import MyPage from '../screens/MyPage';

const MainLayout = ( {user_name, header, footer, home, recipe, subscribe, mypage} ) => {
    
    let title = null;
    let menu = '';
    if (recipe) {
        title = '레시피';
        menu = 'recipe';
    } else if (subscribe) {
        title = 'My 구독';
        menu = 'subscribe';
    } else if (home) {
        menu = 'home';
    } else if (mypage) {
        title = '마이페이지';
        menu = 'my_page';
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            {header && <Header title={title}/>}
            {home && <Home user_name={user_name} />}
            {recipe && <Recipe />}
            {subscribe && <Subscribe />}
            {mypage && <MyPage />}
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