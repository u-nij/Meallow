import * as React from 'react';
import MainLayout from './src/components/MainLayout'
import OnBoarding from './src/screens/OnBoarding3Screen';
import SocialLogin from './src/screens/SocialLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainRecommended">
          {props => <MainLayout user_name={''} header footer recommended></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="SocialLogin" component={SocialLogin}></Stack.Screen>
        <Stack.Screen name="OnBoarding" component={OnBoarding}></Stack.Screen>
        <Stack.Screen name="MainBest" >
          {props => <MainLayout user_name={''} header footer best></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="Recipe" >
          {props => <MainLayout user_name={''} header footer recipe></MainLayout>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
