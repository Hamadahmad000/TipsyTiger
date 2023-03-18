import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './src/Screens/Register/Login'
import CreateAccount1 from './src/Screens/Register/CreateAccount1'
import CreateAccount2 from './src/Screens/Register/CreateAccount2'
import Onboarding from './src/Screens/Register/Onboarding'
import PrivacyPolicy from './src/Screens/PrivacyPolicy'
import SplashScreen from './src/Screens/SplashScreen'
import TabNavigation from './src/Navigator/TabNavigation'
import MyCarts from './src/Screens/MyCarts'
import Home from './src/Screens/Home'
import CreaeAccount1 from './src/Screens/Register/CreateAccount1'
import CreaeAccount2 from './src/Screens/Register/CreateAccount2'
const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      <Stack.Screen name='signup1' component={CreaeAccount1} options={{headerShown:false}}/>
      <Stack.Screen name='signup2' component={CreaeAccount2} options={{headerShown:false}}/>
      <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown:false}}/>
      <Stack.Screen name='carts' component={MyCarts} options={{headerShown:false}}/>
      
     </Stack.Navigator>
      
    </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})