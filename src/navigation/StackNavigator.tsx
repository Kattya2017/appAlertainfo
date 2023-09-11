
import React, { useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthContext from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DniScreen from '../screens/DniScreen';
import HomeScreen from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import EnviarAlertaScreen from '../screens/EnviarAlertaScreen';
import { MenuLateralBasico } from './MenuLateralBasico';
import MiperfilScreen from '../screens/MiperfilScreen';




export type RootStackParams = {
  Login:undefined,
  DNI:undefined,
  Register:{
    dni:string,
    nombre:string,
    apellido:string
  },
  Menu:undefined,
  Home:undefined,
  Alertas: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

const StackNavigator=()=> {

  const {status} = useContext(AuthContext);

  if( status === 'checking') return <LoadingScreen/>
  

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          //backgroundColor:'#004F79'
        }
      }}
    >

      {
        (status !== 'authenticated')?
        (
          <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="DNI" component={DniScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ):
        (
          <>
          <Stack.Screen name='Menu' component={MenuLateralBasico}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Mi perfil' component={MiperfilScreen}/>
          </>
        )
      }

    </Stack.Navigator>
  );
}

export default StackNavigator;