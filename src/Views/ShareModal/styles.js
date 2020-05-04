import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 40%;
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
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  flex: 10;
  width: 100%;
  margin-bottom: 5px;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  flex: 1;
`;

export const ItemContent = styled.View`
  flex: 8;
`;

export const HeartContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const TextView = styled.Text`
  font-size: 20px;
  margin-bottom: 3px;
`;

export const InputContainer = styled.ScrollView`
  flex-direction: row;
  width: 100%;
  background-color: white;
`;

export const TextInput = styled.TextInput`
  flex: 8;
`;

export const SendButton = styled.TouchableOpacity`
  flex: 1;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const styles = StyleSheet.create({
  Modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
