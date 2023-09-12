import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { useForm } from '../hooks/useForm';
import alertainfoApi from '../api/alertainfoApi';


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

const MiperfilScreen = ({ navigation }: Props) => {

  const {password,form,onChange} = useForm({
    password:''
  })

  const actualizar=async()=>{
    try {
      if (password==='') {
        Alert.alert('Datos incompletos','Ingrese la nueva contraseña')
      }
      if (password.length<=6) {
        Alert.alert('Datos incompletos','La contraseña nueva debe tener mas de 6 digitos') 
      }else{
        const data ={
          password
        }
        const resp = await alertainfoApi.put('/administrado/actualizar/password',data);
        console.log(resp.data);
        
        Alert.alert('Exitoso','La contraseña se actualizo con exito')
      }
    } catch (error) {
      console.log(error);
      
    }
  }
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
            secureTextEntry={true} 
            value={password}
            onChangeText={(value)=>onChange(value,'password')}
            />
            
        </View>

        <TouchableOpacity 
          onPress={actualizar}
          style={style.btnLogin}>
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