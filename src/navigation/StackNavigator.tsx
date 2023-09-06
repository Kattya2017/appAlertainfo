
import React, { useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthContext from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DniScreen from '../screens/DniScreen';
import HomeScreen from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import EnviarAlertaScreen from '../screens/EnviarAlertaScreen';



export type RootStackParams = {
  Login:undefined,
  DNI:undefined,
  Register:{
    dni:string,
    nombre:string,
    apellido:string
  },
  Home: undefined,
  Drawer: undefined,
  EnviarAlerta: undefined,
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
          backgroundColor:'#fff'
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
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='EnviarAlerta' component={EnviarAlertaScreen}/>
          </>
        )
      }

    </Stack.Navigator>
  );
}

export default StackNavigator;