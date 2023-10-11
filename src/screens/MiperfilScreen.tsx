import React, { useContext,useEffect,useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { useForm } from '../hooks/useForm';
import Icon from 'react-native-vector-icons/Ionicons';
import alertainfoApi from '../api/alertainfoApi';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParams } from '../navigation/MenuLateralBasico';


const { width, height } = Dimensions.get('window');

interface Props extends DrawerScreenProps<RootDrawerParams, any> { };

const MiperfilScreen = ({ navigation }: Props) => {

  const { password, form, onChange } = useForm({
    password: '',
  });

  const [celular, setCelular] = useState('')

  useEffect(() => {
    mostrarUsuario();
  }, [])
  

  const mostrarUsuario =async()=>{
    try {
      const resp = await alertainfoApi.get('/auth/administrado');
      console.log(resp.data.user.telefono);
      setCelular(resp.data.user.telefono)
      //form.telefono===celular
    } catch (error) {
      console.log(error);
      
    }
  }

  const actualizar = async () => {
    try {
      console.log(celular);
      
      if (celular === '') {
        Alert.alert('Datos incompletos', 'Ingrese numero de celular')
      }
      else if (celular.length !== 9) {
        Alert.alert('Datos incompletos', 'El celular debe tener 9 digitos')
      } 
      else if(celular.charAt(0)!=='9'){
        Alert.alert('Datos incorrecto', 'El numero celular debe comenzar con 9')
      }else {
        const data = {
          password,
          telefono:celular
        }
        const resp = await alertainfoApi.put('/administrado/actualizar/password', data);
        console.log(resp.data);

        Alert.alert('Exitoso', 'Los datos se actualizaron con exito')
      }
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <View style={style.container}>
      <FondoComponent />

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <View style={style.imagenPerfil}>
          <View style={style.containerImage}>
            <Image
              style={style.imagenLogo}
              source={require('../assets/img/mi-perfil.png')} />
          </View>
          
        </View>
        <Text style={style.textSubtTitulo}>Actualizar mis Datos</Text>
        <View style={style.containerInput}>
          <TextInput
            placeholder='Ingrese Contraseña nueva'
            style={style.textInput}
            placeholderTextColor={'#969FAA'}
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => onChange(value, 'password')}
          />
          <Icon
            name='lock-closed'
            color={'#004F79'}
            size={40}
            style={style.iconText3}
          />
        </View>
        <View style={style.containerInput}>
          <TextInput
            placeholder='Ingrese Teléfono'
            maxLength={9}
            keyboardType='phone-pad'            
            style={style.textInput}
            placeholderTextColor={'#969FAA'}
            onChangeText={(value)=>setCelular(value)}
            value={celular}
          />
          <Icon
            name='calculator'
            color={'#004F79'}
            size={40}
            style={style.iconText3}
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
    width: '95%',
    height: '95%',
    position: 'absolute',
    borderRadius: 10,
    borderColor: '#004F79',
    backgroundColor: '#fff',
    borderWidth: 3,
  },
  imagenPerfil: {
    height: 200,
    width:200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImage: {
    width: '90%',
    height: '90%',
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
    width: '95%',
    height: '95%',
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
    flexDirection: 'row',
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
    left: 50
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
  iconText3: {
    position: 'absolute',
    left: 6
  },
});