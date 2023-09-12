import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import FondoComponent from '../components/FondoComponent';


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

const MiperfilScreen = ({ navigation }: Props) => {

  return (
    <View style={style.container}>
      <FondoComponent />
      <View style={style.containerGeneral}>
        <View style={style.imagenPerfil}>
          <View style={style.containerImage}>
            <Image
              style={style.imagenLogo}
              source={require('../assets/img/mi-perfil.png')} />
          </View>
          <Text style={style.textSubtTitulo}>Actualizar mis Datos</Text>
        </View>

        <View style={style.containerInput}>
          <TextInput
            placeholder='Ingrese Contraseña'
            style={style.textInput}
            placeholderTextColor={'#969FAA'}
            secureTextEntry={true} />
        </View>

        <TouchableOpacity style={style.btnLogin}>
          <Text style={style.textBtn}>ACTUALIZAR</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}


export default MiperfilScreen;



const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerGeneral: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
    borderColor: '#004F79',
    backgroundColor: '#fff',
    borderWidth: 3,
    alignItems: 'center'
  },
  imagenPerfil: {
    marginTop: 20,
    height: (height * 35) / 100,
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImage: {
    width: '50%',
    height: '65%',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderRadius: 100,
    borderColor: '#004F79',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagenLogo: {
    width: '88%',
    height: '92%',
    borderWidth: 1,
  },
  textSubtTitulo: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#004F79',
    marginTop: 10,
    fontSize: 16,
    marginBottom: 20
  },
  containerInput: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '85%',
    borderRadius: 10,
    borderColor: '#004F79',
    borderWidth: 1.5,
    backgroundColor: '#fff',
    height: 55,
    marginBottom: 15
  },
  textInput: {
    color: '#969FAA',
    width: '75%',
    left: 60
  },
  btnLogin: {
    backgroundColor: '#004F79',
    width: '85%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  textBtn: {
    color: '#fff',
    fontFamily: 'Montserrat-VariableFont_wght',
    fontWeight: 'bold',
  },
});