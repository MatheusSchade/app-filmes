import styled from 'styled-components/native';
import { base3 } from "../../constants/colors";

export const Container = styled.TouchableOpacity`
padding: 14px;
`;

export const Banner = styled.Image`
width: 100%;
height: 140px;
border-radius: 8px;
`;

export const Title = styled.Text`
font-weight: bold;
color: ${base3};
font-size: 22px;
padding: 8px 0 0 0;
`;

export const RateContainer = styled.View`
flex-direction: row;
align-items: center;
padding: 4px 0 0 0;
`;

export const Rate = styled.Text`
color: ${base3};
font-weight: bold;
padding: 0 0 0 4px;
`;