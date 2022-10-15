import styled from 'styled-components/native';
import { base3 } from '../../constants/colors';

export const Container = styled.View`
height: 70px;
flex-direction: row;
align-items: center;
padding-left: 14px;
`

export const MenuButton = styled.TouchableOpacity`
height: 70px;
align-items: center;
flex-direction: row;
`;

export const Title = styled.Text`
font-size: 30px;
color: ${base3};
font-weight: bold;
margin-left: 10px;
`