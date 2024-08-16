import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SignUp } from '../screens/SignUp/SignUp';
import { SignIn } from '../screens/SignIn/SignIn' 
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
      tabBarLabelStyle: styles.labelStyle,
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'white'
    }}>
      <Tab.Screen name="Login" component={SignIn} />
      <Tab.Screen name="Cadastro" component={SignUp} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    
    tabBar: {
      marginTop: Constants.statusBarHeight,
      paddingBottom: '2%',
      width: '90%',
      alignSelf: 'center',
      backgroundColor: 'green',
      borderRadius: 8
    },

    tabBarIndicatorStyle: {
      backgroundColor: 'white',
      height: '70%',
      width: '46%',
      bottom: '15%',
      marginStart: 8,
      zIndex: -1,
      borderRadius: 8,
      position: 'absolute',
      padding: 8
    },

    labelStyle: {
      marginTop: 16,
      paddingHorizontal:0
    }
});

export default Tabs;