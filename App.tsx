import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

//https://unpkg.com/browse/react-native-signature-canvas@4.6.1/index.d.ts
//https://www.npmjs.com/package/react-native-signature-canvas
//https://medium.com/@patick.cyiza/how-to-capture-a-signature-in-expo-react-native-99d5e0366df6


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
