import AsyncStorage from "@react-native-async-storage/async-storage";
import { ASYNC_STORAGE_KEY } from "../constants";

// Buscar os filmes salvos
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key)
  let moviesSaved = JSON.parse(myMovies) || []
  return moviesSaved
}

// Salvar um novo filme
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key)
  const hasMovie = moviesStored.some((item) => item?.id === newMovie?.id)

  if (!hasMovie) {
    moviesStored.push(newMovie)
    await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
  }
}

// Deletar filme salvo
export async function deleteMovieFromFavorites(id) {
  let moviesStored = await getMoviesSave(ASYNC_STORAGE_KEY)
  let myMovies = moviesStored.filter(item => item?.id !== id)
  await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(myMovies))

  return myMovies
}


// Filtrar filme se já está salvo
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave(ASYNC_STORAGE_KEY)
  const hasMovieChoosed = moviesStored.find(item => item?.id === movie?.id)

  if (hasMovieChoosed) {
    return true
  } else {
    return false
  }
}