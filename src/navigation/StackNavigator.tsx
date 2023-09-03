import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DniScreen from '../screens/DniScreen';

const Stack = createStackNavigator();

const StackNavigator=()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:'#fff'
        }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="DNI" component={DniScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;