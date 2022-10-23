import { useNavigation, useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import FavoriteItem from '../../components/FavoriteItem';
import Header from '../../components/Header';
import { ASYNC_STORAGE_KEY } from '../../constants';
import { deleteMovieFromFavorites, getMoviesSave } from '../../utils/storage';
import { Container, ListMovies } from './styles'

export default function Movies() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const [movies, setMovies] = useState([])

  useEffect(() => {
    let isActive = true

    async function getFavoriteMovies() {
      const result = await getMoviesSave(ASYNC_STORAGE_KEY)

      if (isActive) {
        setMovies(result)
      }
    }

    getFavoriteMovies()

    return () => {
      isActive = false
    }

  }, [isFocused])

  async function handleDelete(id) {
    const result = await deleteMovieFromFavorites(id)
    setMovies(result)
  }

  function navigationDetailPage(item) {
    navigation.navigate('Detail', { id: item?.id })
  }


  return (
    <Container>
      <Header title={`Meus filmes`} />
      <ListMovies
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={item => String(item?.id)}
        renderItem={({ item }) => (
          <FavoriteItem
            deleteMovie={handleDelete}
            data={item}
            navigatePage={() => navigationDetailPage(item)}
          />
        )}
      />
    </Container>
  )
}
