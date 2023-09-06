import React from 'react'
import { StyleSheet,TouchableOpacity, Image, Text } from 'react-native'


interface Props{
    descripcion?: string
    onPres?:()=>void
}


const BtnAlertas = ({descripcion, onPres}: Props) => {

    let constante;

    if (descripcion) {
        constante = <Text style={style.btnText}>{descripcion}</Text>
    }else{
        constante
    }
  return (
    <TouchableOpacity
        activeOpacity={0.7}
        style={style.btnAlerta}
        onPress={onPres}>
            <Image
                source={require('../assets/img/alerta/impresora-soporte.png')}
                style={style.iconBtn}
            />
            {constante}
    </TouchableOpacity>
  )
}

export default BtnAlertas;

const style = StyleSheet.create({
    btnAlerta:{
        backgroundColor: '#F5F5F2',
        borderColor:'#004F79',
        borderWidth:3,
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    
        elevation: 10,
    },
    iconBtn:{
        width: '60%',
        height: '60%'
    },
    btnText:{
        color: 'black',
        fontSize:7,
        fontFamily:'Roboto-Bold',
        marginTop:5,
    },
});