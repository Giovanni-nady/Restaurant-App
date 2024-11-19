import './global.css'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'

export default function App () {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
        <StatusBar style='auto' />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
