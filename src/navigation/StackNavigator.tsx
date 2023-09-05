
import React, { useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthContext from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DniScreen from '../screens/DniScreen';
import HomeScreen from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createStackNavigator();

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
          </>
        )
      }

    </Stack.Navigator>
  );
}

export default StackNavigator;