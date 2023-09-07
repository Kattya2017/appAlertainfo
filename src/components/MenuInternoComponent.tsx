import React, { useContext, useState, useEffect } from 'react';
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


const MenuInternoComponent = (props: DrawerContentComponentProps) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#004F79' }}>
                <ImageBackground source={require('../assets/img/fondo-3.jpg')} style={{ padding: 10, alignItems: 'center' }}>
                    <Image source={require('../assets/img/logo-lateral.png')}
                        style={{ width: 100, height: 100, marginBottom: 5 }} />
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium' }}>INFORMATICA SOS</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', fontFamily: 'Roboto-Medium', marginRight: 5 }}>Alerta de atención al usuario interno CSJUC</Text>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#004F79' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-sharp" size={22} color='#333'/>
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5, color:'#333'}} >Cerrar Sesion</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default MenuInternoComponent;


const style = StyleSheet.create({

});