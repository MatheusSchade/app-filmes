import styled from 'styled-components/native';
import { base2, base3, base5 } from '../../constants/colors';

export const Container = styled.View`
flex: 1;
background-color: ${base5};
`;

export const Header = styled.View`
z-index: 99;
position: absolute;
top: 35px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
width: 46px !important;
height: 46px;
background-color: rgba(25,26,48,0.8);
justify-content: center;
align-items: center;
`;

export const Banner = styled.Image`
width: 100%;
height: 350px;
border-bottom-left-radius: 30px;
border-bottom-right-radius: 30px;
`;

export const LoadingArea = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
color: ${base3};
font-size: 24px;
font-weight: bold;
padding: 35px 14px 10px 14px;
`;

export const ButtonLink = styled.TouchableOpacity`
background-color: ${base2};
width: 64px;
height: 64px;
border-radius: 32px;
position: absolute;
top: 310px;
right: 10px;
justify-content: center;
align-items: center;
z-index: 99;
`;

export const ContentArea = styled.View`
flex-direction: row;
align-items: center;
padding: 0 14px;
justify-content: space-between;
`;

export const Rate = styled.Text`
font-size: 18px;
font-weight: bold;
color: ${base3};
`;

export const GenresList = styled.FlatList`
padding: 0 14px;
margin: 8px 0;
max-height: 35px;
min-height: 35px;
`;

export const Description = styled.Text`
font-size: 16px;
padding: 0 14px 30px 14px;
color: ${base3};
line-height: 20px;
`;