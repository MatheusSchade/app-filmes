import {
  Container,
  Header,
  HeaderButton,
  Banner,
  LoadingArea,
  ButtonLink,
  Title,
  ContentArea,
  Rate,
  GenresList, Description
} from './styles';
import React, { useState, useEffect } from 'react'
import { Feather, Ionicons } from "@expo/vector-icons"
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { API_KEY, ASYNC_STORAGE_KEY, IMAGE_BASE_URL } from '../../constants';
import { ActivityIndicator, ScrollView, Modal } from 'react-native'
import Start from "react-native-stars"
import { base3, base7 } from '../../constants/colors';
import Genres from '../../components/Genres';
import ModalLink from "../../components/ModalLink"
import {
  saveMovie, hasMovie, deleteMovieFromFavorites
} from '../../utils/storage';


export default function Detail() {
  const ac = new AbortController()
  const navigation = useNavigation()
  const route = useRoute()

  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState({})
  const [openLink, setOpenLink] = useState(false)
  const [isFavoriteMovie, setIsFavoriteMovie] = useState(false)

  useEffect(() => {
    let isActive = true;

    const apiParams = {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
      }
    }

    async function getMovie() {
      const response = await api.get(`/movie/${route?.params?.id}`, apiParams)
        .catch((err) => {
          console.log('err getMovie()', err)
        })

      if (isActive) {
        setMovie(response?.data)
        setLoading(false)

        const isFavorite = await hasMovie(response?.data)
        setIsFavoriteMovie(isFavorite)
      } else {
        ac.abort()
        // aborta todas as requisições em andamento quando isActive for false
      }
    }

    isActive && getMovie()

    return () => {
      isActive = false;
    }
  }, [])

  async function handleFavoriteMovie(movie) {
    if (isFavoriteMovie) {
      await deleteMovieFromFavorites(movie?.id)
      setIsFavoriteMovie(false)
    } else {
      await saveMovie(ASYNC_STORAGE_KEY, movie)
      setIsFavoriteMovie(true)
    }
  }

  if (loading) {
    return (
      <Container>
        <LoadingArea>
          <ActivityIndicator size={75} color={base3} />
        </LoadingArea>
      </Container>
    )
  } else {
    return (
      <Container>
        <Header>
          <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
            <Feather
              name="arrow-left"
              size={28}
              color={base3}
            />
          </HeaderButton>
          <HeaderButton onPress={() => handleFavoriteMovie(movie)}>
            <Ionicons
              name={isFavoriteMovie ? `bookmark` : `bookmark-outline`}
              size={28}
              color={base3}
            />
          </HeaderButton>
        </Header>

        <Banner resizeMethod='resize' source={{ uri: `${IMAGE_BASE_URL}${movie?.poster_path}` }} />

        {movie?.homepage && <ButtonLink onPress={() => setOpenLink(true)}>
          <Feather name="link" size={24} color={base3} />
        </ButtonLink>}


        <Title numberOfLines={2}>{movie?.title}</Title>
        <ContentArea>
          <Start
            default={movie?.vote_average}
            count={10}
            half={true}
            starSize={20}
            fullStar={<Ionicons name='md-star' size={24} color={base7} />}
            emptyStar={<Ionicons name='md-star-outline' size={24} color={base7} />}
            halfStar={<Ionicons name='md-star-half' size={24} color={base7} />}
            disable={true}
          />
          <Rate>{movie?.vote_average.toFixed(1)}/10</Rate>
        </ContentArea>
        <GenresList
          keyExtractor={(item) => String(item?.id)}
          data={movie?.genres}
          horizontal={true}
          showsHorizontalScrollIndicator
          renderItem={({ item }) => <Genres data={item} />}
        />

        {movie?.overview && <>
          <Title numberOfLines={1}>Descrição</Title>

          <ScrollView showsHorizontalScrollIndicator={false}>
            <Description>{movie?.overview}</Description>
          </ScrollView>
        </>}

        <Modal animationType='slide' transparent={true} visible={openLink}>
          <ModalLink
            link={movie?.homepage}
            title={movie?.title}
            closeModal={() => setOpenLink(false)}
          />
        </Modal>
      </Container>
    )
  }
}