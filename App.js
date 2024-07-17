import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {SignIn} from './screens/SignIn'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
