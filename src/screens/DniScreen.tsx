import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LogoComponent from '../components/LogoComponent';
import FondoComponent from '../components/FondoComponent';
import { StackScreenProps } from '@react-navigation/stack';


const {width, height} = Dimensions.get('window');
interface Props extends StackScreenProps<any, any>{};

const DniScreen = ({navigation}:Props) => {
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
          />
          <Icon
            name='card'
            color={'#004F79'}
            size={45}
            style={style.iconText2}
          />
        </View>
        <TouchableOpacity style={style.btnValidar} onPress={()=> navigation.navigate('Register')}>
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