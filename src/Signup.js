import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native'


import {
    useFonts,
    DMSans_400Regular,
  } from '@expo-google-fonts/dm-sans';
  import {
    SourceSansPro_600SemiBold
 } from '@expo-google-fonts/source-sans-pro';
  export default function Signup({navigation}) {
    let [fontsLoaded] = useFonts({
        DMSans_400Regular,
        SourceSansPro_600SemiBold
      });
    return (
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            <View style={{ flex: 1,alignItems:'center',justifyContent:'center',paddingTop:'50px'}}>
            <Image
            style={styles.tinyLogo}
        source={{
          uri: 'https://i.imgur.com/EH8V6i2.png',
        }}
      ></Image>
     
            </View>
            <View style={{ flex: 2,alignItems:'center',justifyContent:'center',paddingTop:'50px'}}>

                <Text style={{fontWeight:'bolder',textAlign:'center',fontSize:'34px',fontFamily:'DMSans_400Regular'}}>Stay on top of your finance with us</Text>
                <Text style={{textAlign:'center',fontSize:'17px',fontWeight:'600',color:'#A4A4A4',fontFamily:'SourceSansPro_600SemiBold'}}>We are your financial advisors to recommended the best investments for you</Text>
            </View>
            <View style={{ flex: 3,alignItems:'center',justifyContent:'center',paddingTop:'50px'}}>
            <TouchableOpacity style={{width:'343px',height: '60px',borderRadius:'20px',backgroundColor:"#31a062",color:"white",textAlign:'center',paddingTop:'20px',alignItems: 'center',fontWeight:'600',paddingRight:'.56%',fontFamily:'SourceSansPro_600SemiBold'}} onPress={() =>navigation.navigate('CreateAccount')} title="Create account">Create account</TouchableOpacity>
            <br></br>
            <Text style={{ textAlign:'center',fontSize:'17px',fontWeight:'600',color:"#31a062",fontFamily:'SourceSansPro_600SemiBold'}}>Login</Text>
            </View>
          </View>
    )
    
}   
const styles = StyleSheet.create({
    container: {
    
      padding: 20,
      
    },
    tinyLogo: {
        width: 300.1,
        height: 273.3
    }
  });