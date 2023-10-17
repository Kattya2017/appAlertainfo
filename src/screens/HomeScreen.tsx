import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';

import FondoComponent from '../components/FondoComponent';
import { ScrollView } from 'react-native-gesture-handler';
import alertainfoApi from '../api/alertainfoApi';
import { ResultTipoAlertas, Resp } from '../interfaces/tipoAlertaInterface';
import BtnAlertas from '../components/BtnAlertas';
import { Row, Col } from 'react-native-flex-grid';
import { RootDrawerParams } from '../navigation/MenuLateralBasico';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsAlerta } from '../navigation/StackAlertaNavigator';

const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<RootStackParamsAlerta, 'Home'> { }
//interface Props extends DrawerScreenProps<RootDrawerParams,'Inicio'> { };

const HomeScreen = ({ navigation }: Props) => {
  const [listTipoAlerta, setListTipoAlerta] = useState<Resp[]>([]);
  const [carga, setCarga] = useState<boolean>(false);
  useEffect(() => {
    mostrarTipoAlerta();
  }, []);



  const verificarDatos = async (id_alerta: number, titulo: string) => {
    try {
      const resp = await alertainfoApi.get('/administrado/validar/sede');
      if (!resp.data.resp.tipo_area) {
        Alert.alert(
          'Actualizar su Jurisdiccion',
          'Para enviar una alerta de soporte es necesario que ingrese sus datos de su lugar de trabajo, dirijase al menu lateral y seleccione la opcion Sede',
        );
      }
      else if (!resp.data.resp.telefono) {
        Alert.alert(
          'Actualizar su numero de celular',
          'Para enviar una alerta de soporte es necesario que ingrese su numero de celular, dirigase al menu del Perfil',
        );
      } else {
        navigation.navigate('EnviarAlerta', {
          area: resp.data.resp.area,
          tipo_area: resp.data.resp.tipo_area,
          tipo_alerta: id_alerta,
          titulo
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarTipoAlerta = async () => {
    try {
      const resp = await alertainfoApi.get<ResultTipoAlertas>('/tipoalerta', {
        params: { estado: 1 },
      });
      console.log(resp.data);
      setListTipoAlerta(resp.data.resp);
      console.log(listTipoAlerta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <FondoComponent />
      <ScrollView>
        <View style={style.containerBtn}>
        
          <Row style={{ padding: 15 }}>
            {listTipoAlerta.map((resp, index) => {
              return (
                <Col key={resp.id} xs="6" sm="6" style={{ marginBottom: 15 }}>
                  <BtnAlertas
                    onPres={() => verificarDatos(resp.id, resp.descripcion)}
                    descripcion={resp.descripcion}
                    id={resp.id}
                    imagen={resp.imagen?'estoymandandonombre':resp.imagen}
                  />
                </Col>
              );
            })}
          </Row>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containeGeneral: {
    //backgroundColor: 'red',
    width,
    alignItems: 'center',
  },
  containerBtn: {
    //backgroundColor: 'red',
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBarra: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
