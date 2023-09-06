import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';

const AppState = ({children}:any) =>{
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <MenuLateralBasico/>
      <AppState>
      {/*<StackNavigator/>*/}
  </AppState>
    </NavigationContainer>
  )
}

export default App;