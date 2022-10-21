import * as React from 'react'
import { Text } from 'react-native'
import { Container } from './styles'

export default function Genres({ data }) {
  console.log('data', data)
  return (
    <Container>
      <Text>{data?.name}</Text>
    </Container>
  )
}