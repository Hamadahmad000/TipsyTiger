import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesom from 'react-native-vector-icons/FontAwesome'
const PrivacyPolicy = () => {
  return (
    <View style={{height:'100%',width:'100%',padding:20}}>
      <TouchableOpacity style={styles.BackbtnContainer}>
           

           <FontAwesom name='chevron-left' size={18}/>
           <Text style={{fontSize:20,paddingHorizontal:8,marginBottom:3,color:'black'}}>Back</Text>
        
         </TouchableOpacity>
      <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
        <Text style={{fontSize:25,color:'black',marginBottom:15,fontWeight:'bold'}}>Term and Conditions</Text>
        {/*  */}
        <Text style={{fontSize:20,fontWeight:'500',marginBottom:25,color:'#E88A34'}}>1. Datenschutz auf einen Blick Allgemeine Hinweise</Text>
        <Text style={{fontSize:15,marginBottom:25,color:'black',lineHeight:25}}>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</Text>
        {/*  */}
        {/*  */}
        <Text style={{fontSize:20,fontWeight:'500',marginBottom:25,color:'#E88A34'}}>2. Datenschutz auf einen Blick Allgemeine Hinweise</Text>
        <Text style={{fontSize:15,marginBottom:25,color:'black',lineHeight:25}}>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</Text>
        {/*  */}
        </View>
    </View>
  )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    BackbtnContainer:{
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:0,
        paddingVertical:20,
        alignItems:'center'
    },
})