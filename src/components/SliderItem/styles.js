import styled from 'styled-components/native';
import { base3 } from "../../constants/colors";

export const Container = styled.TouchableOpacity`
padding: 16px 14px 16px 0;
width: 140px;
height: 180px;
`;

export const BannerItem = styled.Image`
width: 100%;
height: 170px;
border-radius: 8px;
`;

export const Title = styled.Text`
color: ${base3};
font-size: 14px;
padding: 8px 0 0 0;
`;

export const RateContainer = styled.View`
flex-direction: row;
align-items: center;
`;

export const Rate = styled.Text`
padding: 0 0 0 4px;
color: ${base3};
font-size: 12px;
`;

