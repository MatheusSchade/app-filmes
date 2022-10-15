import * as React from 'react';
import Header from '../../components/Header';
import { Container, SeachContainer, SearchButton, Input } from './styles';
import { Feather } from '@expo/vector-icons'
import { base3 } from '../../constants/colors';

export default function Home() {
  return (
    <Container>
      <Header title={`React Prime`} />
      <SeachContainer>
        <Input placeholder='Nome do filme' />
        <SearchButton>
          <Feather name='search' size={30} color={base3} />
        </SearchButton>
      </SeachContainer>
    </Container>
  );
}
