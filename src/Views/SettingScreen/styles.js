import styled from 'styled-components/native';
import Video from 'react-native-video';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  background-color: black;
`;
export const VideoView = styled(Video)`
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const Title = styled.Text`
  width: 100%;
  margin-top: 10%;
  text-align: center;
  font-size: 24px;
  color: red;
`;

export const SwiperContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
