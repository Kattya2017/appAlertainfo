import React from 'react'
import { View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LogoComponent from '../components/LogoComponent';
import FondoComponent from '../components/FondoComponent';

const {width,height} = Dimensions.get('window');


const LoginScreen = () => {
  return (
    <View
      style={style.container}
    >
      <FondoComponent/>
      <LogoComponent
        titulo='INFORMATICA SOS!'
        subtitulo='Iniciar Sesión'
      />
      <View
        style={style.containeGeneral}
      >
        <View
          style={style.containerInput}
        >
          <TextInput
            placeholder='Ingrese DNI'
            style={style.textInput}
            placeholderTextColor={'#969FAA'}
            maxLength={8}
            keyboardType='numeric'
          />
          <Icon
            name='card'
            color={'#004F79'}
            size={45}
            style={style.iconText}
          />
        </View>
        <View
          style={style.containerInput}
        >
          <TextInput
            placeholder='Ingrese Contraseña'
            style={style.textInput}
            placeholderTextColor={'#969FAA'}
            secureTextEntry={true}
          />
          <Icon
            name='key-sharp'
            color={'#004F79'}
            size={45}
            style={style.iconText}
          />
          
        </View>
        <TouchableOpacity
            style={style.btnLogin}
          >
            <Text
              style={style.textBtn}
            >INICIAR SESION</Text>
          </TouchableOpacity>
        <TouchableOpacity
          style={style.btnLinkDni}
        >
          <Text style={style.textCuenta}>No tienes una cuenta? </Text>
          <Text style={style.textLink}>Registrate ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen;

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  containeGeneral:{
    width,
    alignItems:'center'
  },
  containerInput:{
    flexDirection:'row',
    alignItems:'center',
    width:'85%',
    borderRadius:10,
    borderColor:'#004F79',
    borderWidth:1.5,
    backgroundColor:'#fff',
    height:55,
    marginBottom:15
  },
  textInput:{
    color:'#969FAA',
    width:'75%',
    left:60
  },
  iconText:{
    position:'absolute',
    left:5
  },
  btnLogin:{
    backgroundColor:'#004F79',
    width:'85%',
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:10
  },
  textBtn:{
    color:'#fff',
    fontFamily:'Montserrat-VariableFont_wght',
    fontWeight:'bold'
  },
  btnLinkDni:{
    flexDirection:'row'
  },
  textCuenta:{
    color:'#89919C',
    fontFamily:'Montserrat-VariableFont_wght',
    fontWeight:'bold'
  },
  textLink:{
    color:'#004F79',
    fontFamily:'Montserrat-VariableFont_wght',
    fontWeight:'bold'
  }
})