import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert } from 'react-native';
import Dropdown from 'react-native-input-select';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParams } from '../navigation/MenuLateralBasico';
import alertainfoApi from '../api/alertainfoApi';
import { Resp, ResultJurisdiccion } from '../interfaces/jurisdiccion.interface';
import FondoComponent from '../components/FondoComponent';
const { width, height } = Dimensions.get('window');

interface Props extends DrawerScreenProps<RootDrawerParams, 'Sede'> { };

interface TipoJurisdiccion {
    id: number,
    titulo: string
}
const tipoSede: TipoJurisdiccion[] = [
    {
        id: 1,
        titulo: 'Organo'
    },
    {
        id: 2,
        titulo: 'Unidad Organica'
    },
    {
        id: 3,
        titulo: 'Area'
    }
]
const SedeScreen = ({ navigation }: Props) => {
    const [country, setCountry] = useState('');
    const [jurisdiccion, setJurisdiccion] = useState('');
    const [tipoJurisdiccion, setTipoJurisdiccion] = useState('')
    const [listJurisdiccion, setListJurisdiccion] = useState<Resp[]>([{
        estado:0,
        id:0,
        nombre:''
    }]);
    useEffect(() => {
      verificarDatos();
    }, [])
    
    const verificarJurisdiccion = async (id: string) => {
        try {
            setTipoJurisdiccion(id)
            switch (id) {
                case '1':
                    console.log('1');
                    const organo = await alertainfoApi.get<ResultJurisdiccion>('/organo',{params:{estado:'1'}});
                    setListJurisdiccion(organo.data.resp)
                    console.log(organo.data);
                    
                    break;
                case '2':
                    const unidad = await alertainfoApi.get<ResultJurisdiccion>('/unidadorganica',{params:{estado:'1'}})
                    setListJurisdiccion(unidad.data.resp)
                    console.log(unidad.data);
                    break;
                case '3':
                    const area = await alertainfoApi.get<ResultJurisdiccion>('/area',{params:{estado:'1'}});
                    setListJurisdiccion(area.data.resp)
                    console.log(area.data);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
            
        }
        
    }
    const verificarDatos =async()=>{
        try {
          const resp = await alertainfoApi.get('/administrado/validar/sede');          
          setJurisdiccion(String(resp.data.resp.area));
          setTipoJurisdiccion(String(resp.data.resp.tipo_area));
          verificarJurisdiccion(String(resp.data.resp.tipo_area));
          
        } catch (error) {
          console.log(error);
          
        }
      }
    const actualizarJurisdiccion=async()=>{
        try {
            if (jurisdiccion==='' || tipoJurisdiccion==='') {
                Alert.alert('Datos incompletos','Todos los campos son requeridos')
            }else{
                console.log('bienvenido');
                const resp = await alertainfoApi.put('/administrado/jurisdiccion/administrado',{tipo_area:tipoJurisdiccion,area:jurisdiccion});
                console.log(resp);
                Alert.alert('Actualizado',resp.data.msg)
                
            }
        } catch (error) {
            
        }
    }

    return (
        <View
            style={styles.container}
        >
            <FondoComponent/>
            <View
                style={styles.containerArea}
            >
                <View
                    style={styles.containerImg}
                >
                    <View
                        style={styles.containerImage}
                    >
                        <Image
                            style={styles.imagenLogo}
                            source={require('../assets/img/marcador-de-posicion.png')}
                        />
                    </View>
                    <Text
                        style={styles.textSubtTitulo}
                    >Actualizar Datos de Jurisdiccion</Text>
                </View>
                <View
                        style={{
                            width:'90%',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Dropdown
                            label="Tipo Jurisdiccion"
                            placeholder="Seleccionar Tipo de Jurisdiccion"
                            options={
                                tipoSede.map((resp,index)=>{
                                    return {label:`${resp.titulo}`,value:`${resp.id}`}
                                })
                                
                            }checkboxLabelStyle={{
                                color:'black'
                            }}
                            selectedValue={tipoJurisdiccion}
                            onValueChange={(value:string) =>verificarJurisdiccion(value)}
                            primaryColor={'green'}
                            dropdownStyle={{
                                backgroundColor:'white',
                            }}
                        />
                        <Dropdown
                            label="Jurisdiccion"
                            placeholder="Seleccionar La Jurisdiccion"
                            options={
                                listJurisdiccion.map((resp,index)=>{
                                    return {label:`${resp.nombre}`,value:`${resp.id}`}
                                })
                                
                            }checkboxLabelStyle={{
                                color:'black'
                            }}
                            selectedValue={jurisdiccion}
                            onValueChange={(value:string) =>{
                                setJurisdiccion(value)
                                console.log(value);
                            }}
                            primaryColor={'green'}
                            dropdownStyle={{
                                backgroundColor:'white',
                            }}
                        />
                        <TouchableOpacity
                            style={styles.btnActualizar}
                            onPress={actualizarJurisdiccion}
                        >
                            <Text style={styles.textBtn}>ACTUALIZAR</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default SedeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerArea: {
        width: '90%',
        height: '90%',
        borderRadius: 10,
        borderColor: '#004F79',
        backgroundColor:'#fff',
        borderWidth: 3,
        //justifyContent:'center',
        alignItems: 'center'
    },
    containerImg: {
        marginTop: 20,
        height: (height * 35) / 100,
        width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage: {
        width: '50%',
        height: '65%',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius: 100,
        borderColor: '#004F79',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagenLogo: {
        width: '60%',
        height: '65%',
        borderWidth: 1,
    },
    textTitulo: {
        fontFamily: 'Roboto-Bold',
        color: '#004F79',
        fontSize: 25,
        marginTop: 20,
    },
    textSubtTitulo: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        color: '#004F79',
        marginTop: 10,
        fontSize: 16,
        marginBottom: 20
    },
    btnActualizar:{
        backgroundColor:'#004F79',
        width:'100%',
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textBtn:{
        color:'white',
        fontWeight:'bold',
        fontSize:17
    }
});