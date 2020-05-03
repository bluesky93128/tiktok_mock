import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: white;
`;

export const Number = styled.View`
  width: 40px;
  flex-wrap: wrap;
`;

export const TextView = styled.Text`
  font-size: 10px;
  text-align: center;
  color: black;
  margin-top: 10px;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
`;
