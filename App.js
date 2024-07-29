import { StatusBar } from 'expo-status-bar';
import Stack from './navigator/Stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack/>
    </NavigationContainer>
  );
}