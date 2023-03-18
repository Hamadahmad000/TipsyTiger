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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';
import CartIcon from '../../assets/Icons/icons8-shopping-cart-24.png';
import MessageIcon from '../../assets/Icons/icons8-messages-50.png';
import userLocationIcon from '../../assets/Icons/icons8-user-location-48.png';
import AlcoholeIcon from '../../assets/Icons/icons8-wine-bar-48.png';
import SnacksIcon from '../../assets/Icons/icons8-popcorn-48.png';
import CigaretteIcon from '../../assets/Icons/icons8-joint-48.png';
import HeartIcon from '../../assets/Icons/icons8-favorite-50.png';
import LovedIcon from '../../assets/Icons/loved.png';
import CardsData from '../Products/Products'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const [userName, setuserName] = useState('')
  const Categories = [
    {icon: AlcoholeIcon, Label: 'Alcohole'},
    {icon: SnacksIcon, Label: 'Snacks'},
    {icon: CigaretteIcon, Label: 'Cigarette'},
  ];
  const navigation = useNavigation()
  
  useEffect( () => {
   setTimeout(async() => {
    const user = await AsyncStorage.getItem('userDetails2')
    const realuser = JSON.parse(user)
    console.log(realuser)
    setuserName(realuser)
   },100);
  }, [])
  
  
  
  const [isLoved, setisLoved] = useState(false);
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image
                  source={MessageIcon}
                  color="black"
                  style={styles.MessageIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('carts')}>
                <Image
                  source={CartIcon}
                  color="black"
                  style={styles.CartIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/*  */}
      <ScrollView>
        <View style={styles.LocationDiv}>
          <Image
            source={userLocationIcon}
            style={{height: 34, width: 34, marginRight: 10}}
          />
          <TextInput
            style={{color: 'black', fontSize: 14}}
            placeholder="Select Address"
          />
        </View>
        {/*  */}
        <View style={styles.CategoriesAndOther}>
          <Text style={{fontWeight: '500', fontSize: 22, color: 'black'}}>
            Categories
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                color: 'black',
                marginHorizontal: 10,
              }}>
              See all
            </Text>
            <FontAwesome name="angle-right" size={30} color="black" />
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.CategoriesOptions}>
          <FlatList
            data={Categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',

                      alignItems: 'center',
                      borderWidth: 0.2,
                      padding: 12,
                      width: 150,
                      borderRadius: 10,
                      marginHorizontal: 10,
                    }}>
                    <Image
                      source={item.icon}
                      style={{height: 30, width: 30, marginHorizontal: 5}}
                    />
                    <Text style={{fontSize: 16}}>{item.Label}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/*  */}
        <View style={styles.TopProductTitle}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: '500'}}>
            Top Products
          </Text>
        </View>
        {/*  */}

        <View style={styles.ProductsCards}>
          {/*  */}

          {CardsData.map((ls, ind) => {
            return (
              <View
                style={{
                  padding: 10,
                  borderRadius: 15,
                  backgroundColor: 'rgba(148, 153, 151,0.2)',
                  marginHorizontal: 10,
                  width:'40%',
                  marginVertical: 10,
                  shadowColor: 'black',
                  shadowOpacity: 0.2,  
                  shadowRadius: 5,  
                  shadowOffset: {width: 1, height: 1}, 
                  
                 
                }}
                key={ind}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                      {ls.Title}
                    </Text>
                    <Text>{ls.Product}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setisLoved(isLoved ? false : true)}>
                    <Image
                      source={!isLoved ? HeartIcon : LovedIcon}
                      style={{height: 35, width: 35, marginStart: 10}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image
                    source={{
                      uri: ls.Image,
                    }}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 90,
                      marginVertical: 10,
                    }}
                  />
                </View>
                {/*  */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{paddingRight: 5, color: 'black', fontSize: 20}}>
                      $
                    </Text>
                    <Text style={{color: 'black', fontSize: 18}}>
                      {ls.Price}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      borderRadius: 50,
                      backgroundColor: '#E88A34',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                    }}>
                    <Text style={{fontSize: 20, color: 'white'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

          {/*  */}

          {/*  */}
        </View>
      </ScrollView>

      {/*  */}
    </View>
  );
};

const {height, width} = Dimensions.get('screen');

export default Home;

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
  LocationDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    marginHorizontal: 20,
    paddingHorizontal: 5,

    borderRadius: 7,
  },
  CategoriesAndOther: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginVertical: 20,
  },
  CategoriesOptions: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 4,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TopProductTitle: {
    marginHorizontal: 15,
    marginVertical: 2,
    padding: 10,
  },
  ProductsCards: {
    // marginHorizontal: 15,
    // marginVertical: 2,
    // padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // backgroundColor:'red'
  },
});
