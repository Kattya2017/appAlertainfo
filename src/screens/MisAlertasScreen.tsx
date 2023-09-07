import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';


const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

const MisAlertasScreen = ({ navigation }: Props) => {

  return (
    <View style={style.container} >
      <FondoComponent />

      <View style={style.containerBtn}>
        <View style={style.titleText}>
          <Image source={require('../assets/img/alerta/computadora-soporte.png')}
          style={{width:'30%', height:'70%'}}
          />
        </View>
      </View>

      <View style={style.containerBtn}>
        <View style={style.titleText}>
        <Image source={require('../assets/img/alerta/impresora-soporte.png')}
          style={{width:'30%', height:'70%'}}/>
        </View>
      </View>
      
      <View style={style.containerBtn}>
        <View style={style.titleText}>
        <Image source={require('../assets/img/alerta/sistemas-informaticos.png')}
          style={{width:'30%', height:'70%'}}/>
        </View>
      </View>
      
      <View style={style.containerBtn}>
        <View style={style.titleText}>
        <Image source={require('../assets/img/alerta/redes-problema.png')}
          style={{width:'30%', height:'70%'}}/>
        </View>
      </View>

    </View>
  )

}

export default MisAlertasScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  containerBtn: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#004F79',
    borderWidth: 1.5,
    marginBottom:10,
    bottom:25,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  titleText: {
    justifyContent: 'center',
    width: '90%',
    height: '90%'
  },
});