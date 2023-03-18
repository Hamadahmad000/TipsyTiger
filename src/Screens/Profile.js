import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect, useState} from 'react';
import CartIcon from '../../assets/Icons/icons8-shopping-cart-24.png';
import MessageIcon from '../../assets/Icons/icons8-messages-50.png';
import userLocationIcon from '../../assets/Icons/icons8-user-location-48.png';
import AlcoholeIcon from '../../assets/Icons/icons8-wine-bar-48.png';
import SnacksIcon from '../../assets/Icons/icons8-popcorn-48.png';
import CigaretteIcon from '../../assets/Icons/icons8-joint-48.png';
import HeartIcon from '../../assets/Icons/icons8-favorite-50.png';
import LovedIcon from '../../assets/Icons/loved.png';
import CardsData from '../Products/Products';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {StackActions, useNavigation} from '@react-navigation/native';
const Profile = () => {
  const [userName, setuserName] = useState('');
  const Categories = [
    {icon: AlcoholeIcon, Label: 'Alcohole'},
    {icon: SnacksIcon, Label: 'Snacks'},
    {icon: CigaretteIcon, Label: 'Cigarette'},
  ];
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      const user = await AsyncStorage.getItem('userDetails2');
      const realuser = JSON.parse(user);
      console.log(realuser);
      setuserName(realuser);
    }, 100);
  }, []);

  const [isLoved, setisLoved] = useState(false);
  const LogoutUser = ()=>{
   try {
    Alert.alert('Warning','Are you sure to logout ?',[
      {
        text:'Yes',
        onPress: async()=>{
          await AsyncStorage.clear()
          navigation.dispatch(StackActions.replace('Login'))
        }
      },
      {
        text:'No'
      }
    ])
   } catch (error) {
    console.log(error);
    
   }
  }
  return (
    <View style={styles.HomeMainContainer}>
      <StatusBar hidden={true} />
      <View>
        {/*  */}
        <View style={styles.TopDiv}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                }}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{height: 44, width: 44, borderRadius: 100}}
                />
              </View>
              <View style={{marginHorizontal: 3, alignItems: 'flex-start'}}>
                <Text style={{fontSize: 17, color: 'black'}}>Welcome 👋</Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>
                  {userName.userFirstName}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={()=>LogoutUser()}>

            <View style={{flexDirection: 'row',alignItems:'center'}}>
             <Text style={{fontSize:16,color:'red',paddingRight:8}}>Logout</Text>
             <Ionicons name='log-out-outline' size={30} color='red'/>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*  */}
      <ScrollView>
        <View style={styles.settingsContainer}>
          <Text style={{color:'black',fontSize:17}}>Settings</Text>
          <View style={styles.settings}>

                <TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>

              <FontAwesome name="user" size={25} color='black'/>
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>Account Settings</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
                </TouchableOpacity>
                <TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Ionicons name="location-outline" size={25} color='black'/>
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>Addresses</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
                </TouchableOpacity>
                <TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <FontAwesome name="credit-card" size={25} color='black'/>
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>Payments</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
                </TouchableOpacity>

          </View>
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.settingsContainer}>
          <Text style={{color:'black',fontSize:17}}>Help & Feedback</Text>
          <View style={styles.settings}>
          <TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Ionicons name="chatbox-ellipses-outline" size={25} color='black'/>
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>Customer Services</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Ionicons name="help-circle-outline" size={25} color='black'/>
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>FAQ</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
          </TouchableOpacity>

           

          </View>
        </View>
        {/*  */}
        {/*  */}
        <View style={styles.settingsContainer}>
          <Text style={{color:'black',fontSize:17}}>Legal</Text>
          <View style={styles.settings}>
          <TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
             
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>Privacy Policy</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
             
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>Term and Conditions</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
          </TouchableOpacity>

<TouchableOpacity>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
             
                <Text style={{fontSize:16,marginStart:10,color:'black'}}>Imprint</Text>
              </View>
              <FontAwesome name="chevron-right" size={20} color='black' />
            </View>
</TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');

export default Profile;

const styles = StyleSheet.create({
  HomeMainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  TopDiv: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  MessageIcon: {
    height: 30,
    width: 30,
    marginRight: 20,
  },
  CartIcon: {
    height: 30,
    width: 30,
  },
  settingsContainer: {
    
    padding: 20,
  },
  settings: {
    paddingVertical:10,
    backgroundColor:'#EAE6DF',
    paddingHorizontal:5,
    borderRadius:15,
    marginVertical:10
  },
});
