import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={HomeScreen} />
      <Tab.Screen name="SignUp" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;