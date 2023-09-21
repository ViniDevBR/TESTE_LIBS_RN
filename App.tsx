import { MainScreen } from '@/screen'
import { SafeArea } from '@/components/SafeArea'
import { StatusBar } from 'expo-status-bar'


//https://unpkg.com/browse/react-native-signature-canvas@4.6.1/index.d.ts
//https://www.npmjs.com/package/react-native-signature-canvas
//https://medium.com/@patick.cyiza/how-to-capture-a-signature-in-expo-react-native-99d5e0366df6


export default function App() {
  return (
    <SafeArea>
      <MainScreen />
      <StatusBar style="auto" />
    </SafeArea>
  )
}
