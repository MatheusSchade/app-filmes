import styled from "styled-components/native";
import { base2, base3 } from "../../constants/colors";

export const Container = styled.View`
padding: 14px;
`;

export const Title = styled.Text`
color: ${base3};
font-size: ${props => props?.size}px;
font-weight: bold;
`;

export const RateContainer = styled.View`
flex-direction: row;
align-items: center;
padding: 8px 0;
`;

export const Rate = styled.Text`
color: ${base3};
font-size: 16px;
padding-left: 4px;
`;

export const ActionContainer = styled.View`
flex-direction: row;
align-items: center;
`;

export const DetailButton = styled.TouchableOpacity`
background-color: ${base2};
width: 85%;
height: 30px;
justify-content: center;
align-items: center;
border-radius: 30px;
`;

export const DeleteButton = styled.TouchableOpacity`
width: 15%;
height: 30px;
justify-content: center;
align-items: center;
`; 