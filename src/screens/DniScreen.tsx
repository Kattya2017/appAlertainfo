import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, TextInput,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LogoComponent from '../components/LogoComponent';
import FondoComponent from '../components/FondoComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm } from '../hooks/useForm';
import alertainfoApi from '../api/alertainfoApi';
import { RootStackParams } from '../navigation/StackNavigator';
import { ResultDNI } from '../interfaces/dni.interface';


const {width, height} = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'DNI'>{};

const DniScreen = ({navigation}:Props) => {
  const {dni, onChange} = useForm({
    dni:'',
  });
  const validarDni=async()=>{
    try {
      if (dni==='') {
        return Alert.alert('Datos imcompletos','Porfavor complete el campo DNI para validar sus datos')
      }
      if(dni.length!==8){
        return Alert.alert('Datos incorrectos','Porfavor ingrese un dni valido de 8 digitos')
      }
      const resp = await alertainfoApi.get<ResultDNI>(`/dni/validar/${dni}`);
      console.log(resp.data);
      if (!resp.data.ok) {
        Alert.alert('No registrado',resp.data.msg)
      }else{
        navigation.navigate('Register',{dni:resp.data.resp.dni,apellido:resp.data.resp.apellido,nombre:resp.data.resp.nombre});
      }
    } catch (error:any) {
      console.log(error.errors);
      
    }
  }
  return (
    <View style={style.container2}>
      <FondoComponent/>
      <LogoComponent
        titulo='INFORMATICA SOS!'
        subtitulo='Ingrese DNI,  para validar sus datos'
      />

      <View style={style.containerGeneral2}>
        <View style={style.containerInput2}>
          <TextInput
            placeholder='Ingrese Dni'
            style={style.textInput2}
            placeholderTextColor={'#969FAA'}
            maxLength={8}
            keyboardType='numeric'
            onChangeText={(value)=>onChange(value,'dni')}
            value={dni}
          />
          <Icon
            name='card'
            color={'#004F79'}
            size={45}
            style={style.iconText2}
          />
        </View>
        <TouchableOpacity style={style.btnValidar} onPress={validarDni}>
          <Text style={style.textBtn2}>VALIDAR DNI</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DniScreen;

const style = StyleSheet.create({
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  containerGeneral2:{
    width,
    alignItems:'center'
  },
  containerInput2:{
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
  textInput2:{
    color:'#969FAA',
    width:'75%',
    left:60
  },
  iconText2:{
    position:'absolute',
    left:5
  },
  btnValidar:{
    backgroundColor:'#004F79',
    width:'85%',
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:10
  },
  textBtn2:{
    color:'#fff',
    fontFamily:'Montserrat-VariableFont_wght',
    fontWeight:'bold'
  }
})