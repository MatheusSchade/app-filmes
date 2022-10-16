import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import {
  Container,
  SeachContainer,
  SearchButton,
  Input,
  Title,
  BannerButton,
  Banner,
  SliderMovie
} from './styles';
import { Feather } from '@expo/vector-icons'
import { base3 } from '../../constants/colors';
import { ScrollView, Text } from 'react-native';
import SliderItem from '../../components/SliderItem';
import api from '../../services/api';
import { API_KEY } from '../../constants';
import { getListMovies } from '../../utils/movie';

export default function Home() {
  const [nowMovies, setNowMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])

  useEffect(() => {
    let isActive = true

    const apiParams = {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        page: 1
      }
    }

    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get(`/movie/now_playing`, apiParams),
        api.get(`/movie/popular`, apiParams),
        api.get(`/movie/top_rated`, apiParams),
      ])

      const nowList = getListMovies(10, nowData?.data?.results)
      const popularList = getListMovies(5, popularData?.data?.results)
      const topList = getListMovies(5, topData?.data?.results)

      setNowMovies(nowList)
      setPopularMovies(popularList)
      setTopMovies(topList)
    }

    getMovies()
  }, [])

  return (
    <Container>
      <Header title={`React Prime`} />
      <SeachContainer>
        <Input placeholder='Nome do filme' />
        <SearchButton>
          <Feather name='search' size={30} color={base3} />
        </SearchButton>
      </SeachContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>
        <BannerButton
          activeOpacity={0.7}
          onPress={() => (
            alert('clicou')
          )}
        >
          <Banner resizeMethod='resize' source={{ uri: "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }} />
        </BannerButton>
        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <SliderItem data={item} keyExtractor={String(item?.id)} />}
          data={nowMovies}
        />
        <Title>Populares</Title>
        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <SliderItem data={item} keyExtractor={String(item?.id)} />}
          data={popularMovies}
        />
        <Title>Mais votados</Title>
        <SliderMovie
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <SliderItem data={item} keyExtractor={String(item?.id)} />}
          data={topMovies}
        />

      </ScrollView>
    </Container>
  );
}
