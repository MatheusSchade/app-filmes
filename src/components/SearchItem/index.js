import * as React from 'react'
import {
  Container,
  Banner,
  Title,
  RateContainer,
  Rate
} from './styles'
import { IMAGE_BASE_URL } from '../../constants'
import { Ionicons } from "@expo/vector-icons"
import { base7 } from '../../constants/colors'

export default function SearchItem({ data, navigatePage }) {

  function detailMovie() {
    if (data?.release_date === '') {
      alert('Filme ainda sem data de lançamento')
      return
    }
    navigatePage(data)
  }

  return (
    <Container activeOpacity={0.7} onPress={() => detailMovie()}>
      {data?.poster_path ? (
        <Banner
          resizeMethod={`resize`}
          source={{ uri: `${IMAGE_BASE_URL}${data?.poster_path}` }} />
      ) : (
        <Banner
          resizeMethod={`resize`}
          source={require(`../../assets/semfoto.jpg`)} />
      )}

      <Title>{data?.title}</Title>
      <RateContainer>
        <Ionicons name={`md-star`} size={15} color={base7} />
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}