import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet,SafeAreaView,TextInput} from 'react-native'
import {
    useFonts,
    DMSans_400Regular,
  } from '@expo-google-fonts/dm-sans';
  import {
    SourceSansPro_600SemiBold
 } from '@expo-google-fonts/source-sans-pro';
export default function CreateAccount({navigation}) {
    let [fontsLoaded] = useFonts({
        DMSans_400Regular,
        SourceSansPro_600SemiBold
      });
  const [text, onChangeText] = React.useState();
  const [email, onChangeEmail] = React.useState();
  const [number, onChangeNumber] = React.useState();
  
        return (
            <View style={[styles.container, {
              
              flexDirection: "column"
            }]}>
              <View style={{ flex: 1}}>
                  
                  <Text style={{fontSize: '34px',textAlign:'center',fontWeight:'bold',fontFamily: 'DMSans_400Regular'}}>Create an account</Text>
                  <Text style={{fontSize: '17px',textAlign:'center',fontWeight:'600',color:'#707070',fontFamily:'SourceSansPro_600SemiBold'}}>Invest and double Your Income Now</Text>
              </View>
              <View style={{ flex: 2,alignItems:'center',justifyContent:'center'}}>
              <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Full Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email Address"
        keyboardType="Text"
      />
      <TextInput
      style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
    </SafeAreaView>
              <TouchableOpacity style={{width:'343px',height: '60px',borderRadius:'20px',backgroundColor:"#31a062",color:"white",textAlign:'center',paddingTop:'20px',fontFamily:'DM Sans',alignItems: 'center',fontWeight:'600',paddingRight:'.56%',fontFamily:'SourceSansPro_600SemiBold'}} onPress={() =>navigation.navigate('Home')} title="Create account">Create account</TouchableOpacity>
              <br />
              <Text style={{ textAlign:'center',fontSize:'17px',fontWeight:'600',color:"#31a062",fontFamily:'SourceSansPro_600SemiBold'}}>Already have an account?</Text>
              </View>
               
            </View>
          );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
        height: 60,
        width:343,
        margin: 12,
        borderWidth: 1,
        borderRadius:20,
        
        textAlign:'center',
      },
  });