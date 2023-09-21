//REACT
import { useEffect, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
//SKIA
import {
  Canvas,
  PaintStyle,
  Path,
  useCanvasRef,
  SkPath,
  Skia,
  useDrawCallback,
  useTouchHandler,
  SkiaView,
  SkCanvas
} from '@shopify/react-native-skia'
//COMPONENTS
import { Fontisto } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  containerDraw: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 100
  },
  container: {
    flex: 1,
    zIndex: 10,
  },
  canvas: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  }
})
interface IProps {
  onSave: (base64: string) => void
  generateBase64: boolean
}

const paint = () => {
  const paint = Skia.Paint()
  paint.setStyle(PaintStyle.Stroke)
  paint.setStrokeWidth(4)
  paint.setColor(Skia.Color('#000'))

  return paint
}

export function SkiaDraw() {
  const [paths, setPaths] = useState<SkPath[]>([])

  const currentPath = useRef<SkPath | null>(null)
  const canvasRef = useRef<SkCanvas | null>(null)
  const ref = useCanvasRef()

  const onTouch = useTouchHandler({
    onStart: ({ x, y }) => {
      currentPath.current = Skia.Path.Make()
      currentPath.current.moveTo(x,y)
    },
    onActive: ({ x, y }) => {
      currentPath.current?.lineTo(x,y)
      canvasRef.current?.drawPath(currentPath.current!, paint())
    },
    onEnd: () => {
      setPaths(prev => prev.concat(currentPath.current!))
      currentPath.current = null
    }
  })

  const onDraw = useDrawCallback((canvas, info) => {
    onTouch(info.touches)
    canvasRef.current = canvas
  },[])


  function onSave() {
    const image = ref.current?.makeImageSnapshot()
    if (image) {
      const base64 = image.encodeToBase64()
      console.log(base64)
    }
  }

  return (
    <View>
      <View style={styles.containerDraw}>
        <Canvas ref={ref} style={styles.canvas}>
          {paths.map((path, i) => (
            <Path key={i} path={path} style='stroke' strokeWidth={4} />
          ))}
        </Canvas>
        <SkiaView style={styles.container} onDraw={onDraw} />
      </View>

      <TouchableOpacity style={{ padding: 16, alignSelf: 'flex-end' }} onPress={() => setPaths([])}>
        <Fontisto name="eraser" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}
