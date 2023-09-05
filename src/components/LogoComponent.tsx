import React from 'react'
import { View,Dimensions,StyleSheet,Image,Text } from 'react-native';
const {width,height} = Dimensions.get('window');

interface Props{
    titulo:string,
    subtitulo:string
}


const LogoComponent = ({titulo,subtitulo}:Props) => {
  return (
    <View
        style={style.container}
    >
        <View
            style={style.containerImage}
        >
            <Image
                style={style.imagenLogo}
                source={require('../assets/img/logo.png')}
            />
        </View>
        <Text
            style={style.textTitulo}
        >{titulo}</Text>
        <Text
            style={style.textSubtTitulo}
        >{subtitulo}</Text>
    </View>
  )
}

export default LogoComponent;


const style = StyleSheet.create({
    container:{
      height: (height*35)/100,
      width,
      justifyContent:'center',
      alignItems:'center'
    },
    containerImage:{
        width:'50%',
        height:'65%',
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius:100,
        borderColor:'#8492A6',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imagenLogo:{
        width:'90%',
        height:'90%',
        borderRadius:100,
        borderWidth:1,
    },
    textTitulo:{
        fontFamily:'Roboto-Bold',
        color:'#004F79',
        fontSize:25,
        marginTop:20,
    },
    textSubtTitulo:{
        fontFamily:'Montserrat',
        fontWeight:'bold',
        color:'#89919C',
        marginTop:10,
        fontSize:16,
        marginBottom:20
    }
  })