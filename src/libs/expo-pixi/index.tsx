/* eslint-disable @typescript-eslint/no-explicit-any */
// import Expo from 'expo'
// import * as ExpoPixiX from 'expo-pixi'
// import { useEffect, useState } from 'react'
// import { Image, Button, Platform, AppState, StyleSheet, Text, View } from 'react-native'

// const isAndroid = Platform.OS === 'android'

// function uuidv4() {
//   //https://stackoverflow.com/a/2117523/4047926
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     const r = (Math.random() * 16) | 0,
//       v = c == 'x' ? r : (r & 0x3) | 0x8
//     return v.toString(16)
//   })
// }

// export function ExpoPixi() {
//   const [image, setImage] = useState(null)
//   const [strokeColor, setStrokeColor] = useState(0)
//   const [appState, setAppState] = useState(AppState.currentState)
//   const [sketch, setSketch] = useState(null)

//   const handleAppStateChangeAsync = nextAppState => {
//     if (appState.match(/inactive|background/) && nextAppState === 'active') {
//       if (isAndroid && sketch) {
//         setAppState(nextAppState)
//         setSketch({ id: uuidv4(), lines: sketch.lines })
//         return
//       }
//     }
//     setAppState(nextAppState)
//   }

//   useEffect(() => {
//     AppState.addEventListener('change', handleAppStateChangeAsync)
//   }, [sketch])

//   const onReady = () => {
//     console.log('ready!')
//   }


//   return (
//     <View style={styles.container}>
//       <View style={styles.container}>
//         <View style={styles.sketchContainer}>
//           <ExpoPixiX.Signature
//             ref={ref => setSketch(ref)}
//             style={styles.sketch}
//             strokeWidth={15}
//             onReady={onReady}
//           />
//         </View>
//       </View>
//       <Button
//         color={'blue'}
//         title="undo"
//         //style={styles.button}
//         onPress={() => {
//           sketch.undo()
//         }}
//       />
//       <Button
//         color={'red'}
//         title="save"
//         //style={styles.button}
//         onPress={async () => {
//           const data = await sketch.takeSnapshotAsync()
//           console.log(data)
//         }}
//       />
//       <Button
//         color={'green'}
//         title="clear"
//         //style={styles.button}
//         onPress={() => {
//           sketch.clear()
//         }}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sketch: {
//     flex: 1,
//   },
//   sketchContainer: {
//     height: '100%',
//   },
//   image: {
//     flex: 1,
//   },
//   imageContainer: {
//     height: '50%',
//     borderTopWidth: 4,
//     borderTopColor: '#E44262',
//   },
//   label: {
//     width: '100%',
//     padding: 5,
//     alignItems: 'center',
//   },
//   button: {
//     // position: 'absolute',
//     // bottom: 8,
//     // left: 8,
//     zIndex: 1,
//     padding: 12,
//     minWidth: 56,
//     minHeight: 48,
//   },
// })
