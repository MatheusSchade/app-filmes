import React from 'react'
import {
  Container,
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton
} from './styles'
import { Ionicons, Feather } from "@expo/vector-icons"
import { base3, base7 } from '../../constants/colors'

export default function FavoriteItem({ data, deleteMovie, navigatePage }) {
  return (
    <Container>
      <Title size={22}>{data?.title}</Title>
      <RateContainer>
        <Ionicons name={`md-star`} size={16} color={base7} />
        <Rate>{data?.vote_average.toFixed(1)}/10</Rate>
      </RateContainer>
      <ActionContainer>
        <DetailButton onPress={() => navigatePage(data)}>
          <Title size={14}>Ver detalhes</Title>
        </DetailButton>
        <DeleteButton onPress={() => deleteMovie(data?.id)}>
          <Feather name='trash' size={24} color={base3} />
        </DeleteButton>
      </ActionContainer>
    </Container>
  )
}