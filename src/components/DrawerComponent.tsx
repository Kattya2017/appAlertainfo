import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View, Image } from 'react-native';
import { Paragraph, Caption } from 'react-native-paper';

const DrawerComponent = (props:DrawerContentComponentProps) => {
  return (
    <View>
        <DrawerContentScrollView>
            <View style={style.drawerContainer}>
                <View style={style.userInfo}>
                    <View style={style.row}>
                        <View style={style.section}>
                        <Paragraph style={[style.paragraph, style.caption]}>CSJUC</Paragraph>
                                <Caption style={style.caption}>Informatica SOS</Caption>
                        </View>
                    </View>
                </View>

                <View>
                    <DrawerItem
                        icon={({ color, size })=>(
                            <Image
                                source={require('../assets/img/usuario2.png')}
                                style={{
                                    width:25,
                                    height:25
                                }}
                            />         
                        )}
                        label="Enviar alerta"
                        labelStyle={{
                            fontSize: 13,
                        }}
                        style={{width:300}}
                        onPress={()=>{props.navigation.navigate('Home')}}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    </View>
  )
}

export default DrawerComponent;

const style = StyleSheet.create({
    drawerContainer:{
        flex: 1
    },
    userInfo:{
        paddingLeft: 20
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})