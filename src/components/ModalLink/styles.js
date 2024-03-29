import styled from 'styled-components/native';
import { base5, base3 } from '../../constants/colors';

export const BackButton = styled.TouchableOpacity`
padding: 10px;
background-color: ${base5};
margin-top: 60px;
flex-direction: row;
align-items: center;
`;

export const Name = styled.Text`
margin-left: 8px;
color: ${base3};
font-size: 18px;
font-weight:bold;
`;