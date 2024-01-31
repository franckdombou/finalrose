import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native'
import React, { useContext } from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
import { NavContext } from '../../App';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';
// const tab = [1, 11, 1, 1, , 1, 1, 1]

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Feather } from '@expo/vector-icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';



const loginSchema = Yup.object().shape({
    username: Yup.string().required('le nom est obligatoire!'),
    ville: Yup.string().required('la ville est obligatoire!'),
    metier: Yup.string().required('le metier est obligatoire!'),
    // password: Yup.string().min(5, ({ min }) => `Au moins ${min} caractères`).required('Mot de pass obligatoire!')
});

import { db } from '../../config';
import { doc, setDoc } from 'firebase/firestore';


const VueParams2 = ({ navigation, route }) => {
    const [show, setShow] = useState(false);

    const { dateNaissance, setDateNaissance, age, setAge, user, setUser, phoneNumber, setPhoneNumber, metier, setMetier, ville, setVille, name, setName, userData, setUserData } = useContext(NavContext)
    const [emailAttribue, setEmailAttribue] = useState(false);


    const suite = (values) => {
        setName(values.username)
        setMetier(values.metier)
        setVille(values.ville)
        console.log('object', dateNaissance)
        setDoc(doc(db, 'users', user.uid), {
            id: user.uid,
            email: user.email,
            phoneNumber: phoneNumber,
            dateNaissance: dateNaissance,
            name: values.username,
            metier: values.metier,
            ville: values.ville,
            age: age
        })
            .then(() => {
                navigation.navigate('Genre')
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    //-------------------------------------------------

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateBirt, setDateBirt] = useState('')

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; // Les mois commencent à 0, donc ajoutez 1
        const year = date.getFullYear();
        setAge(2023 - date.getFullYear())
        const formattedDate = `${day}:${month}:${year}`;
        setDateNaissance(formattedDate)
        //  console.warn("A date has been picked: ", dateBirt);
        hideDatePicker();
    };

    return (
        <Formik
            initialValues={{ username: '', ville: '', metier: '' }}
            validateOnMount={true}
            //  onSubmit={values => console.log(values)}
            validationSchema={loginSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
                        {/** header */}
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: "white", height: "5%", position: "absolute", top: 0, width: WIDTH, paddingLeft: 13, paddingTop: 10 }}>
                            <Ionicons name="ios-chevron-back" size={35} color="gray" />
                        </TouchableOpacity>


                        <View style={{ alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "white", height: "95%", position: "absolute", top: "5%", width: WIDTH * 0.8, paddingLeft: 13, paddingTop: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: "bold", fontSize: 14 }}>A propos de moi</Text>
                                <TouchableOpacity>
                                    <Text style={{ fontFamily: "bold", fontSize: 14, color: "#318CE7" }}>Valider</Text>
                                </TouchableOpacity>
                            </View>

                            <SafeAreaView style={{ backgroundColor: "white" }}>


                                {/** header */}

                                <ScrollView showsVerticalScrollIndicator={false} style={{ flexDirection: "column", marginTop: 10, marginBottom: 1, }}>

                                    <View style={{ marginBottom: 10, }}>
                                        
                                        <FloatingLabelInput
                                            label={userData.name}
                                            labelStyles={{ alignSelf: 'center', paddingTop: 20, color: "#000", paddingBottom: 8 }}
                                            // isPassword
                                            keyboardType='email-address'
                                            togglePassword={show}
                                            containerStyles={{ borderBottomColor: "gray", borderBottomWidth: 2, height: 60, borderRadius: 20, alignContent: "center", padding: 10, }}

                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                            value={values.username}
                                        // style={{borderTopColor:'#F63A6E'}}
                                        />
                                        {touched.username && errors.username && <Text style={{ color: 'red', fontSize: 10, fontFamily: "regular" }}>{errors.username}</Text>}
                                        <Text></Text>

                                    </View>

                                    <View style={{ marginBottom: 10, }}>
                                        <FloatingLabelInput
                                            label={userData.ville}
                                            labelStyles={{ alignSelf: 'center', paddingTop: 20, color: "#000", paddingBottom: 8 }}
                                            // isPassword
                                            keyboardType='email-address'
                                            togglePassword={show}
                                            containerStyles={{ borderBottomColor: "gray", borderBottomWidth: 2, height: 60, borderRadius: 20, alignContent: "center", padding: 10, }}

                                            onChangeText={handleChange('ville')}
                                            onBlur={handleBlur('ville')}
                                            value={values.ville}
                                        // style={{borderTopColor:'#F63A6E'}}
                                        />
                                        {touched.ville && errors.ville && <Text style={{ color: 'red', fontSize: 10, fontFamily: "regular" }}>{errors.ville}</Text>}
                                        <Text></Text>

                                    </View>

                                    <View style={{ marginBottom: 10, }}>
                                        <FloatingLabelInput
                                            label={userData.metier}
                                            labelStyles={{ alignSelf: 'center', paddingTop: 20, color: "#000", paddingBottom: 8 }}
                                            // isPassword
                                            keyboardType='email-address'
                                            togglePassword={show}
                                            containerStyles={{ borderBottomColor: "gray", borderBottomWidth: 2, height: 60, borderRadius: 20, alignContent: "center", padding: 10, }}

                                            onChangeText={handleChange('metier')}
                                            onBlur={handleBlur('metier')}
                                            value={values.metier}
                                        // style={{borderTopColor:'#F63A6E'}}
                                        />
                                        {touched.metier && errors.metier && <Text style={{ color: 'red', fontSize: 10, fontFamily: "regular" }}>{errors.metier}</Text>}
                                        <Text></Text>

                                    </View>                                    

                                    <View style={{ borderBottomColor: "gray", borderBottomWidth: 2, height: 60, borderRadius: 20, alignContent: "center", padding: 10, marginBottom: 10 }}>
                                        <Text style={{ fontWeight: "300", fontSize: 15, marginTop: "auto", fontFamily: "bold" }}>{userData.age} ans</Text>
                                    </View>


                                    <View style={{ height: 50, width: WIDTH }}></View>


                                </ScrollView>

                            </SafeAreaView>





                        </View>
                    </SafeAreaView>
                </SafeAreaView>
            )}
        </Formik>
    )
}

export default VueParams2

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
    shadow: {
        shadowOffset: { width: 1, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 15
    }
})