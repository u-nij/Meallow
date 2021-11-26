import * as React from 'react';
import MainLayout from './src/components/MainLayout'
import OnBoarding from './src/screens/OnBoarding1Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <MainLayout user_name={'유진'} header footer recommended></MainLayout>
    // <OnBoarding />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipe" screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainRecommended">
          {props => <MainLayout user_name={''} header footer recommended></MainLayout>}
        </Stack.Screen>
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
