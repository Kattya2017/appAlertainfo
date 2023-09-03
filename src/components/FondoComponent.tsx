import React from 'react'
import { View, StyleSheet,ImageBackground } from 'react-native';

const FondoComponent = () => {
  return (
    <ImageBackground
        style={style.container}
        source={require('../assets/img/fondo/fondouno.jpg')}
        resizeMode='cover'

    />
  )
}

export default FondoComponent;

const style = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        opacity:0.4
    }
})