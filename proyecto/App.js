import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert} from "react-native"
import imagenes from "./assets/buho.png";
import * as ImagePicker from 'expo-image-picker';
//importamos reac native para que sea androi

const App = () => {
// async sincronico
  let utilizarImagePicker = async () => {
    //primero llamo la biblioteca
    let permisoDelUsuario = await ImagePicker.requestMediaLibraryPermissionsAsync();//esto pide permiso para ingresar a la galeria de imagenes

    if (permisoDelUsuario.granted === false) {
       alert("Se requiere utilizar la camara del celular");
      return;
    };
  };


  return (
  <View style={styles.container}>
    <Text style={styles.title}> hello world </Text>
    <Image
      source={imagenes}
      style={styles.Image}
      />
    <TouchableOpacity 
    onPress={utilizarImagePicker}
    style={styles.button}
    >
     <Text style={styles.buttonTexto}>precioname</Text>
    </TouchableOpacity>
    
  </View>
  );
};

const styles =  StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems:"center", backgroundColor: "black"},
  title: { fontSize: 30, color: "white"},
  Image: {height: 150, width: 150, borderRadius: 90},
  button: {backgroundColor: "chocolate", width: 180, alignItems: "center", borderRadius: 90, margin: 10},
  buttonTexto: {fontSize: 20, fontWeight: "bold", fontStyle: "italic"}
});

export default App;













