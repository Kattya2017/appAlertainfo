import React, { useEffect, useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

import FondoComponent from '../components/FondoComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import alertainfoApi from '../api/alertainfoApi';
import { ResultTipoAlertas, Resp } from '../interfaces/tipoAlertaInterface';
import BtnAlertas from '../components/BtnAlertas';
import { Row, Col } from 'react-native-flex-grid';
import { DrawerScreenProps } from '@react-navigation/drawer';

const { width, height } = Dimensions.get('window');

//interface Props extends StackScreenProps<RootStackParams> { };
interface Props extends DrawerScreenProps<RootStackParams> { };

const HomeScreen = ({ navigation }: Props) => {

  const [listTipoAlerta, setListTipoAlerta] = useState<Resp[]>([]);
  const [carga, setCarga] = useState<boolean>(false);
  useEffect(() => {
    mostrarTipoAlerta();
  }, []);

  useEffect(()=>{ navigation.setOptions({
    headerLeft: () => (
      <Button
        title="Menu"
        onPress={()=>navigation.toggleDrawer()}
      />
    )
  })

  }, [])

  const mostrarTipoAlerta = async () => {
    try {
      const resp = await alertainfoApi.get<ResultTipoAlertas>('/tipoalerta', { params: { estado: 1 } });
      console.log(resp.data);
      setListTipoAlerta(resp.data.resp);
      console.log(listTipoAlerta);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <View style={style.container}>
      <FondoComponent />
      <ScrollView>
        <View style={style.containerBtn}>
        <Row style={{ padding: 15 }}>
            {
              listTipoAlerta.map((resp,index)=>{
                return(
                  <Col
                    key={resp.id}
                    xs= "6"
                    sm= "6"
                    style={{marginBottom:15}}
                  >
                  <BtnAlertas
                  onPres={()=>navigation.navigate('EnviarAlerta')}
                    descripcion={resp.descripcion}
                  />
                  </Col>
                )
              })
            }
          </Row>
        </View>
      </ScrollView>
    </View>

  )
}

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containeGeneral: {
    //backgroundColor: 'red',
    width,
    alignItems: 'center'
  },
  containerBtn: {
    //backgroundColor: 'red',
    marginTop: 70,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
