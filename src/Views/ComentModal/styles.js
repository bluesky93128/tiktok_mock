import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 60%;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 12px;
  width: 100%;
  text-align: center;
  margin: 5px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ListView = styled.View`
  width: 100%;
  height: 80%;
  padding-horizontal: 20px;
  background-color: red;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: green;
`;

export const styles = StyleSheet.create({
  Modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
