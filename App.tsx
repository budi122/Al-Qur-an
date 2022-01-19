import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailScreen from './src/screens/detail.screen';
import HomeScreen from './src/screens/home.screen';
import Home from './src/screens/home';
import Tahlil from './src/screens/tahlil';
import As from './src/screens/as';
import Splash from './src/screens/splas';

const Stack = createStackNavigator();

const App = () => { 
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Splash'
       screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Awal'} component={Home}/>
        <Stack.Screen name={'Home'} component={HomeScreen}/>
        <Stack.Screen name={'Detail'} component={DetailScreen}/>
        <Stack.Screen name={'Tahlil'} component={Tahlil}/>
        <Stack.Screen name={'As'} component={As}/>
        <Stack.Screen name={'Splash'} component={Splash}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;