import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ButtonContainer, Number, TextView} from './styles';

const Button = props => {
  return (
    <>
      <ButtonContainer {...props}>
        <Icon name={'share'} size={30} color={'white'} />
        <Number>
          <TextView>Share</TextView>
        </Number>
      </ButtonContainer>
    </>
  );
};

export default Button;
