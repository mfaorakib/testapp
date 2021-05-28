import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import {
    useFonts,
    DMSans_400Regular
  } from '@expo-google-fonts/dm-sans';
 import {
    SourceSansPro_600SemiBold
 } from '@expo-google-fonts/source-sans-pro';
export default function Home() {
    let [fontsLoaded] = useFonts({
        DMSans_400Regular,
        SourceSansPro_600SemiBold
      });
     

  
    return (
        <View style={[styles.container, {
             
            flexDirection: "column"
          }]}>
            <View style={{ flex: 1,paddingTop:'50px'}}>
                <Text style={{textAlign:'left',fontWeight:'bold',fontSize:'34px',  
            fontFamily: 'DMSans_400Regular',}}>WellCome, Jessie</Text>
                <br />
                <View style={{ backgroundColor:'#31A078', borderRadius:'20px'}}>
                    <Text style={{ textAlign:'left',fontSize:'17px',fontWeight:'600',color:"white",paddingLeft:'4%',fontFamily:'SourceSansPro_600SemiBold'}}>Your total asset portfolio</Text>
                    <View style={[styles.container3, {
             
             flexDirection: "row"
           }]}>
                   <View style={{justifyContent:'flex-start',width:'50%'}}>
                   <Text style={{textAlign:'left',fontSize:'34px',fontWeight:'600',color:"white",paddingLeft:'8%',fontFamily:'SourceSansPro_600SemiBold'}}>N203,935</Text>
                   </View>
                   <View style={{justifyContent:'flex-end',paddingLeft:'10%',paddingBottom:'5%',width:'50%'}}>
                   <TouchableOpacity style={{width:'125px',height: '40px',borderRadius:'20px',backgroundColor:"white",color:"#31A078",  fontFamily: 'DMSans_400Regular',textAlign:'center',paddingTop: '15px',fontFamily:'DM Sans',alignItems: 'center',fontWeight:'600',paddingRight:'.56%',fontFamily:'SourceSansPro_600SemiBold'}} title="Invest Now">Invest Now</TouchableOpacity>
                   </View>
                   
           </View>
                    
                    
                </View>
            </View>
            <View style={{flex: 2, alignItems:'left',justifyContent:'center', marginTop:'50px'}}>
                <Text style={{textAlign:'left',fontSize:'34px',marginTop:'25%',fontWeight:'bold'}}>Best Plans</Text>
                
                <br />
                <View style={[styles.container2, {
       
      flexDirection: "row"
    }]}>
        
      <Image style={styles.tinyLogo} source={{uri: 'https://i.imgur.com/nw0Wsxa.png',}}>
      </Image>
      <Image style={styles.tinyLogo2} source={{uri: 'https://i.imgur.com/pGU6x4R.png',}}></Image>
      <Image style={styles.tinyLogo3} source={{uri: 'https://i.imgur.com/tmjBOIi.png',}}></Image> 
    </View>
            
            </View>
            <View style={{ flex: 3}}>
                <Text style={{color:'black', fontWeight:'bold',fontSize:'34px', fontFamily: 'DMSans_400Regular'}}>Investment Guide</Text>
                 <Text style={{color:'#B7B7B9',fontSize:'14px',fontFamily:'SourceSansPro_600SemiBold'}}> <Image style={styles.tiny} source={{uri: 'https://i.imgur.com/g0HpoyK.png',}}></Image>
                 <Text style={{color:'#B7B7B9',fontSize:'18px',fontFamily:'SourceSansPro_600SemiBold'}}>Basic type of investments</Text><br />
                 This is how you set your foot for 2020 Stock market recession. What’s next...</Text>
            </View>
            <View style={{ flex: 4}}>
            <Text style={{color:'#B7B7B9',fontSize:'18px',fontFamily:'SourceSansPro_600SemiBold'}}>How much can you start wit..</Text>
                 <Text style={{color:'#B7B7B9',fontSize:'184x',fontFamily:'SourceSansPro_600SemiBold'}}> <Image style={styles.tiny} source={{uri: 'https://i.imgur.com/kSlbM2y.png',}}></Image>
                 What do you like to see? It’s a very different market from 2018. The way...</Text>
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    tinyLogo:{
        width:  134,
        height: 170
    },
    tinyLogo3:{
        width:  67,
        height: 170,
        backgroundColor: '#CAC9C9'
    },
    tinyLogo2:{
        width:  134,
        height: 170,
        backgroundColor:'#CAC9C9',
        borderRadius:20
    },
    container2:{
       
        textAlign: 'center',
        justifyContent:'space-between'
    },
    tiny:{
     alignItems:'flex-end',
     width: 61,
     height: 61
    }
  });