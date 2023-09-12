import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { Resp, ResultAlertas } from '../interfaces/alerta.interface';
import alertainfoApi from '../api/alertainfoApi';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { }

const MisAlertasScreen = ({ navigation }: Props) => {
  const [listAlertas, setListAlertas] = useState<Resp[]>([]);

  useEffect(() => {
    mostrarAlertas();
  }, []);

  const mostrarAlertas = async () => {
    try {
      const alertas = await alertainfoApi.get<ResultAlertas>(
        '/alerta/mostrar/administrado',
      );
      console.log(alertas.data.resp);
      setListAlertas(alertas.data.resp);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmarAlerta = async (id:number,conformidad:number) =>{
    try {
      console.log(id,conformidad);
      const data ={
        conformidad
      }
      const resp = await alertainfoApi.put(`/alerta/${id}`,data);
      mostrarAlertas();
      Alert.alert('Enviado','La conformidad ha sido enviado con exito')
    } catch (error) {
      console.log(error);
      
    }
  };

  

  return (
    <View style={style.container}>
      <FondoComponent />
      <ScrollView
        style={{
          flex: 1,
          width,
          height,
          marginTop: 20
        }}>
        {listAlertas.map((resp, index) => {
          return (
            <View
              key={resp.id}
              style={{
                width: '100%',
                height: 160,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <View style={style.containerBtn}>
                <View style={style.imageAlertas}>
                  <Image
                    source={require('../assets/img/alerta/computadora-soporte.png')}
                    style={{ width: '75%', height: '45%' }}
                  />
                </View>
                <View style={style.viewText} >
                  <Text style={style.textAlerta}>
                    {resp.TipoAlertum.descripcion}
                  </Text>
                  
                  <Text style={style.textDescripcion}>
                    {resp.descripcion.slice(0, 50)}
                  </Text>
                  
                  <Text style={style.textFecha}>
                    {resp.fecha}
                  </Text>

                  <View style={style.viewBtn} >
                    <TouchableOpacity
                      onPress={()=>confirmarAlerta(resp.id,1)}
                      style={{ ...style.btn, backgroundColor: '#009F0B' }} 
                    >
                      <Icon
                        name='checkmark-sharp'
                        size={30} color={'white'}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>confirmarAlerta(resp.id,0)}
                      style={{ ...style.btn, backgroundColor: 'red' }} >
                      <Icon
                        name='close-sharp'
                        size={30} color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MisAlertasScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerBtn: {
    width: '90%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#004F79',
    borderWidth: 1.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
    flexDirection: 'row'
  },
  imageAlertas: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '100%',
  },
  viewText: {
    width: '70%',
    height: '100%',
  },
  textAlerta: {
    color: '#004F79',
    width: '100%',
    marginTop: 10,
    fontWeight:'900',
  },
  textDescripcion: {
    //backgroundColor:'blue',
    color: 'black',
    width: '100%',
    height: '20%',
    marginTop: 5,
    fontSize: 14,
  },
  textFecha: {
    //backgroundColor:'blue',
    color: '#004F79',
    width: '100%',
    height: '10%',
    marginTop: 7,
    fontSize: 12,
    fontWeight:'800',
  },
  viewBtn: {
    //backgroundColor:'red',
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
    right: 15,
    bottom:30
  },
  btn: {
    width: '23%',
    height: '73%',
    marginLeft: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgBtn: {
    width: '10%',
    height: '10%'
  }
});
