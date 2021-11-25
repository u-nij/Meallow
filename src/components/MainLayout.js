import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './Header';
import Footer from './Footer';
import MainRecommended from '../screens/MainRecommended';

const MainLayout = ( {user_name, header, footer} ) => {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            {header && <Header />}
            <MainRecommended user_name={user_name ? user_name : '밀로'}></MainRecommended>
            {footer && <Footer />}
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