import styled from 'styled-components/native';
import { base3, base4, base8 } from "../../constants/colors";

export const Container = styled.SafeAreaView`
background-color: ${base8};
flex: 1;
padding: 4px 0;
`

export const SeachContainer = styled.View`
flex-direction: row;
width: 100%;
height: 50px;
align-items: center;
padding: 0 14px;
margin-bottom: 8px;
`;

export const Input = styled.TextInput`
background-color: ${base4};
width: 85%;
height: 50px;
border-radius: 50px;
padding: 8px 15px;
font-size: 18px;
`;

export const SearchButton = styled.TouchableOpacity`
width: 15%;
height: 50px;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
padding: 20px 14px 8px 14px;
font-size: 24px;
font-weight: bold;
color: ${base3};
`;

export const BannerButton = styled.TouchableOpacity`

`;

export const Banner = styled.Image`
height: 150px;
border-radius: 6px;
margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
height: 250px;
padding: 0 14px;
`;

export const LoadingArea = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

