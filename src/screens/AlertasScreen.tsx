import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import FondoComponent from '../components/FondoComponent';


const {width, height} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any>{};

const AlertasScreen = ({ navigation }: Props) => {
    
  return(
    <View style={style.container}>
        <FondoComponent/>
        <View style={style.containerGeneral}>
          <Text style={style.title}>Mis alertas</Text>
        </View>
    </View>
  )
}

export default AlertasScreen;

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