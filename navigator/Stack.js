import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../top_material_navigator/Tabs';


const StackNavigator = createNativeStackNavigator();

export default function Stack(){
  return (
    <StackNavigator.Navigator initialRouteName='Tabs' screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="Tabs" component={Tabs}/>
    </StackNavigator.Navigator>
  );
}