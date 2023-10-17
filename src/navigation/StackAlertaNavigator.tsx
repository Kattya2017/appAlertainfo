import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EnviarAlertaScreen from '../screens/EnviarAlertaScreen';

export type RootStackParamsAlerta = {
  Home:undefined,
  EnviarAlerta:{
    tipo_alerta:number,
    tipo_area:number,
    area:number,
    titulo:string
  },
}
const Stack = createStackNavigator<RootStackParamsAlerta>();

const StackAlertaNavigator=()=> {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false,
            
        }}

    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EnviarAlerta" component={EnviarAlertaScreen} />
    </Stack.Navigator>
  );
}


export default StackAlertaNavigator;