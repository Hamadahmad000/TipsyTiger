import { Image, StyleSheet, Text, View ,StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {StackActions, useNavigation} from '@react-navigation/native'
const SplashScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(async() => {
      try {
       const userFound = await AsyncStorage.getItem('userDetails1')
       const isLogin = await AsyncStorage.getItem('isLogin')
      //  console.log(JSON.parse(userFound))
       if(isLogin === 'true'){
         navigation.navigate('TabNavigation')
        }else if(userFound){
          navigation.dispatch(StackActions.replace('Login'))
          
        }else{
         navigation.navigate('signup1')

       }
      } catch (error) {
        console.log(error);
        
      }
    }, 2000);
  }, [])
  
  return (
    <View  style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',   backgroundColor:'white'}}>
       <StatusBar hidden={true}/>
     <Image source={{uri:'https://cdn.dribbble.com/users/230124/screenshots/15845834/media/23579acd689b449168527eaa5993f970.jpg?compress=1&resize=400x300'}} style={{height:200,width:200}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})