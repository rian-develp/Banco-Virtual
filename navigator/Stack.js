import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../top_material_navigator/Tabs';

const StackNavigator = createNativeStackNavigator();

function Stack() {
  return (
    <StackNavigator.Navigator >
      <StackNavigator.Screen name="Home" component={Home} />
      <StackNavigator.Screen name="Tabs" component={Tabs} />
    </StackNavigator.Navigator>
  );
}