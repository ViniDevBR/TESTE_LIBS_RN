import { SafeArea } from '@/components/SafeArea'
import { ExpoPixi, SignCanvas, SkiaDraw } from '@/libs'
import { View, Text } from 'react-native'
import { useEffect } from 'react'

//https://unpkg.com/browse/react-native-signature-canvas@4.6.1/index.d.ts
//https://www.npmjs.com/package/react-native-signature-canvas
//https://medium.com/@patick.cyiza/how-to-capture-a-signature-in-expo-react-native-99d5e0366df6

export function MainScreen() {
  // async function teste() {
  //   const sprite = await PIXI.Sprite.fromExpoAsync('http://i.imgur.com/uwrbErh.png')

  //   console.log(sprite)
  // }

  useEffect(() => {
    //teste()
  },[])

  return (
    <View style={{ flex: 1 }}>
      <Text>iodsdfcdsfre</Text>
      <SkiaDraw />
    </View>
  )
}
