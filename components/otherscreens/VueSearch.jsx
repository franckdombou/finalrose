import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
import { Entypo } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { LinearGradient } from 'expo-linear-gradient';
import CartePhotoSearch from './CartePhotoSearch';



// const couple = "../assets/couple/couple1.avif"
// const friends = "../assets/couple/friends.jpg"
const tab = [
  {
    id: 0,
    text: "Looking for Love",
    image: require("../../assets/couple/couple1.avif")
  },
  {
    id: 1,
    text: "Free Night",
    image: require("../../assets/couple/clubnight.jpg")
  },
  {
    id: 2,
    text: "Coffee",
    image: require("../../assets/couple/coffee2.jpg")
  },
  {
    id: 3,
    text: "Let's be Friends",
    image: require("../../assets/couple/friends.jpg")
  },
  {
    id: 4,
    text: "Binge Watchers",
    image: require("../../assets/couple/cine.jpeg")
  },
  {
    id: 5,
    text: "Sporty",
    image: require("../../assets/couple/sporty.jpeg")
  },
  {
    id: 6,
    text: "Gamers",
    image: require("../../assets/couple/gamers.jpeg")
  },
  {
    id: 7,
    text: "Yoga",
    image: require("../../assets/couple/yoga.jpeg")
  },
  {
    id: 8,
    text: "Travel",
    image: require("../../assets/couple/travel.jpeg")
  },
  {
    id: 9,
    text: "Date Night",
    image: require("../../assets/couple/datenights.jpeg")
  },
  {
    id: 10,
    text: "Skincares",
    image: require("../../assets/couple/skincares.jpeg")
  },
  {
    id: 11,
    text: "Self Care",
    image: require("../../assets/couple/selfCares.jpeg")
  },
  {
    id: 12,
    text: "Foodies",
    image: require("../../assets/couple/foods.jpeg")
  },
]
const VueSearch = () => {



  const [isModalVisible, setModalVisible] = useState(false);
  const [tableauModal1,setTableauModal1]=useState([""])
  const [nomRubrique,setNomRubrique]=useState("rubrique")
  
  function VoirModal1(){
   // setTableauModal1(tableauRubrique1)
  //  setNomRubrique(nomRubrique1)
    setModalVisible(!isModalVisible)
  }

  const Modal1 = ()=>{
    return(
      <Modal isVisible={isModalVisible}>
  
      <LinearGradient
         style={{ height: HEIGHT,width:WIDTH,alignSelf:"center" }}
        colors={['#4c669f', '#F41E59', '#F63A6E']}
        >
          <SafeAreaView></SafeAreaView>
          <View style={{height:"10%",backgroundColor:"transparent",flexDirection:"row",marginTop:20,width:WIDTH,alignSelf:"center",alignItems:"center"}}>
          <Entypo onPress={() => setModalVisible(!isModalVisible)} name="cross" size={25} color="gray" style={{ alignItems: 'center', justifyContent: "center", paddingTop: 1, marginLeft: 10, backgroundColor: "transparent", }} />
            <View style={{width:"auto",height:35,backgroundColor:"white",alignSelf:"center",borderRadius:20,marginLeft:"25%"}}>
              <Text style={{margin:10,fontWeight:"bold"}}>Looking for Love</Text>
            </View>
          </View>
          <View></View>
          <SafeAreaView style={{flex:1}}>
            <CartePhotoSearch />
          </SafeAreaView>

      </LinearGradient>
           {/** HEADER */}
       
        </Modal>
    )
  }



  return (
    <ScrollView>

      {/* <View style={{width:WIDTH*0.95,height:HEIGHT*0.3,backgroundColor:"gray",margin:10,alignSelf:"center",borderRadius:10}}>
          <Image source={require('../../assets/couple/rose.jpeg')} style={{width:WIDTH*0.95,height:HEIGHT*0.3,backgroundColor:"gray",borderRadius:10}} />
      </View> */}

      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>Welcome to Explore</Text>
        <Text style={{ fontWeight: "bold", fontSize: 12, paddingLeft: 15, color: "gray" }}>My Vibe...</Text>
        <View style={{ height: "auto", width: WIDTH, flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
          {
            tab.slice(0,4).map((value, index) => (
              <TouchableOpacity key={index} style={{ height: HEIGHT * 0.26, width: "45%", backgroundColor: "gray", margin: 5, borderRadius: 8 }}>
                <Image source={value.image} style={{ width: "100%", height: "100%", borderRadius: 8 }} />
                <Text style={{ fontSize: 35, color: "white", fontWeight: "600", position: "absolute", textAlign: "center", marginTop: "45%" }}>{value.text}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 15 }}>For You</Text>
        <Text style={{ fontWeight: "bold", fontSize: 12, paddingLeft: 15, color: "gray" }}>Recommendations based on your profile</Text>
        <View style={{ height: "auto", width: WIDTH, flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
          {
            tab.slice(4,13).map((value, index) => (
              <TouchableOpacity onPress={()=>VoirModal1()} key={index} style={{ height: HEIGHT * 0.26, width: "45%", backgroundColor: "gray", margin: 5, borderRadius: 8 }}>
                <Image source={value.image} style={{ width: "100%", height: "100%", borderRadius: 8 }} />
                <Text style={{ fontSize: 35, color: "black", fontWeight: "600", position: "absolute", textAlign: "center", marginTop: "45%" }}>{value.text}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>

      <Modal1 />

    </ScrollView>
  )
}

export default VueSearch

const styles = StyleSheet.create({})