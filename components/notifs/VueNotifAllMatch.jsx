import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native'
import React from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
const VueNotifAllMatch = ({ route, navigation,matches }) => {
   // const {matches}= route.params

    const tab = [11, 0, 1, 1, 1, 1, 1, 1]

    return (
        <View style={{ backgroundColor: "white" }}>
                <ScrollView>
            <View style={{ width: WIDTH, flexDirection: "row",flexWrap:"wrap",alignSelf:"center",alignItem:"center",justifyContent:"center" }}>
                {
                    tab.length==0 ? 
                    <View style={{flex:1}}>
                        <Text>pas de Like</Text>
                    </View>
                    :
                    tab.map((item, index) => (
                        <TouchableOpacity onPress={()=>console.log(matches)} key={index} style={{ width: WIDTH * 0.45, height: 250, backgroundColor: 'lightgray', margin: 5,borderRadius:10 }}>

                        </TouchableOpacity>
                    ))
                }

            </View>
            </ScrollView>
        </View>
    )
}

export default VueNotifAllMatch