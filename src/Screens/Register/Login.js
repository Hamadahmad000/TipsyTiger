import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesom from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions, useNavigation } from '@react-navigation/native'
const Login = () => {
    const [isPasswordVisible, setisPasswordVisible] = useState(false)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
     const navigation = useNavigation()
    const verifyUser = async ()=>{
        console.log('Working');
      try {
        const userMatch = await AsyncStorage.getItem('userDetails1')
        const realData  = JSON.parse(userMatch)
        await AsyncStorage.setItem('isLogin','true')
        console.log(realData);
        if(!email,!password){
            Alert.alert('Message','Please enter all details')

        }else if(realData.userEmail === email && realData.userPassword === password){
            Alert.alert('Message','Login Successfull')
            navigation.dispatch(StackActions.replace('TabNavigation'))
        }else{
            Alert.alert('Message','user Email or Password is not matched')
            
        }
      } catch (error) {
        console.log(error);
        
      }
    }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.TopContaienr}>
          <View style={styles.BackbtnContainer}>
            <FontAwesom name='chevron-left' size={18}/>
            <Text style={{fontWeight:'bold',fontSize:20,paddingHorizontal:15,marginBottom:3}}>Back</Text>
          </View>
          <View style={styles.TopConatainerImg}>
          <Image source={{uri:'https://cdn.dribbble.com/users/230124/screenshots/15845834/media/23579acd689b449168527eaa5993f970.jpg?compress=1&resize=400x300'}} style={{height:150,width:150,borderRadius:10}}/>
          </View>

      </View>

      {/* Login Text Fields  */}


      <View style={styles.BottomContainer}>
       <View style={styles.BottomIputFields}>
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={styles.inputFieldsTilte}><FontAwesom name='envelope' size={20}/></Text>
          <TextInput  style={[styles.InputFIelds,{paddingHorizontal:20,flex:1}]} placeholder='Email' value={email
        } onChangeText={(val)=>setemail(val)} />
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={[styles.inputFieldsTilte,{}]}><FontAwesom name='lock' size={28}/></Text>
          <TextInput  style={[styles.InputFIelds,{flex:1,paddingHorizontal:20}]} placeholder='Password' secureTextEntry={isPasswordVisible} value={password} onChangeText={(val)=>setpassword(val)} />
          <TouchableOpacity onPress={()=>setisPasswordVisible(!isPasswordVisible? true:false)}>

          <FontAwesom name={isPasswordVisible?'eye':'eye-slash'} size={25}/>
          </TouchableOpacity>
        </View>
        {/*  */}
       </View>
       <View style={styles.BottomLoginButton}>

        <TouchableOpacity onPress={()=>verifyUser()}>
          <View style={styles.ContinueBTN}>

              <Text style={{fontWeight:'bold',fontSize:18,color:'white',borderRadius:10}}>Continue</Text>
          </View>
        </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

export default Login
const {height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'white',
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%'
    },
    TopContaienr:{
        flex:1,
      
        width:width,
        alignItems:'center',
        justifyContent:'space-around',
        padding:10
  
        
    },
    BottomContainer:{
        flex:2,
      
        justifyContent:'center',
        alignItems:'center',
        width:width,
        
    },
    TopConatainerImg:{
        flex:1,
        // alignItems:'center',
        justifyContent:'center'
    },
    BackbtnContainer:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:30,
        paddingVertical:10,
        alignItems:'center'
    },

    // Login Text Fields
   
    ContinueBTN:{
    width:width - 28,
    backgroundColor:'#E88A34',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:17,
    borderRadius:14
    
    },
    BottomLoginButton:{
        flex:1,
      
        

    },
    BottomIputFields:{
        flex:5,
    },
    InputFIelds:{
        fontSize:16,
        padding:10
    },
    InputFieldsContainer:{
        borderWidth:.7,
        width:width - 28,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:10
    },
    inputFieldsTilte:{
        fontSize:16,
        fontWeight:'bold'
        
    }

})