import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParams } from '../navigation/MenuLateralBasico';
import alertainfoApi from '../api/alertainfoApi';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsAlerta } from '../navigation/StackAlertaNavigator';
import { useForm } from '../hooks/useForm';
import socket from '../socket/socketApi';


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParamsAlerta, 'EnviarAlerta'> { };

const EnviarAlertaScreen = ({ navigation, route }: Props) => {

  const {descripcion,form,onChange} = useForm({
    descripcion:''
  });

  const [sede, setSede] = useState('');
  const [organo, setOrgano] = useState('');
  const [unidad, setUnidad] = useState('');
  const [area, setArea] = useState('');

  useEffect(() => {
    obtenerDatos();
  }, [])


  const obtenerDatos = async () => {
    try {
      const tipo = String(route.params.tipo_area);
      switch (tipo) {
        case '1':
          const organo = await alertainfoApi.get(`/organo/${route.params.area}`);
          setSede(organo.data.resp.Sede.nombre);
          setOrgano(organo.data.resp.nombre);
          setUnidad('');
          setArea('');
          break;
        case '2':
          const unidad = await alertainfoApi.get(`/unidadorganica/${route.params.area}`);
          setSede(unidad.data.resp.Organo.Sede.nombre);
          setOrgano(unidad.data.resp.Organo.nombre);
          setUnidad(unidad.data.resp.nombre);
          setArea('');
          break;
        case '3':
          const area = await alertainfoApi.get(`/area/${route.params.area}`);
          setSede(area.data.resp.UnidadOrganica.Organo.Sede.nombre);
          setOrgano(area.data.resp.UnidadOrganica.Organo.nombre);
          setUnidad(area.data.resp.UnidadOrganica.nombre);
          setArea(area.data.resp.nombre);
          break;
        default:
          setSede('');
          setOrgano('');
          setUnidad('');
          setArea('');
          break;
      }
    } catch (error) {
      console.log(error);

    }
  }

  const enviarAlerta = async ()=>{

    try {
      const data = {
        descripcion,
        id_tipo_alerta:route.params.tipo_alerta
      }
      const resp = await alertainfoApi.post('/alerta',data);
      console.log(resp.data);
      if (!resp.data.ok) {
        Alert.alert('Mensaje',resp.data.msg)
      }else{
        socket.emit('nueva-alerta');
        Alert.alert('Enviado',resp.data.msg)
        form.descripcion='';
        navigation.navigate('Home');
      }
      /*  */

    } catch (error) {
      console.log(error);
      
    }
    
  }

  const atras=()=>{
    form.descripcion='';
    navigation.navigate('Home');
  }

  return (
    <View style={style.container}>
      <FondoComponent />
      <View
        style={{
          position: 'absolute',
          width: '95%',
          height: '95%',
          backgroundColor: '#fff',
          borderRadius: 10,
          borderColor: '#004F79',
          borderWidth: 2
        }}
      >
        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 15, bottom: 20, color: '#004F79', marginTop: 30, textAlign:'center' }} >{route.params.titulo}</Text>
      </View>

      
      <View
        style={{
          width:'85%',
          marginTop: 70,
        }}
      >

        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            height:120,
            borderRadius:10,
            borderColor:'#004F79',
            borderWidth:1,
          }}
        >
          <TextInput
            style={{
              width:'100%',
              color:'black',
              height:'100%',
              
            }}
            /* onChangeText={onChangeNumber}
            value={number} */
            placeholder="Ingrese una descripcion"
            placeholderTextColor={'black'}
            keyboardType="default"
            multiline = {true}
            numberOfLines = {5}
            onChangeText={(value)=>onChange(value,'descripcion')}
            value={descripcion}
          />
        </View>
        <View
          style={{
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            marginTop:10
          }}
        >
          {/*<Image style={style.img2}
              source={require('../assets/img/alerta.png')}
        />*/}
        </View>
        <View>
            <Text style={{
              color: '#004F79',
              textAlign: 'center',
              fontSize: 28,
              fontFamily: 'Roboto-Bold'
            }}>¿Seguro de enviar la alerta seleccionada?</Text>
          </View>
        <View
          style={{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-around',
            marginTop:20
          }}
        >
        <TouchableOpacity
          onPress={enviarAlerta}
        >
            <Image style={style.img3}
              source={require('../assets/img/si.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={atras}
          >
            <Image style={style.img4}
              source={require('../assets/img/no-2.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '85%',
          height: (area!=='')?220:150,
          alignItems: 'center',
          marginTop: 50
        }}
      >
        <View style={style.barrita}>
          <View style={style.titleText}>
            {
              sede !== '' ? <>
                <Text style={{ fontFamily: 'Roboto-Bold', color: '#47525E', fontSize: 12 }}>SEDE: </Text>
                <Text style={{ fontFamily: 'Roboto-Bold', color: 'green', fontSize: 12 }}>{sede} </Text>
              </> : ''
            }
            {
              organo !== '' ? <>
                <Text style={{ fontFamily: 'Roboto-Bold', color: '#47525E', fontSize: 12 }} >ORGANO:</Text>
                <Text style={{ fontFamily: 'Roboto-Bold', color: 'green', fontSize: 12 }}>{organo} </Text>
              </> : ''
            }
            {
              unidad !== '' ?
                <>
                  <Text style={{ fontFamily: 'Roboto-Bold', color: '#47525E', fontSize: 12 }} >UND. ORGANICA:</Text>
                  <Text style={{ fontFamily: 'Roboto-Bold', color: 'green', fontSize: 12 }} >{unidad}</Text>
                </>
                : ''
            }
            {
              area !== '' ?
                <>
                  <Text style={{ fontFamily: 'Roboto-Bold', color: '#47525E', fontSize: 12 }} >AREA:</Text>
                  <Text style={{ fontFamily: 'Roboto-Bold', color: 'green', fontSize: 12 }} >{area}</Text>
                </>
                : ''
            }
          </View>
        </View>
      </View>

      

    </View>
  )
}

export default EnviarAlertaScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  barraAlerta: {
    width: '100%',
    height: '100%',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  img: {
    width: '10%',
    height: '5%',
    left: 125,
    bottom: 28
  },
  barrita: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F6FF',
    borderRadius: 10,
    borderColor: '#004F79',
    borderWidth: 1,
  },
  titleText: {
    fontFamily: 'Roboto-Bold',
    justifyContent: 'center',
    width: '90%',
    height: '100%'
  },
  barrita2: {
    width: '90%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#004F79',
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  img2: {
    width: 60,
    height: 60,
  },
  img3: {
    width: 105,
    height: 55,
    borderRadius:10
  },
  img4: {
    width: 105,
    height: 55,
    borderRadius:10
  }
});