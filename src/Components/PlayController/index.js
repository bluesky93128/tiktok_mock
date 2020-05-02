import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProgressBar from 'react-native-progress/Bar';

import {Container, ProgressBarContainer} from './styles';
import {TouchableWithoutFeedback} from 'react-native';

const PlayController = props => {
  return (
    <>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <Container>
          {!props.isPlaying ? (
            <Icon name="play" size={50} color={'rgba(255, 255, 255, 0.5)'} />
          ) : (
            <></>
          )}
          <ProgressBarContainer>
            <ProgressBar
              indeterminate={props.indeterminate}
              progress={props.progress ? props.progress : 0}
              color={'#fff'}
              unfilledColor={'rgba(255, 255, 255, 0.5)'}
              width={null}
              height={1}
              borderWidth={0}
            />
          </ProgressBarContainer>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};

export default PlayController;
