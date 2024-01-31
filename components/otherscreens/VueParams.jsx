
import { Dimensions, SafeAreaView, StyleSheet, Text, View, TextInput, ActivityIndicator, TouchableOpacity, ScrollView, FlatList, Image, } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn, setSignOut } from '../../store/authSlice';
import { NavContext } from '../../App';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/compat/app'
import { storage } from '../../config';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Feather } from '@expo/vector-icons';
import { db } from '../../config';
import { doc, updateDoc } from 'firebase/firestore';
import CartePhotoSearch from './CartePhotoSearch';
import Modal from "react-native-modal";
import { LinearGradient } from 'expo-linear-gradient';
import Overview from './Overview';
import { Entypo } from '@expo/vector-icons';


const VueParams = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const nav = useNavigation()
  const [tabInteret, setTabInteret] = React.useState([])
  const { genre, dateNaissance, position, metier, ville, interet, email, phoneNumber, mdp, name, categorieRose, age, user, userData, setUserData } = useContext(NavContext)

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [tabImg, setTabImg] = useState([]);

  const [time, setTime] = useState(0);


  const [hasGalleriePermission, setHasGalleriePermission] = useState(null)
  const [changeImage, setChangeImage] = useState(false)

  //telecharger les donnee user

  const selectName1 = useSelector((state) => state.userAuth.name);
  const selectAge1 = useSelector((state) => state.userAuth.name);
  // const dispatch = useDispatch();








  //fin telecahrger les donnees user

  useEffect(() => {
    (async () => {
      const gallerieStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      setHasGalleriePermission(gallerieStatus.status === 'granted')
    })()
  }, [])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setChangeImage(true)

    if (!result.canceled) {
      setImage1(result.assets[0].uri);
    }
  };

  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setChangeImage(true)

    if (!result.canceled) {
      setImage2(result.assets[0].uri);
    }
  };
  const pickImage3 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setChangeImage(true)

    if (!result.canceled) {
      setImage3(result.assets[0].uri);
    }
  };

  const pickImage4 = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setChangeImage(true)

    if (!result.canceled) {
      setImage4(result.assets[0].uri);
    }
  };

  if (hasGalleriePermission === false) {
    return <Text>No access </Text>
  }

  const metadata = {
    contentType: 'image/jpeg'
  };


  const uploadImage = async (imageUri) => {
    const response = await fetch(imageUri)
    const blobFile = await response.blob()
    const reference = ref(storage, `image/${"pic" + uuidv4()}`)
    const uploadTask = uploadBytesResumable(reference, blobFile, metadata);
    const debutTemps = new Date();

    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        // Événement lorsque le téléversement est terminé
        if (snapshot.state === 'running') {
          const finTemps = new Date();
          // Temps écoulé en millisecondes
          const tempsEcoule = finTemps - debutTemps;
          console.log(`Le téléversement a pris ${tempsEcoule} millisecondes`);
          setTime(tempsEcoule)
        }

      }, (error) => {
        console.log("error", error)
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log('File available at', url);
          if (url === null) {
            tabImg[0] = 'null'
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          } else {
            tabImg[0] = url
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          }
        });
      }
    )
  }


  const uploadImage2 = async (imageUri) => {
    const response = await fetch(imageUri)
    const blobFile = await response.blob()
    const reference = ref(storage, `image/${"pic" + uuidv4()}`)
    const uploadTask = uploadBytesResumable(reference, blobFile, metadata);
    const debutTemps = new Date();

    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        // Événement lorsque le téléversement est terminé
        if (snapshot.state === 'running') {
          const finTemps = new Date();
          // Temps écoulé en millisecondes
          const tempsEcoule = finTemps - debutTemps;
          console.log(`Le téléversement a pris ${tempsEcoule} millisecondes`);
          setTime(tempsEcoule)
        }

      }, (error) => {
        console.log("error", error)
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log('File available at', url);
          if (url === null) {
            tabImg[1] = 'null'
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          } else {
            tabImg[1] = url
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          }
        });
      }
    )
  }

  const uploadImage3 = async (imageUri) => {
    const response = await fetch(imageUri)
    const blobFile = await response.blob()
    const reference = ref(storage, `image/${"pic" + uuidv4()}`)
    const uploadTask = uploadBytesResumable(reference, blobFile, metadata);
    const debutTemps = new Date();

    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        // Événement lorsque le téléversement est terminé
        if (snapshot.state === 'running') {
          const finTemps = new Date();
          // Temps écoulé en millisecondes
          const tempsEcoule = finTemps - debutTemps;
          console.log(`Le téléversement a pris ${tempsEcoule} millisecondes`);
          setTime(tempsEcoule)
        }

      }, (error) => {
        console.log("error", error)
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log('File available at', url);
          if (url === null) {
            tabImg[2] = 'null'
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          } else {
            tabImg[2] = url
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          }
        });
      }
    )
  }

  const uploadImage4 = async (imageUri) => {
    const response = await fetch(imageUri)
    const blobFile = await response.blob()
    const reference = ref(storage, `image/${"pic" + uuidv4()}`)
    const uploadTask = uploadBytesResumable(reference, blobFile, metadata);
    const debutTemps = new Date();

    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        // Événement lorsque le téléversement est terminé
        if (snapshot.state === 'running') {
          const finTemps = new Date();
          // Temps écoulé en millisecondes
          const tempsEcoule = finTemps - debutTemps;
          console.log(`Le téléversement a pris ${tempsEcoule} millisecondes`);
          setTime(tempsEcoule)
        }

      }, (error) => {
        console.log("error", error)
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log('File available at', url);
          if (url === null) {
            tabImg[3] = 'null'
            console.log("jhfdjhfjfdkjgkdf")
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          } else {
            tabImg[3] = url
            await updateDoc(doc(db, 'users', user.uid), {
              tabImg: tabImg
            })
              .then(() => {
                //nav.navigate('tabLayout')
                console.log("Url bien ajoutée")
              })
              .catch((error) => {
                alert(error.message)
              })
          }
        });
      }
    )
  }




  const suite = () => {

    const userL = {
      isLoggedIn: false,
      email: null,
      name: null, 
    };
    dispatch(setSignOut(userL))

  }

  const [isModalVisible, setModalVisible] = useState(false);


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
              <Text style={{margin:10,fontWeight:"bold"}}> {userData.name}</Text>
            </View>
          </View>
          <View></View>
          <SafeAreaView style={{flex:1}}>
            <Overview userImageTab={userData.tabImg} />
          </SafeAreaView>

      </LinearGradient>
           {/** HEADER */}
       
        </Modal>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        {/** header */}


        <View style={{ flexDirection: "column", backgroundColor: "white", height: "97%", position: "absolute", top: "5%", width: WIDTH * 0.8, paddingTop: 10 }}>

          <View style={{ flexDirection: "row", justifyContent: "space-between", width: WIDTH * 0.9 }}>
            <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 30 }}>Parametres</Text>
            <View style={{ width: 20 }}></View>

            <TouchableOpacity
            onPress={()=>setModalVisible(true)}
              style={{ position: "absolute", right: 0, bottom: 0 }}>
              <Text style={{ fontFamily: "bold", fontSize: 20, color: "#318CE7", bottom: 0 }}>overview</Text>
            </TouchableOpacity>
          </View>


          <View style={{ marginTop: 10, width: WIDTH, borderBottomWidth: 2, backgroundColor: "gray", borderColor: "lightgray" }}></View>
          <ScrollView style={{ width: WIDTH, }}>
            <View style={{ flexDirection: "column", width: WIDTH, backgroundColor: "white", margin: 5, marginBottom: 10 }}>
              <View style={{ flexDirection: "row", flexWrap: "nowrap", }}>

                <TouchableOpacity onPress={pickImage} style={{ backgroundColor: '#eee', height: 180, width: WIDTH / 3.3, borderWidth: 1, borderRadius: 10, borderColor: "lightgray", margin: 5 }}>
                  {userData.tabImg[0] && <Image source={{ uri: userData.tabImg[0] }} style={{ height: 180, width: WIDTH / 3.3, borderRadius: 10, }} />}
                  <FontAwesome style={{ position: "absolute", bottom: 0, right: 0 }} name="plus-circle" size={27} color="#F63A6E" />
                </TouchableOpacity>
                <TouchableOpacity onPress={pickImage2} style={{ backgroundColor: '#eee', height: 180, width: WIDTH / 3.3, borderWidth: 1, borderRadius: 10, borderColor: "lightgray", margin: 5 }}>
                {userData.tabImg[1] && <Image source={{ uri: userData.tabImg[1] }} style={{ height: 180, width: WIDTH / 3.3, borderRadius: 10, }} />}
                  <FontAwesome style={{ position: "absolute", bottom: 0, right: 0 }} name="plus-circle" size={27} color="#F63A6E" />
                </TouchableOpacity>
                <TouchableOpacity onPress={pickImage3} style={{ backgroundColor: '#eee', height: 180, width: WIDTH / 3.3, borderWidth: 1, borderRadius: 10, borderColor: "lightgray", margin: 5 }}>
                {userData.tabImg[2] && <Image source={{ uri: userData.tabImg[2] }} style={{ height: 180, width: WIDTH / 3.3, borderRadius: 10, }} />}
                  <FontAwesome style={{ position: "absolute", bottom: 0, right: 0 }} name="plus-circle" size={27} color="#F63A6E" />
                </TouchableOpacity>

              </View>
              <View style={{ flexDirection: "row", flexWrap: "nowrap", }}>

                <TouchableOpacity onPress={pickImage4} style={{ backgroundColor: '#eee', height: 180, width: WIDTH / 3.3, borderWidth: 1, borderRadius: 10, borderColor: "lightgray", margin: 5 }}>
                {userData.tabImg[3] && <Image source={{ uri: userData.tabImg[3] }} style={{ height: 180, width: WIDTH / 3.3, borderRadius: 10, }} />}
                  <FontAwesome style={{ position: "absolute", bottom: 0, right: 0 }} name="plus-circle" size={27} color="#F63A6E" />
                </TouchableOpacity>

              </View>
              <TouchableOpacity onPress={() => { console.log(userData) }} style={{ height: 50, width: "95%", backgroundColor: '#F63A6E', marginTop: 15, alignContent: "center", alignItems: "center", borderRadius: 10, }}>
                <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", color: "white", marginTop: 12, alignSelf: "center" }}>Ajouter Photos</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10, width: WIDTH, borderBottomWidth: 2, backgroundColor: "gray", borderColor: "lightgray" }}></View>

            <View style={{ width: WIDTH, backgroundColor: "white", flexDirection: 'column' }} >


              <View style={{ width: "95%", height: 50, borderWidth: 1, borderRadius: 10, borderColor: "lightgray", alignSelf: 'center', marginTop: 5, justifyContent: "center", flexDirection: "column" }}>
                <Text style={{ fontFamily: "bold", fontSize: 20, paddingLeft: 15 }}>{userData.name}, {userData.age}</Text>
                <Text style={{ fontFamily: "light", fontSize: 13, paddingLeft: 15, color: 'lightgray' }}>{userData.ville}</Text>
              </View>



              <View style={{ width: "95%", borderWidth: 1, borderRadius: 10, borderColor: "lightgray", alignSelf: 'center', marginTop: 5, justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ width: "90%", }}>
                  <Text style={{ fontFamily: "bold", fontSize: 20, paddingLeft: 15 }}>A propos de moi</Text>
                  <Text style={{ fontFamily: "light", fontSize: 13, paddingLeft: 15, color: 'lightgray' }}>En ajoutant ces informations, tu donnes plus de chances à ton potentiel match de commencer une discussion</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('params2')} style={{ alignSelf: "center" }}>
                  <Feather name="chevron-right" size={30} color="lightgray" />
                </TouchableOpacity>
              </View>

              <View style={{ width: "95%", borderWidth: 1, borderRadius: 10, borderColor: "lightgray", alignSelf: 'center', marginTop: 5, justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ width: "90%", }}>
                  <Text style={{ fontFamily: "bold", fontSize: 20, paddingLeft: 15 }}>Description</Text>
                  <Text style={{ fontFamily: "light", fontSize: 13, paddingLeft: 15, color: 'lightgray' }}>En ajoutant votre descriptions, tu donnes plus de chances à ton potentiel match de commencer une discussion</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('params3')} style={{ alignSelf: "center" }}>
                  <Feather name="chevron-right" size={30} color="lightgray" />
                </TouchableOpacity>
              </View>

              <View style={{ width: "95%", height: 300, marginBottom: 20, borderWidth: 1, borderRadius: 10, borderColor: "lightgray", alignSelf: 'center', marginTop: 5, justifyContent: "space-between", flexDirection: "row" }}>
              </View>

              <TouchableOpacity onPress={() => suite() } style={{ height: 50, width: "70%", backgroundColor: '#F63A6E', alignSelf: "center", marginTop: 50,marginBottom:50, alignContent: "center", alignItems: "center", borderRadius: 25,}}>
                <Text style={{ fontSize: 22, fontWeight: "bold", textAlign: "center", color: "white", marginTop: 12, alignSelf: "center" }}>Se deconnecter</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>


        </View>


      </SafeAreaView>

      <Modal1 />

    </SafeAreaView>
  )
}

export default VueParams

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