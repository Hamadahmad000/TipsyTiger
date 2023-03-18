import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import FontAwesom from 'react-native-vector-icons/FontAwesome'
const Onboarding = () => {
    
  return (
    <View style={styles.MainContainer}>
      <View style={styles.TopContaienr}>
         
          <View style={styles.TopConatainerImg}>
          <Image source={{uri:'https://cdn.dribbble.com/users/230124/screenshots/15845834/media/23579acd689b449168527eaa5993f970.jpg?compress=1&resize=400x300'}} style={{height:150,width:150,borderRadius:10}}/>
          </View>

      </View>

      {/* Login Text Fields  */}


      <View style={styles.BottomContainer}>
       <View style={styles.BottomIputFields}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:25,color:'black',marginBottom:8}}>Getting started is easy!</Text>
        <Text style={{fontSize:16,marginBottom:25}}>Create your profile and join us</Text>
        </View>
       
        {/*  */}
        <TouchableOpacity style={{marginVertical:7}}>
          <View style={[styles.ContinueBTN,{backgroundColor:'rgba(207, 198, 198,0.4)',flexDirection:'row',justifyContent:'space-around'}]}>
              <FontAwesom name='google' size={30} color='red'/>
              <Text style={{fontSize:18,color:'black',borderRadius:10}}>Sign up with Google</Text>
              <View></View>
          </View>
        </TouchableOpacity>
        {/*  */}
        {/*  */}
        <TouchableOpacity style={{marginVertical:7}}>
          <View style={[styles.ContinueBTN,{backgroundColor:'rgba(207, 198, 198,0.4)',flexDirection:'row',justifyContent:'space-around'}]}>
              <FontAwesom name='facebook' size={30} color='blue'/>
              <Text style={{fontSize:18,color:'black',borderRadius:10}}>Sign up with Facebook</Text>
              <View></View>
          </View>
        </TouchableOpacity>
        {/*  */}
        {/*  */}
        <TouchableOpacity style={{marginVertical:7}}>
          <View style={[styles.ContinueBTN,{backgroundColor:'#01030f',flexDirection:'row',justifyContent:'space-around'}]}>
              <FontAwesom name='apple' size={30} color='white'/>
              <Text style={{fontSize:18,color:'white',borderRadius:10}}>Sign up with Google</Text>
              <View></View>
          </View>
        </TouchableOpacity>
        <View style={styles.LoginAlreadyAccount}>
       <Text style={{color:'black',fontSize:15}}>Already have and account? </Text>
        <TouchableOpacity>
          <Text style={{color:'#E88A34',fontWeight:'bold',textDecorationLine:'underline line-through'}}>Sign in</Text>
        </TouchableOpacity>
       </View>
        {/*  */}
       </View>
       <View style={styles.SignupButton}>
       <Text style={{color:'black'}}>Don't have and account? </Text>
        <TouchableOpacity>
          <Text style={{color:'#E88A34',fontWeight:'bold',textDecorationLine:'underline'}}>Sign up</Text>
        </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

export default Onboarding
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
        flex:4,
      
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
    SignupButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
      
        

    },
    LoginAlreadyAccount:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
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