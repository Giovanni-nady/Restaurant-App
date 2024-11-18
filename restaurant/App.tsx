import './global.css'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Products from './src/screens/products/Products'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App () {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Products />
        <StatusBar style='auto' />
      </View>
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
