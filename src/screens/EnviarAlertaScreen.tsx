import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import FondoComponent from '../components/FondoComponent';


const {width, height} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

const EnviarAlertaScreen = ({ navigation }: Props) => {
  return(
    <View style={style.container}>
        <FondoComponent/>
        <View style={style.containerGeneral}>
          <Text style={style.title}>Desea enviar su alerta?</Text>
        </View>
    </View>
  )
}

export default EnviarAlertaScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerGeneral:{
        width,
        alignItems:'center'
    },
    title:{
        justifyContent:'center',
        alignItems:'center'
    }
});