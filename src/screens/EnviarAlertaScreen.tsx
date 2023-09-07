import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import FondoComponent from '../components/FondoComponent';


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

const EnviarAlertaScreen = ({ navigation }: Props) => {

  return (
    <View style={style.container}>
      <FondoComponent />
      <View style={style.barraAlerta}>
        <Image style={style.img}
          source={require('../assets/img/cerrar.png')}
        />
        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 20, bottom: 20, color: '#004F79' }} >Soporte Tecnico de Impresora</Text>
        <View style={style.barrita}>
          <View style={style.titleText}>
            <Text style={{fontFamily:'Roboto-Bold', color:'#47525E'}}>- SEDE:</Text>
            <Text style={{fontFamily:'Roboto-Bold', color:'#47525E'}} >- UND. ORGANICA:</Text>
            <Text style={{fontFamily:'Roboto-Bold', color:'#47525E'}} >- ORGANO:</Text>
            <Text style={{fontFamily:'Roboto-Bold', color:'#47525E'}} >- AREA:</Text>
          </View>
        </View>
        <TouchableOpacity style={style.barrita2}>
          <Text style={style.titleText}>Detalle su alerta:</Text>
        </TouchableOpacity>
        <Image style={style.img2}
          source={require('../assets/img/alerta.png')}
        />
        <View>
          <Text style={{
            bottom: -35,
            color: '#004F79',
            textAlign: 'center',
            fontSize: 28,
            fontFamily: 'Roboto-Bold'
          }}>¿Seguro de enviar la alerta seleccionada?</Text>
        </View>
        
        <TouchableOpacity>
        <Image style={style.img3}
          source={require('../assets/img/si.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
        <Image style={style.img4}
          source={require('../assets/img/no-2.png')} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default EnviarAlertaScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barraAlerta: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#004F79',
    borderWidth: 3,
    marginBottom: 5,
    shadowColor: '#004F79',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
  img: {
    width: '10%',
    height: '5%',
    left: 125,
    bottom: 28
  },
  barrita: {
    width: '90%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F6FF',
    borderRadius: 10,
    borderColor: '#004F79',
    borderWidth: 1,
    bottom: 5,
  },
  titleText: {
    fontFamily: 'Roboto-Bold',
    justifyContent: 'center',
    width: '90%',
    height: '90%'
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
    bottom: -10,
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
    bottom: 30,
    top: 30
  },
  img3: {
    width: 105,
    height: 55,
    right: 80,
    bottom: -50,
    borderRadius: 10
  },
  img4: {
    width: 105,
    height: 55,
    left: 80,
    bottom: 5,
    borderRadius: 10,
  }
});