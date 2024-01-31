import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavContext } from '../../App';

const Cathegorie = ({ navigation, route }) => {
    const [genre1, setGenre1] = React.useState("")
    const [validGenreF, setValidGenreF] = React.useState(false)
    const [validGenreH, setValidGenreH] = React.useState(false)
    const [validGenreA, setValidGenreA] = React.useState(false)
    const [validGenreB, setValidGenreB] = React.useState(false)
    const [validGenreC, setValidGenreC] = React.useState(false)
    const [validGenreD, setValidGenreD] = React.useState(false)
    const [validGenreE, setValidGenreE] = React.useState(false)
    const [validGenre, setValidGenre] = React.useState(false)
    const [recent, setRecent] = React.useState([])

    const { genre, setGenre, age,categorieRose, setCategorieRose, } = useContext(NavContext)

    function selectGenre(gr) {
    //    console.log(gr)
        setCategorieRose(gr)
        setValidGenre(true)
        if (gr === "A") {
            setValidGenreA(true)
            setValidGenreB(false)
            setValidGenreC(false)
            setValidGenreD(false)
            setValidGenreE(false)
            setValidGenreF(false)
        }
        if (gr === "B") {
            setValidGenreA(false)
            setValidGenreB(true)
            setValidGenreC(false)
            setValidGenreD(false)
            setValidGenreE(false)
            setValidGenreF(false)
        }
        if (gr === "C") {
            setValidGenreA(false)
            setValidGenreB(false)
            setValidGenreC(true)
            setValidGenreD(false)
            setValidGenreE(false)
            setValidGenreF(false)
        }
        if (gr === "D") {
            setValidGenreA(false)
            setValidGenreB(false)
            setValidGenreC(false)
            setValidGenreD(true)
            setValidGenreE(false)
            setValidGenreF(false)
        }
        if (gr === "E") {
            setValidGenreA(false)
            setValidGenreB(false)
            setValidGenreC(false)
            setValidGenreD(false)
            setValidGenreE(true)
            setValidGenreF(false)
        }
        if (gr === "F") {
            setValidGenreA(false)
            setValidGenreB(false)
            setValidGenreC(false)
            setValidGenreD(false)
            setValidGenreE(false)
            setValidGenreF(true)
        }

    }

    const newLocal = "Birthday";

    function suite() {
        navigation.navigate(newLocal)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                {/** header */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: "white", height: "5%", position: "absolute", top: 0, width: WIDTH, paddingLeft: 13, paddingTop: 10 }}>
                    <Ionicons name="ios-chevron-back" size={35} color="gray" />
                </TouchableOpacity>

                <View style={{ alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "white", height: "95%", position: "absolute", top: "5%", width: WIDTH * 0.8, paddingLeft: 13, paddingTop: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>Que recherches-tu? </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, flexWrap: "wrap" }}>
                        <TouchableOpacity onPress={() => selectGenre("A")} style={{ height: 100, borderWidth: 1, borderColor: "lightgray", borderRadius: 20, width: "30%", marginTop: 15, backgroundColor: validGenreA ? '#F63A6E' : "white", }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreA ? "white" : "gray" }}>❤</Text>
                            <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreA ? "white" : "gray" }}>Amour proche </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectGenre("B")} style={{ height: 100, borderWidth: 1, borderColor: "lightgray", borderRadius: 20, width: "30%", marginTop: 15, backgroundColor: validGenreB ? '#F63A6E' : "white", }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreB ? "white" : "gray" }}>💕</Text>
                            <Text style={{ fontSize: 13, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreB ? "white" : "gray" }}> Amour à distance </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectGenre("C")} style={{ height: 100, borderWidth: 1, borderColor: "lightgray", borderRadius: 20, width: "30%", marginTop: 15, backgroundColor: validGenreC ? '#F63A6E' : "white", }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreC ? "white" : "gray" }}>😘</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreC ? "white" : "gray" }}> Flirter </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectGenre("D")} style={{ height: 100, borderWidth: 1, borderColor: "lightgray", borderRadius: 20, width: "30%", marginTop: 15, backgroundColor: validGenreD ? '#F63A6E' : "white", }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreD ? "white" : "gray" }}>✌</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreD ? "white" : "gray" }}>Nouveaux Amis </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectGenre("E")} style={{ height: 100, borderWidth: 1, borderColor: "lightgray", borderRadius: 20, width: "30%", marginTop: 15, backgroundColor: validGenreE ? '#F63A6E' : "white", }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreE ? "white" : "gray" }}>💋 </Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreE ? "white" : "gray" }}>Du sexe </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => selectGenre("F")} style={{ height: 100, borderWidth: 1, borderColor: "lightgray", borderRadius: 20, width: "30%", marginTop: 15, backgroundColor: validGenreF ? '#F63A6E' : "white", }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreF ? "white" : "gray" }}>😶</Text>
                            <Text style={{ fontSize: 14, fontWeight: "bold", textAlign: "center", marginTop: 12, color: validGenreF ? "white" : "gray" }}>Discussion Anonyme </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => suite()} style={{ height: 50, width: "70%", backgroundColor: validGenre ? '#F63A6E' : "lightgray", alignSelf: "center", marginTop: 70, alignContent: "center", alignItems: "center", borderRadius: 25 }}>
                            <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", color: "white", marginTop: 12, alignSelf: "center" }}>SUIVANT</Text>
                        </TouchableOpacity>


                </View>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default Cathegorie

const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingLeft: 20,
        borderRadius: 50,
        borderColor: "lightgray",
        borderWidth: StyleSheet.hairlineWidth,
    },
})