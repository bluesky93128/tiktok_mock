import styled from 'styled-components/native';
import Video from 'react-native-video';
import {StyleSheet} from 'react-native';

export const VideoView = styled(Video)`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const ContentContainer = styled.View`
  position: absolute;
  left: 10px;
  bottom: 80px;
  justify-content: flex-end;
  width: 60%;
`;

export const TextView = styled.Text`
  color: white;
  font-size: 12px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

export const Description = styled.View`
  flex-direction: row;
`;

export const styles = StyleSheet.create({
  Swipper: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
});
