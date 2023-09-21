import { useRef } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas'


export function SignCanvas() {
  const ref = useRef<SignatureViewRef>(null)

  const handleOK = (signature: string) => {
    console.log(signature)
  }
  const handleClear = () => {
    ref.current?.clearSignature()
  }
  const handleConfirm = () => {
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
