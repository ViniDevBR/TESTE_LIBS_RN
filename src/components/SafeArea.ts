import styled from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'


const isAndroid = Platform.OS === 'android'


export const SafeArea = styled.SafeAreaView`
  padding-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
`