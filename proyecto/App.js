import React, {useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Alert, Share} from "react-native"
import imagenes from "./assets/buho.png";
import * as ImagePicker from 'expo-image-picker';
//importamos reac native para que sea androi

const App = () => {
  //---------------------------- seccionar una imagen---------------
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

// async sincronico
  let utilizarImagePicker = async () => {
    //primero llamo la biblioteca
    let permisoDelUsuario = await ImagePicker.requestMediaLibraryPermissionsAsync();//esto pide permiso para ingresar a la galeria de imagenes

    if (permisoDelUsuario.granted === false) {
       Alert.alert("Se requiere utilizar la camara del celular");
      return;
    };

    const accederBibliotecaImagen = await ImagePicker.launchImageLibraryAsync()//para acceder a la galeria del movil
    
    if (accederBibliotecaImagen.cancelled === true){
      return;
    }
    setImagenSeleccionada({localUri: accederBibliotecaImagen.uri})  

  };
//----------------------------------------------------------------

  return (
  <View style={styles.container}>
    <Text style={styles.title}> i'm Cristian! </Text>
    <Image
      source={{
        uri:
         imagenSeleccionada !== null ? imagenSeleccionada.localUri:
          'https://picsum.photos/200/300'}}
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
  container: { flex: 1, justifyContent: "center", alignItems:"center", backgroundColor: "#292929"},
  title: { fontSize: 30, color: "white"},
  Image: {height: 200, width: 200, borderRadius: 90, resizeMode: "contain"},//resizeMode: "contain" = hace que la imegne este abraque el espacio total
  button: {backgroundColor: "chocolate", width: 180, alignItems: "center", borderRadius: 90, margin: 10},
  buttonTexto: {fontSize: 20, fontWeight: "bold", fontStyle: "italic"}
});

export default App;













