import React, {useContext, useEffect} from 'react'
import { View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity, Keyboard, Alert } from 'react-native';

import LogoComponent from '../components/LogoComponent';
import FondoComponent from '../components/FondoComponent';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import AuthContext from '../context/AuthContext';

const {width,height} = Dimensions.get('window');
interface Props extends StackScreenProps<any, any>{};

const RegisterScreen = ({navigation}:Props) => {

  const {singUp, errorMessage, removeError} = useContext(AuthContext);
  

  const {nombre, apellido, dni, password, form, onChange} = useForm({
    nombre:'',
    apellido:'',
    dni:'',
    password:''
  });

  useEffect(()=>{
    if(errorMessage.length === 0) return;
    Alert.alert('Registro incorrecto', errorMessage, [{
      text: 'Ok',
      onPress: removeError
    }]);
  })

  const onLogin = () =>{
    console.log(nombre, apellido, dni, password);
    Keyboard.dismiss();
    singUp({
      nombre,
      apellido,
      password,
      dni
    });
  };

  return (
    <View style={style.container3}>
      <FondoComponent/>
      <LogoComponent
        titulo = 'INFORMATICA SOS!'
        subtitulo = 'Antes de registrarse verificar los datos'
      />
      <View style={style.containeGeneral3}>
        <View style={style.containerInput3}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder='Ingrese DNI'
            style={style.textInput3}
            placeholderTextColor={'#969FAA'}
            //editable={false}
          />
          <Icon
            name='card'
            color={'#004F79'}
            size={45}
            style={style.iconText3}
          />
        </View>
        <View style={style.containerInput3}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder='Ingrese nombre'
            style={style.textInput3}
            placeholderTextColor={'#969FAA'}
            //editable={false}
          />
          <Icon
            name='person'
            color={'#004F79'}
            size={45}
            style={style.iconText3}
          />
          </View>
          <View style={style.containerInput3}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder='Ingrese apellido'
              style={style.textInput3}
              placeholderTextColor={'#969FAA'}
              //editable={false}
            />
            <Icon
              name='person'
              color={'#004F79'}
              size={45}
              style={style.iconText3}
            />
          </View>
          <View style={style.containerInput3}>
            <TextInput
              placeholder='Ingrese contraseña'
              style={style.textInput3}
              placeholderTextColor={'#969FAA'}
              secureTextEntry={true}
            />
            <Icon
              name='lock-closed'
              color={'#004F79'}
              size={45}
              style={style.iconText3}
            />
          </View>
          <TouchableOpacity style={style.btnRegister}>
            <Text style={style.textBtn3}
            onPress={onLogin}
            >REGISTRARSE</Text>
          </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default RegisterScreen;

const style = StyleSheet.create({
  container3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  containeGeneral3:{
    width,
    alignItems:'center'
  },
  containerInput3:{
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
  textInput3:{
    color:'#969FAA',
    width:'75%',
    left:60
  },
  iconText3:{
    position:'absolute',
    left:5
  },
  btnRegister:{
    backgroundColor:'#004F79',
    width:'85%',
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:10
  },
  textBtn3:{
    color:'#fff',
    fontFamily:'Montserrat-VariableFont_wght',
    fontWeight:'bold'
  },
  btnLinkDni3:{
    flexDirection:'row'
  }
})