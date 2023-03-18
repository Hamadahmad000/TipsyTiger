import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesom from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native'
const CreaeAccount1 = () => {
    const [isPasswordVisible, setisPasswordVisible] = useState(false)
    const [isPasswordVisible2, setisPasswordVisible2] = useState(false)
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const navigation = useNavigation()
    const PostData1 = async ()=>{
    try {
    if(!email,!password,!cpassword){
     Alert.alert('Warning','please fill all fields')
    }else if(password !== cpassword){
    Alert.alert('warning','please enter both password same')
    }else{
      const createAccount1 = {
        userEmail : email,
        userPassword: password,
        usercPassword: cpassword
      }
      await AsyncStorage.setItem('userDetails1',JSON.stringify(createAccount1))
      navigation.navigate('signup2')
    }

    } catch (error) {
      console.log(error);
    }
    }
  return (
    <View style={styles.MainContainer}>
      <View style={styles.TopContaienr}>
          <TouchableOpacity style={styles.BackbtnContainer}>
           

            <FontAwesom name='chevron-left' size={18}/>
            <Text style={{fontSize:20,paddingHorizontal:8,marginBottom:3,color:'black'}}>Back</Text>
         
          </TouchableOpacity>
          {/* <View style={styles.TopConatainerImg}>
          <Image source={{uri:'https://cdn.dribbble.com/users/230124/screenshots/15845834/media/23579acd689b449168527eaa5993f970.jpg?compress=1&resize=400x300'}} style={{height:150,width:150,borderRadius:10}}/>
          </View> */}

      </View>

      {/* Login Text Fields  */}


      <View style={styles.BottomContainer}>
       <View style={styles.BottomIputFields}>
        <Text style={{fontSize:30,color:'black',marginBottom:20}}>Create Account</Text>
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={styles.inputFieldsTilte}><FontAwesom name='envelope' size={20}/></Text>
          <TextInput  style={[styles.InputFIelds,{paddingHorizontal:20}]} placeholder='Email' value={email} onChangeText={(val)=>setemail(val)} />
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={[styles.inputFieldsTilte,{}]}><FontAwesom name='lock' size={28}/></Text>
          <TextInput  style={[styles.InputFIelds,{flex:1,paddingHorizontal:20}]} placeholder='Password' secureTextEntry={isPasswordVisible} value={password} onChangeText={(val)=>setpassword(val)}/>
          <TouchableOpacity onPress={()=>setisPasswordVisible(!isPasswordVisible? true:false)}>

          <FontAwesom name={isPasswordVisible?'eye':'eye-slash'} size={25}/>
          </TouchableOpacity>
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={[styles.inputFieldsTilte,{}]}><FontAwesom name='lock' size={28}/></Text>
          <TextInput  style={[styles.InputFIelds,{flex:1,paddingHorizontal:20}]} placeholder='Repeat Password' secureTextEntry={isPasswordVisible2} value={cpassword} onChangeText={(val)=>setcpassword(val)}/>
          <TouchableOpacity onPress={()=>setisPasswordVisible2(!isPasswordVisible2? true:false)}>

          <FontAwesom name={isPasswordVisible2?'eye':'eye-slash'} size={25}/>
          </TouchableOpacity>
        </View>
        {/*  */}
       </View>
       <View style={styles.BottomLoginButton}>
        <View style={{alignItems:'center',paddingVertical:20}}>

            <Text style={{fontSize:15,color:'black'}}>By creating an account i accept</Text>
            <Text style={{fontSize:15,color:'#E88A34',textDecorationLine:'underline'}}>Term & Conditions</Text>
        </View>
        <TouchableOpacity onPress={()=>PostData1()}>
          <View style={styles.ContinueBTN}>

              <Text style={{fontWeight:'bold',fontSize:18,color:'white',borderRadius:10}}>Continue</Text>
          </View>
        </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

export default CreaeAccount1
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
        flex:7,
      
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
        justifyContent:'center',
        alignItems:'center'
      
        

    },
    BottomIputFields:{
        flex:3,
    },
    InputFIelds:{
        fontSize:16,
        padding:10,
        flex:1
    },
    InputFieldsContainer:{
        borderWidth:.7,
        width:width - 28,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:10,
        borderColor:'black'
    },
    inputFieldsTilte:{
        fontSize:16,
        fontWeight:'bold'
        
    }

})