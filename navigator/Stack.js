import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../top_material_navigator/Tabs';
import {Home} from '../screens/Home'

const StackNavigator = createNativeStackNavigator();

export default function Stack(){
  return (
    <StackNavigator.Navigator initialRouteName='Tabs' screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="Tabs" component={Tabs}/>
      <StackNavigator.Screen name ="Home" component={Home}/>
    </StackNavigator.Navigator>
  );
}