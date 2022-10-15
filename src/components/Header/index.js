import * as React from 'react'
import { Container, MenuButton, Title } from './styles'
import { Feather } from "@expo/vector-icons"
import { base3 } from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'

export default function Header({ title }) {
  const navigation = useNavigation()
  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name='menu' size={36} color={base3} />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  )
}