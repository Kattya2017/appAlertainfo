import React, {useContext} from 'react'
import { View, Dimensions, StyleSheet, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import FondoComponent from '../components/FondoComponent';
import AuthContext from '../context/AuthContext';

const {width, height} = Dimensions.get('window');
interface Props extends StackScreenProps<any, any>{};

const HomeScreen = ({navigation}:Props) => {

  const {user, token, logOut} = useContext(AuthContext);

  return (
    <View style={style.container}>
        <FondoComponent/>
        <View style={style.containeGeneral}>
          <Text style={style.title}>Hola mundo</Text>
          <Button
            title="Cerrar Sesion"
            color='#004F79'
            onPress={logOut}
          />
          <Text>
            {JSON.stringify(user, null, 5)}
          </Text>
          <Text>
            {token}
          </Text>
        </View>
    </View>

  )
}

export default HomeScreen;

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  containeGeneral:{
    width,
    alignItems:'center'
  },
  containerBtn:{
    marginTop:5,
    width,
    justifyContent:'center',
    alignItems:'center',
    top:10
  },
  title:{
    fontSize: 20,
    marginBottom: 20
  }
})
