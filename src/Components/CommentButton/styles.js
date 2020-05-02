import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 180px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: white;
`;

export const Number = styled.View`
  width: 100%;
`;

export const TextView = styled.Text`
  text-align: center;
  color: white;
  font-size: 10px;
`;
