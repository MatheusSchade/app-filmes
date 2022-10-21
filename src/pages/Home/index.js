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
  SliderMovie,
  LoadingArea
} from './styles';
import { Feather } from '@expo/vector-icons'
import { base3 } from '../../constants/colors';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import SliderItem from '../../components/SliderItem';
import api from '../../services/api';
import { API_KEY, IMAGE_BASE_URL } from '../../constants';
import { getListMovies, generateRandomBanner } from '../../utils/movie';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [nowMovies, setNowMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [bannerMovie, setBannerMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  useEffect(() => {
    let isActive = true
    const ac = new AbortController()

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

      if (isActive) {
        const nowList = getListMovies(10, nowData?.data?.results)
        const popularList = getListMovies(5, popularData?.data?.results)
        const topList = getListMovies(5, topData?.data?.results)
        const indexBannerMovie = generateRandomBanner(nowList)

        setBannerMovie(nowList[indexBannerMovie])

        setNowMovies(nowList)
        setPopularMovies(popularList)
        setTopMovies(topList)

        setLoading(false)
      } else {
        ac.abort()
        // aborta todas as requisições em andamento quando isActive for false
      }


    }

    getMovies()

    return () => {
      // quando desmonta o componente, seta isActive como false
      // para poder usar o abortController
      isActive = false
    }
  }, [])

  function navigateDetailsPage(item) {
    navigation.navigate("Detail", { id: item?.id })
  }

  if (loading) {
    return (
      <Container>
        <LoadingArea>
          <ActivityIndicator size={75} color={`#FFF`} />
        </LoadingArea>
      </Container>
    )
  } else {
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
            onPress={() => navigateDetailsPage(bannerMovie)}
          >
            <Banner resizeMethod='resize' source={{ uri: `${IMAGE_BASE_URL}${bannerMovie?.poster_path}` }} />
          </BannerButton>
          <SliderMovie
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => <SliderItem navigatePage={() => navigateDetailsPage(item)} data={item} keyExtractor={String(item?.id)} />}
            data={nowMovies}
          />
          <Title>Populares</Title>
          <SliderMovie
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => <SliderItem navigatePage={() => navigateDetailsPage(item)} data={item} keyExtractor={String(item?.id)} />}
            data={popularMovies}
          />
          <Title>Mais votados</Title>
          <SliderMovie
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => <SliderItem navigatePage={() => navigateDetailsPage(item)} data={item} keyExtractor={String(item?.id)} />}
            data={topMovies}
          />

        </ScrollView>
      </Container>
    )
  }
}
