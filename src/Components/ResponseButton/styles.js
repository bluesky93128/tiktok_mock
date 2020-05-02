import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 80px;
  width: 40px;
  height: 40px;
  background-color: rgb(50, 50, 50);
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;

export const PlusIcon = styled.View`
  top: -7.5px;
  left: 12.5px;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 10px;
`;
