import * as React from 'react';
import MainLayout from './src/components/MainLayout';
import RecipeDetail from './src/screens/RecipeDetail';
import OnBoarding1 from './src/screens/OnBoarding1Screen';
import OnBoarding2 from './src/screens/OnBoarding2Screen';
import OnBoarding3 from './src/screens/OnBoarding3Screen';
import SocialLogin from './src/screens/SocialLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainRecommended" screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainRecommended">
          {props => <MainLayout user_name={''} header footer recommended></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="SocialLogin" component={SocialLogin}></Stack.Screen>
        <Stack.Screen name="OnBoarding1" component={OnBoarding1}></Stack.Screen>
        <Stack.Screen name="OnBoarding2" component={OnBoarding2}></Stack.Screen>
        <Stack.Screen name="OnBoarding3" component={OnBoarding3}></Stack.Screen>
        <Stack.Screen name="MainBest" >
          {props => <MainLayout user_name={''} header footer best></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="Recipe" >
          {props => <MainLayout user_name={''} header footer recipe></MainLayout>}
        </Stack.Screen>
        <Stack.Screen name="RecipeDetail" component={RecipeDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
