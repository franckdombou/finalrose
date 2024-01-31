import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import users from "../../assets/data/users"
import { FontAwesome5 } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
// import Carousel from 'react-native-reanimated-carousel';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useDerivedValue,
    useAnimatedGestureHandler,
    interpolate,
    withSpring,
    runOnJS,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
// import Like from '../assets/images/LIKE.png';
// import Nope from '../assets/images/nope.png';
//import img1 from "../assets/images/likes2.jpg"
const HEIGHT = Dimensions.get("screen").height
const WIDTH = Dimensions.get("screen").width
const im1 = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'

const tabImage = [
    {
        id: 1,
        image: require('../../assets/couple/fem1.jpeg'),
    },
    {
        image: require('../../assets/couple/fem2.jpeg'),
        id: 2
    },
    {
        image: require('../../assets/couple/fem3.jpeg'),
        id: 3
    },
    {
        image: require('../../assets/couple/fem4.jpeg'),
        id:4 
    },
    {
        image: require('../../assets/couple/rose.jpeg'),
        id: 0
    }
]

const ROTATION = 60;
const SWIPE_VELOCITY = 800;



const CartePhotoSearch = () => {
    const user = users[0]
    //const sharedValue = useSharedValue(2)
    const translateX = useSharedValue(0);

    const cardStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value
        }]
    }))

  const hiddenTranslateX = 2 * WIDTH;


    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
          //context.startX = translateX.value;
          console.log(context)
        },
        onActive: (event, context) => {
        //  translateX.value = context.startX + event.translationX;
        },
        onEnd: event => {
          
        },
      });

    const [current, setCurrent] = useState({ data: tabImage[0], index: 0 })
    // console.warn(sharedValue.value)

    const StatutWrapper = () => {

        return (
            <React.Fragment>
                <View style={styles.container}>
                    <View style={styles.statusTabContainer}>
                        {/*
                            tabImage.map((data, index) =>
                                <View key={index} style={[styles.statusTab, { marginHorizontal: 0.5,borderRadius:5, backgroundColor: index == current.index ? "#F63A6E" : "gray" }]}>
                                </View>
        )*/}
                    </View>

                    <View style={styles.imageContainer}>
                        <Image source={ current.data.image } style={styles.imageStyle} />
                        <View style={styles.statusTabContainer}>
                        {
                            tabImage.map((data, index) =>
                                <View key={index} style={[styles.statusTab, { marginHorizontal: 1.5,borderRadius:5, backgroundColor: index == current.index ? "#F63A6E" : "gray" }]}>
                                </View>
                            )}
                    </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    if (current.index === 0) { console.log(current) }
                    else setCurrent({
                        ...current,
                        index: current.index - 1,
                        data: tabImage[current.index - 1]
                    })
                }}
                    style={[styles.controller]}>
                    {/* <Text>LEFT</Text> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (current.index === tabImage.length - 1) { console.log(current) }
                    else setCurrent({
                        ...current,
                        index: current.index + 1,
                        data: tabImage[current.index + 1]
                    })
                }} style={[styles.controller, { right: 0, }]}>
                </TouchableOpacity>
            </React.Fragment>
        )
    }

    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[{ width: "100%", height: "100%" }, cardStyle]} >
                    <StatutWrapper />
                </Animated.View>
            </PanGestureHandler>

            <View style={{ height: 100, width: WIDTH * 0.9, position: "absolute", bottom: 150, alignSelf: "center", flexDirection: "column", justifyContent: "space-between" }}>

                <View style={{ height: 30, width: 100, backgroundColor: "rgba(147, 250, 165,0.5)", borderRadius: 30, flexDirection: "row", alignContent: "center", alignItems: "center", paddingLeft: 10 }}>
                    <EvilIcons name="location" size={13} color="white" />
                    <Text style={{ fontWeight: "bold", color: "#eee", textAlign: "center", fontSize: 10, marginLeft: 2 }}>A proximité</Text>
                </View>

                <View style={{ flexDirection: "row", }}>
                    <Text style={{ fontWeight: "bold", fontSize: 28, color: "#eee" }}>Franck Lionnel</Text>
                    <Text style={{ fontWeight: "500", fontSize: 28, color: "#eee", marginLeft: 5 }}>21</Text>
                </View>


                <View style={{ flexDirection: "row", }}>
                    <FontAwesome5 name="house-user" size={12} color="#eee" />
                    <Text style={{ fontWeight: "bold", color: "#eee", textAlign: "center", fontSize: 10, marginLeft: 2 }}>Vit à Yaoundé</Text>
                </View>
                <View style={{ flexDirection: "row", }}>
                    <EvilIcons name="location" size={13} color="white" />
                    <Text style={{ fontWeight: "bold", color: "#eee", textAlign: "center", fontSize: 10, marginLeft: 2 }}>A 1km</Text>
                </View>
            </View>

            <View style={{ height: 80, width: WIDTH * 0.8, position: "absolute", bottom: 40, alignSelf: "center", flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
  
                <TouchableOpacity style={{ height: 50, width: 50, borderWidth:1, borderRadius: 50, borderColor: "black", display:'flex', alignItems:'center', justifyContent:"center" }}>
                <Feather name="refresh-ccw"  size={30} color="black" style={{display:'flex', alignItems:'center', justifyContent:"center"}} />
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 50, width: 50, borderWidth:1, borderRadius: 50, borderColor: "red", display:'flex', alignItems:'center', justifyContent:"center" }}>
                <Entypo  name="cross" size={40} color="red" style={{display:'flex', alignItems:'center', justifyContent:"center"}} />
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 50, width: 50, borderWidth:2, borderRadius: 50, borderColor: "#32de84", display:'flex', alignItems:'center', justifyContent:"center" }}>
                <AntDesign name="heart"  size={30} color="#32de84" style={{display:'flex', alignItems:'center', justifyContent:"center"}} />
                </TouchableOpacity>

               
            </View>
        </View>
    )
}

export default CartePhotoSearch

const styles = StyleSheet.create({
    container: {
     //   flex: 1,
        backgroundColor: "transparent",
       // height:"60%"
    },
    image: {
        height: HEIGHT * 0.5,
        width: WIDTH * 0.9,
       // backgroundColor: "#fff",
       backgroundColor: "#F63A6E",
        alignSelf: "center",
        borderRadius: 15,
        //   resizeMode: "contain"
    },
    statusTab: {
        height: 3,
        backgroundColor: "gray",
        flex: 1,
        //  position: "absolute",
        //  top: 15,
        //  zIndex: 1

    },
    statusTabContainer: {
        marginTop: 10,
        flexDirection: "row",
        width: WIDTH * 0.9,
        alignSelf: "center",
        backgroundColor:"transparent",
        position:"absolute"
    },
    imageContainer: {
       // backgroundColor: "#ffff",
      //  flex: 1
      height:HEIGHT
    },
    imageStyle: {
        // width: WIDTH*0.9,
        //  height: HEIGHT / 1.2,
        maxHeight: HEIGHT / 1.2,
        height: HEIGHT * 0.75,
        width: WIDTH * 0.93,
       // position:"absolute",
       // bottom:100,
       // backgroundColor: "rgba(246, 58, 110,0.2)",
      //  backgroundColor: "#F63A6E",
        backgroundColor: "gray",
        alignSelf: "center",
        borderRadius: 10,
    },
    controller: {
        position: "absolute",
        width: WIDTH / 2,
        height: HEIGHT * 0.75,
        bottom: 0
    }
})


{/* <View style={{ backgroundColor: "red", height: 100, width: WIDTH * 0.9, position: "absolute", top: 0, alignSelf: "center", flexDirection: "column", justifyContent: "space-between" }}>
            </View> */}
{/* <FlatList data={user.image} renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />} /> */ }

{/* <Animated.View style={[{width:"100%",height:"100%"}]} >
                <Carousel
                    loop={false}
                    width={WIDTH * 0.97}
                    height={HEIGHT * 0.78}
                    style={{ alignSelf: "center" }}
                    autoPlay={false}
                    data={user.image}
                    //  scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ item, index }) => (
                        <React.Fragment>

                            <Image source={{ uri: item }} style={styles.image} />
                        </React.Fragment>
                    )}
                />
            </Animated.View> */}