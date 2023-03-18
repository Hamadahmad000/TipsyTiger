import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity, TextInput ,Alert} from 'react-native'
import React, { useState } from 'react'
import FontAwesom from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
const CreaeAccount2 = () => {
    const [isPasswordVisible, setisPasswordVisible] = useState(false)
    const [isPasswordVisible2, setisPasswordVisible2] = useState(false)
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [Phone, setPhone] = useState('')
    const navigation = useNavigation()
    const createAccount2 = async()=>{
      
      console.log('working');
        try {
            if(!Phone,!firstName,!lastName){
                Alert.alert('Warning','please fill all fields')
               }else{
                 const createAccount2 = {
                   userFirstName : firstName,
                   userLastName: lastName,
                   userPhone: Phone
                 }
                 await AsyncStorage.setItem('userDetails2',JSON.stringify(createAccount2))
                 navigation.navigate('Login')
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
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:20}}>
            <View  style={{ borderRadius:100,height:60,width:60,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(240, 53, 56,0.2)'}}>

            <FontAwesom name='user' color='#E88A34' size={30}/>
            </View>
           <View style={{marginHorizontal:20,alignItems:'flex-start'}}>
            <TouchableOpacity style={{backgroundColor:'black',paddingHorizontal:10,paddingVertical:4,borderRadius:8,marginVertical:5}}>
                <Text style={{color:'white'}}>Uplaod</Text>
            </TouchableOpacity>
            <Text>Only PNG and JPG Image are supported</Text>
           </View>
        </View>
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={styles.inputFieldsTilte}><FontAwesom name='user' size={24}/></Text>
          <TextInput  style={[styles.InputFIelds,{paddingHorizontal:20,flex:1}]} placeholder='First Name' value={firstName} onChangeText={(val)=>setfirstName(val)} />
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={[styles.inputFieldsTilte,{}]}><FontAwesom name='user' size={24}/></Text>
          <TextInput  style={[styles.InputFIelds,{flex:1,paddingHorizontal:20}]} placeholder='Last Name' secureTextEntry={isPasswordVisible} value={lastName} onChangeText={(val)=>setlastName(val)}/>
          
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.InputFieldsContainer}>
            <Text style={[styles.inputFieldsTilte,{}]}><FontAwesom name='phone' size={28}/></Text>
          <TextInput  style={[styles.InputFIelds,{flex:1,paddingHorizontal:20}]} placeholder='Mobile Phone' secureTextEntry={isPasswordVisible2} value={Phone} onChangeText={(val)=>setPhone(val)}/>
        
        </View>
        {/*  */}
       </View>
       <View style={styles.BottomLoginButton}>
       
        <TouchableOpacity onPress={()=>createAccount2()}>
          <View style={styles.ContinueBTN}>

              <Text style={{fontWeight:'bold',fontSize:18,color:'white',borderRadius:10}}>Continue</Text>
          </View>
        </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

export default CreaeAccount2
const {height,width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    MainContainer:{
      
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
        backgroundColor:'white',
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
        paddingHorizontal:13,
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
        marginVertical:10,
        borderColor:'black'
    },
    inputFieldsTilte:{
        fontSize:16,
        fontWeight:'bold'
        
    }

})