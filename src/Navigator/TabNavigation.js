import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Store from '../Screens/Store';
import Wishlist from '../Screens/Wishlist';
import Profile from '../Screens/Profile';
// icons 
import HomeIcons from '../../assets/Icons/icons8-home-page-32.png'
import StoreIcon from '../../assets/Icons/icons8-online-store-50.png'
import WishlistIcon from '../../assets/Icons/icons8-favorite-50.png'
import ProfileIcon from '../../assets/Icons/icons8-user-48.png'
import MyCarts from '../Screens/MyCarts';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarShowLabel:false,tabBarActiveTintColor:'#e91e63',tabBarStyle:{height:60,position:'absolute',bottom:20,borderRadius:90,marginHorizontal:25,backgroundColor:'#040413'}}}>
      <Tab.Screen name='Home' component={Home} options={{headerShown:false,tabBarLabel:'Home',tabBarIcon:({focused})=>{
          return <Image source={HomeIcons} style={{height:30,width:30,tintColor:focused? '#E88A34':'white'}}/>
      }}}/>
      <Tab.Screen name='Store' component={Store} options={{headerShown:false,tabBarLabel:'Store',tabBarIcon:({focused})=>{
          return <Image source={StoreIcon} style={{height:26,width:26,tintColor:focused? '#E88A34':'white'}}/>
      }}}/>
      <Tab.Screen name='Wishlist' component={MyCarts} options={{headerShown:false,tabBarLabel:'Wishlist',tabBarIcon:({focused})=>{
          return <Image source={WishlistIcon} style={{height:30,width:30,tintColor:focused? '#E88A34':'white'}}/>
      }}}/>
      <Tab.Screen name='Profile' component={Profile} options={{headerShown:false,tabBarLabel:'Profile',tabBarIcon:({focused})=>{
          return <Image source={ProfileIcon} style={{height:30,width:30,tintColor:focused? '#E88A34':'white'}}/>
      }}}/>
    </Tab.Navigator>
  );
};

export default TabNavigation
;

const styles = StyleSheet.create({
  HomeMainContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
});
