import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const LoadingScreen2 = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal:90
        }}>
    
            <Text style={{color:'#000', fontWeight:'bold', fontSize:18, marginBottom:10}}>Cargando......</Text>
            <Text style={{color:'#000', fontSize:16, marginBottom:10}}>Enviando datos de su alerta, porfavor espere</Text>
            <ActivityIndicator
                size={ 50 }
                color = "black"
            />
        </View>
      )
}

export default LoadingScreen2