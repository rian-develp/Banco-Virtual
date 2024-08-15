import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../topMaterialNavigator/Tabs';
import {Home} from '../screens/Home'
import {InsertCard} from '../screens/InsertCard'

const StackNavigator = createNativeStackNavigator();

export default function Stack(){
  return (
    <StackNavigator.Navigator initialRouteName='Tabs' screenOptions={{headerShown: false}}>
      <StackNavigator.Screen name="Tabs" component={Tabs}/>
      <StackNavigator.Screen name ="Home" component={Home}/>
      <StackNavigator.Screen name ="InsertCard" component={InsertCard}/>
    </StackNavigator.Navigator>
  );
}