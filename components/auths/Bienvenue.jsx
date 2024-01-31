import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useContext } from 'react';
import { NavContext } from '../../App';
import * as Location from 'expo-location'



const Bienvenue = ({navigation, route}) => {
  const newLocal = "Cathegorie";

  const { location, setLocation, position, setPosition, userData} = useContext(NavContext)


  useEffect(() => {
    const getPermissions = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync()
        if( status !== 'granted' ){
            console.log('Please grant location permission')
            return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({})
        setLocation(currentLocation)
      //  console.log('Location:', currentLocation)
        setPosition([currentLocation.coords.longitude, currentLocation.coords.latitude])
    }
    getPermissions()
}, [])

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: "white" }}>
    <SafeAreaView style={{ flex:1, backgroundColor: "white" }}>
            {/** header */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: "white", height: "5%", position: "absolute", top: 0, width: WIDTH, paddingLeft: 13, paddingTop: 10 }}>
                <Entypo name="cross" size={35} color="gray" />
            </TouchableOpacity>

            <View style={{ alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "white", height: "95%", position: "absolute", top: "5%", width: WIDTH * 0.8, paddingLeft: 13, paddingTop: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>Bienvenue sur Spark.</Text>
                <Text style={{ fontWeight: "300", fontSize: 15,color:"gray",marginTop:7 }}>Svp, suis les règles de la maison.</Text>
                
                <Text style={{ fontWeight: "bold", fontSize: 15,color:"black",marginTop:25 }}>Sois toi-meme.</Text>
                <Text style={{ fontWeight: "300", fontSize: 15,color:"gray",marginTop:7 }}>Assure-toi que tes photos, ton age et ta biographie sont fidèles à ce que tu es.</Text>

                <Text style={{ fontWeight: "bold", fontSize: 15,color:"black",marginTop:25 }}>Sois prudent(e).</Text>
                <Text style={{ fontWeight: "300", fontSize: 15,color:"gray",marginTop:7 }}>Ne donne pas trop vite tes  renseignements personnels.</Text>
                
                <Text style={{ fontWeight: "bold", fontSize: 15,color:"black",marginTop:25 }}>Prends ça relaxe.</Text>
                <Text style={{ fontWeight: "300", fontSize: 15,color:"gray",marginTop:7 }}>Respecte les autres et traite-les comme tu aimerais qu'on te traite.</Text>

                <Text style={{ fontWeight: "bold", fontSize: 15,color:"black",marginTop:25 }}>Sois Proactif(ve).</Text>
                <Text style={{ fontWeight: "300", fontSize: 15,color:"gray",marginTop:7 }}>Signale toujours un mauvais comportement.</Text>

            
                <TouchableOpacity onPress={()=>navigation.navigate(newLocal)} style={{ height: 50, width: "70%", backgroundColor: '#F63A6E', alignSelf: "center",marginTop:100,alignContent:"center",alignItems:"center",borderRadius:25 }}>
                    <Text style={{fontSize:22,fontWeight:"bold",textAlign:"center",color:"white",marginTop:12,alignSelf:"center"}}>SUIVANT</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
        </SafeAreaView>
  )
}

export default Bienvenue

const styles = StyleSheet.create({})