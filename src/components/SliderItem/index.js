import * as React from 'react'
import { Text, View } from 'react-native'
import { Container, Title, RateContainer, BannerItem, Rate } from './styles'
import { Ionicons } from "@expo/vector-icons"
import { IMAGE_BASE_URL } from '../../constants'

export default function SliderItem({ data }) {
  console.log('data', data)
  return (
    <Container activeOpacity={0.7}>
      <BannerItem source={{ uri: `${IMAGE_BASE_URL}${data?.poster_path}` }} />
      <Title numberOfLines={1}>{data?.title}</Title>
      <RateContainer>
        <Ionicons name='md-star' size={12} color={`#E7A74e`} />
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}