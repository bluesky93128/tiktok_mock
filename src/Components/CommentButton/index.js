import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ButtonContainer, Number, TextView} from './styles';

const Button = props => {
  return (
    <>
      <ButtonContainer {...props}>
        <Icon name={'commenting'} size={35} color={'white'} />
        <Number>
          <TextView>14.5k</TextView>
        </Number>
      </ButtonContainer>
    </>
  );
};

export default Button;
