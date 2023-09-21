/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas'


export function SignCanvas() {
  const [signature, setSign] = useState(null)
  const ref = useRef<SignatureViewRef>(null)

  const text = 'Descrição'

  const handleOK = (signature: string) => {
    console.log(signature)
  }
  const handleClear = () => {
    console.log('clear success!')
    ref.current?.clearSignature()
  }
  const handleConfirm = () => {
    console.log('end')
    ref.current?.readSignature()
  }
  const handleUndo = () => {
    ref.current?.undo()
  }

  const webStyle = '.m-signature-pad--footer {display: none; margin: 0px;}'


  return (
    <View style={styles.container}>
      <View style={{ height: 200 }}>
        <SignatureScreen ref={ref} onOK={handleOK} trimWhitespace webStyle={webStyle}/>
      </View>
      <View style={styles.row}>
        <Button title="Clear" onPress={handleClear} />
        <Button title="Confirm" onPress={handleConfirm} />
        <Button title="Undo" onPress={handleUndo} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
})
