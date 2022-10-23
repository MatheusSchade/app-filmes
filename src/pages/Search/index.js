import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from "react-native";
import {
  Container,
  LoadingArea,
  MovieList
} from './styles';
import { useNavigation, useRoute } from "@react-navigation/native"
import api from '../../services/api';
import { API_KEY } from '../../constants';
import SearchItem from '../../components/SearchItem';
import { base3 } from '../../constants/colors';

export default function Search() {
  const navigation = useNavigation()
  const { params } = useRoute()

  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    let isActive = true
    const ac = new AbortController()

    const apiParams = {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
        query: params?.inputSearch
      }
    }

    async function getSearchMovie() {
      const response = await api.get(`/search/movie`, apiParams)
        .catch((err) => {
          console.log('err getMovie()', err)
        })


      if (isActive) {
        setMovie(response?.data?.results)
        setLoading(false)
      } else {
        ac.abort()
      }
    }

    if (isActive) {
      getSearchMovie()
    } else {
      ac.abort()
    }

    return () => {
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
          <ActivityIndicator size={75} color={base3} />
        </LoadingArea>
      </Container>
    )
  } else {
    return (
      <Container>
        <MovieList
          data={movie}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item?.id)}
          renderItem={({ item }) => <SearchItem navigatePage={() => navigateDetailsPage(item)} data={item} />}
        />
      </Container>
    )
  }
}
