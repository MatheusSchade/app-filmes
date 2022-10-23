import * as React from 'react'
import { BackButton, Name } from './styles'
import { Feather } from "@expo/vector-icons"
import WebView from 'react-native-webview'
import { base3 } from '../../constants/colors'

export default function ModalLink({ link, title, closeModal }) {
  return (
    <>
      <BackButton onPress={closeModal}>
        <Feather name='x' size={36} color={base3} />
        <Name>{title}</Name>
      </BackButton>
      <WebView
        source={{ uri: link }}
      />
    </>
  )
}