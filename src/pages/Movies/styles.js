import styled from "styled-components/native";
import { base8 } from '../../constants/colors'

export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${base8};
`;

export const ListMovies = styled.FlatList`

`;

export const LoadingArea = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

