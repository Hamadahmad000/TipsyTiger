import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const MyCarts = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.MainContainer}>
      <View style={styles.Backbtn}>
        <TouchableOpacity onPress={()=>navigation.navigate('TabNavigation')}>

        <FontAwesome name='chevron-left' size={30}/>
        </TouchableOpacity>
      </View>
      <View style={styles.CatsTitle}>
        <Text style={{fontSize:25,fontWeight:'500',color:'black'}}>My Cart</Text>
        <Text style={{fontSize:16,color:'black'}}>0 Itmes</Text>
      </View>

      <View style={styles.CartsContainer}>
        <View>
            <Ionicons name='cart-outline' size={50}/>
        </View>
        <View><Text style={{color:'black',fontSize:24,marginTop:25}}>Cart is empty</Text></View>
        <View><Text style={{color:'black',fontSize:14,marginTop:25,textAlign:'center',marginHorizontal:39}}>You don’t have any product in your cart.
Add anything you like</Text></View>
      </View>


      <View></View>
    </View>
  )
}

export default MyCarts

const styles = StyleSheet.create({
    MainContainer:{
     
        flex:1
    },
    Backbtn:{
        justifyContent:'center',
        alignItems:'flex-start',
        padding:20,
        marginTop:20

    },
    CatsTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        alignItems:'center'
    },
    CartsContainer:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
})